import { useState, useRef, useEffect } from "react"
import { ArrowLeftIcon, PlusIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

const API_URL = "http://localhost:8080"

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts: [
        {
          text: "Kumusta! I'm your AI business mentor. Tutlong mo lang kung may kailangan kang negosyo tips!",
        },
      ],
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendToGemini = async (message, history) => {
    console.log("Sending request to:", API_URL)
    console.log("Request payload:", { message, history })

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history }),
    })

    console.log("Response status:", res.status)
    console.log("Response ok:", res.ok)
    console.log("Response headers:", Object.fromEntries(res.headers.entries()))

    if (!res.ok) {
      console.error("Request failed with status:", res.status)

      const responseText = await res.text()
      console.error("Raw response text:", responseText)

      let errorData
      try {
        errorData = JSON.parse(responseText)
        console.error("Parsed error data:", errorData)
      } catch (parseError) {
        console.error("Failed to parse error response as JSON:", parseError)
        errorData = { error: "Unknown error", rawResponse: responseText }
      }

      throw new Error(
        `HTTP error! status: ${res.status}, message: ${errorData.error || errorData.message || "Unknown error"}`,
      )
    }

    const data = await res.json()
    console.log("Successful response:", data)
    return data.reply
  }

  const sendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim() || isLoading) return

    const userMessage = {
      role: "user",
      parts: [{ text: messageText }],
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      // The server will filter out the initial model message
      const history = messages.map((msg) => ({
        role: msg.role,
        parts: msg.parts,
      }))

      console.log("Starting message send process...")
      const reply = await sendToGemini(messageText, history)

      const aiMessage = {
        role: "model",
        parts: [{ text: reply }],
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error in sendMessage:", error)
      console.error("Error stack:", error.stack)
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Sorry, I'm having trouble responding right now. Please try again." }],
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
    sendMessage(question)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E1]">
      {/* Header */}
      <div className="bg-[#E53E3E] px-4 py-3 flex items-center">
        <Link to="/" className="mr-3">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </Link>
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-white font-bold text-lg">Ate Ai</h1>
            <p className="text-white text-xs opacity-90">Your Suki helper!</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#8B4513] flex items-center justify-center ml-1">
            <span className="text-xl">👩🏻</span>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 p-4 flex flex-col overflow-hidden">
        {/* Quick questions */}
        {messages.length === 1 && (
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Quick Questions:</p>
            <div className="space-y-2">
              <button
                onClick={() => handleQuickQuestion("Paano ko ma-increase ang sales ko?")}
                className="w-full border border-orange-300 rounded-full px-4 py-2 bg-white text-left hover:bg-orange-50 transition-colors"
              >
                <p className="text-gray-700">Paano ko ma-increase ang sales ko?</p>
              </button>
              <button
                onClick={() => handleQuickQuestion("Ano-ano ang mga mabenta ngayon?")}
                className="w-full border border-orange-300 rounded-full px-4 py-2 bg-white text-left hover:bg-orange-50 transition-colors"
              >
                <p className="text-gray-700">Ano-ano ang mga mabenta ngayon?</p>
              </button>
            </div>
          </div>
        )}

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "model" && (
                <div className="w-8 h-8 rounded-full bg-[#8B4513] flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-lg">👩🏻</span>
                </div>
              )}
              <div
                className={`rounded-2xl p-3 max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-[#E53E3E] text-white rounded-tr-none"
                    : "bg-[#D6F87A] text-gray-800 rounded-tl-none"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.parts[0].text}</p>
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center ml-2 flex-shrink-0">
                  <span className="text-lg">👤</span>
                </div>
              )}
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-[#8B4513] flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-lg">👩🏻</span>
              </div>
              <div className="bg-[#D6F87A] rounded-2xl rounded-tl-none p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Address */}
        <div className="text-right text-xs text-gray-500 mb-4">
          <p>32, C Jeeva street sivagiri</p>
          <p>sivagiri (TP) erode - 638109</p>
        </div>
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="bg-white p-3 flex items-center gap-2">
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 hover:bg-green-700 transition-colors"
        >
          <PlusIcon className="w-6 h-6 text-white" />
        </button>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 h-10 px-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <PaperAirplaneIcon className="w-5 h-5 text-white" />
        </button>
      </form>
    </div>
  )
}
