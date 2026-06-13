"use client"
import { useEffect } from "react"

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://myappzchat.com/production/master/widget/embed-widget.umd.js"
    script.setAttribute("data-widget-id", "b003c446-7e95-4bd0-a797-f241f903863f")
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return null
}
