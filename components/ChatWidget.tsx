'use client'
import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

type Stage = 'chat' | 'collect_name' | 'collect_email' | 'collect_phone' | 'done'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! 👋 I'm the BCG Immigration Assistant. I can help you with Express Entry, BC PNP, Study Permits, Work Permits, and more. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState<Stage>('chat')
  const [lead, setLead] = useState({ name: '', email: '', phone: '' })
  const [msgCount, setMsgCount] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    setMessages(prev => [...prev, { role, content }])
  }

  const handleSend = async () => {
    if (!input.trim()) return
    const userText = input.trim()
    setInput('')
    addMessage('user', userText)

    if (stage === 'collect_name') {
      setLead(prev => ({ ...prev, name: userText }))
      setStage('collect_email')
      addMessage('assistant', `Nice to meet you, ${userText}! 😊 What's your email address?`)
      return
    }
    if (stage === 'collect_email') {
      setLead(prev => ({ ...prev, email: userText }))
      setStage('collect_phone')
      addMessage('assistant', 'Got it! And your phone number? (optional — type skip to continue)')
      return
    }
    if (stage === 'collect_phone') {
      const finalLead = { ...lead, phone: userText.toLowerCase() === 'skip' ? '' : userText }
      setStage('done')
      await submitLead(finalLead)
      return
    }

    setLoading(true)
    const newCount = msgCount + 1
    setMsgCount(newCount)

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history }),
      })
      const data = await res.json()
      addMessage('assistant', data.reply)

      if (newCount >= 3 && stage === 'chat') {
        setTimeout(() => {
          setStage('collect_name')
          addMessage(
            'assistant',
            "Would you like to speak with our RCIC directly? 🎯 Let me take your details for a FREE consultation. What's your name?"
          )
        }, 1000)
      }
    } catch {
      addMessage(
        'assistant',
        "Sorry, I'm having trouble connecting. Please call us at +1 (604) 203-1200 or visit https://my-url.in/bcgimmigration"
      )
    }
    setLoading(false)
  }

  const submitLead = async (finalLead: typeof lead) => {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalLead),
      })
      addMessage(
        'assistant',
        `Thank you, ${finalLead.name}! 🎉 Our RCIC will contact you within 24 hours. You can also book directly at https://my-url.in/bcgimmigration`
      )
    } catch {
      addMessage(
        'assistant',
        'Thank you! You can book directly at https://my-url.in/bcgimmigration'
      )
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#c9a84c',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(201,168,76,0.5)',
          zIndex: 9999,
          fontSize: '26px',
        }}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat Popup */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '24px',
            width: '360px',
            height: '500px',
            borderRadius: '16px',
            background: '#0d1526',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9998,
            overflow: 'hidden',
            border: '1px solid #1e2a3a',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#0a0f1e',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderBottom: '1px solid #1e2a3a',
            }}
          >
            <div
              style={{
                background: '#c9a84c',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#0d1526',
                fontSize: '12px',
                flexShrink: 0,
              }}
            >
              BCG
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>
                BCG Immigration Assistant
              </div>
              <div style={{ color: '#4ade80', fontSize: '11px' }}>● Online</div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius:
                      m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: m.role === 'user' ? '#c9a84c' : '#1e2a3a',
                    color: m.role === 'user' ? '#0d1526' : '#e2e8f0',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    wordBreak: 'break-word',
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ color: '#64748b', fontSize: '13px', paddingLeft: '4px' }}>
                Typing…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px',
              borderTop: '1px solid #1e2a3a',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !loading && handleSend()}
              placeholder={
                stage === 'collect_name'
                  ? 'Enter your name…'
                  : stage === 'collect_email'
                  ? 'Enter your email…'
                  : stage === 'collect_phone'
                  ? 'Phone number or type skip…'
                  : 'Ask about immigration…'
              }
              disabled={stage === 'done'}
              style={{
                flex: 1,
                background: '#1e2a3a',
                border: '1px solid #2d3f55',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'white',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSend}
              disabled={loading || stage === 'done'}
              style={{
                background: '#c9a84c',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 16px',
                cursor: loading || stage === 'done' ? 'not-allowed' : 'pointer',
                color: '#0d1526',
                fontWeight: '600',
                fontSize: '13px',
                opacity: loading || stage === 'done' ? 0.7 : 1,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
