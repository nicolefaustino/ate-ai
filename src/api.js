import express from "express"
import cors from "cors"
import { GoogleGenerativeAI } from "@google/generative-ai"

const app = express()

// Configure CORS to allow your frontend
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // Add your frontend URLs
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
)

app.use(express.json())

// Initialize Gemini AI - Replace with your actual API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyDPTTuA5NsqWSmRRvGJg19lC9GFXohMYf0"
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)

app.post("/", async (req, res) => {
  try {
    console.log("Received request:", req.body)

    const { message, history = [] } = req.body

    if (!message) {
      console.log("No message provided")
      return res.status(400).json({ error: "Message is required" })
    }

    // Remove the API key check since you have a valid key
    console.log("Initializing Gemini model...")

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    // Filter and format history for Gemini
    // Remove the initial model message and ensure proper format
    const formattedHistory = history
      .filter((msg, index) => {
        // Skip the first message if it's from model (the welcome message)
        if (index === 0 && msg.role === "model") {
          return false
        }
        return true
      })
      .map((msg) => ({
        role: msg.role,
        parts: msg.parts,
      }))

    console.log("Formatted history:", formattedHistory.length, "messages")

    // Start chat with formatted history
    const chat = model.startChat({
      history: formattedHistory,
    })

    console.log("Sending message to Gemini:", message)

    // Send message and get response
    const result = await chat.sendMessage(message)
    const reply = result.response.text()

    console.log("Received reply from Gemini:", reply.substring(0, 100) + "...")

    res.json({ reply })
  } catch (error) {
    console.error("Detailed error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    })

    res.status(500).json({
      error: "Failed to get response from Gemini",
      details: error.message,
    })
  }
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running",
    geminiConfigured: !!GEMINI_API_KEY,
  })
})

// Test endpoint for debugging
app.post("/test", (req, res) => {
  console.log("Test endpoint hit with:", req.body)
  res.json({ message: "Test successful", received: req.body })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
  console.log(`Health check: http://localhost:${port}/health`)
  console.log(`Test endpoint: http://localhost:${port}/test`)
  console.log(`Gemini API Key configured: Yes`)
})
