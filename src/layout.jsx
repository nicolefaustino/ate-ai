import "./index.css"

export const metadata = {
  title: "Ate Ai - Sari Sari Store",
  description: "Your friendly neighborhood sari-sari store app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="max-w-sm mx-auto bg-white min-h-screen">{children}</div>
      </body>
    </html>
  )
}