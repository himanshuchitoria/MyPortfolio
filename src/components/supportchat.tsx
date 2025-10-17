import React, { useState, useEffect, useRef } from 'react';

import blueImage from '../images/ai-assistant.png';


type ChatMessage = {
  sender: 'user' | 'bot';
  text: string;
};

const SupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const backendUrl = 'https://portfolio-backend-uroc.onrender.com'; 

  // Create session and add bot greeting
  useEffect(() => {
    async function createSession() {
      try {
        const resp = await fetch(`${backendUrl}/api/session/create`, { method: 'POST' });
        if (resp.ok) {
          const data = await resp.json();
          setSessionId(data.session_id);
          setChatLog([{ sender: 'bot', text: data.bot_message }]);
        } else {
          console.error('Failed to create session');
        }
      } catch (err) {
        console.error('Error creating session:', err);
      }
    }
    createSession();
  }, []);

  // Scroll to bottom whenever chatLog updates
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendQuery = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery || !sessionId) return;

    // Add user message to chat log
    setChatLog((prev) => [...prev, { sender: 'user', text: trimmedQuery }]);
    setQuery('');

    try {
      const resp = await fetch(`${backendUrl}/api/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: trimmedQuery, session_id: sessionId }),
      });
      if (resp.ok) {
        const data = await resp.json();
        // Add bot response to chat log
        setChatLog((prev) => [...prev, { sender: 'bot', text: data.response }]);
      } else {
        setChatLog((prev) => [...prev, { sender: 'bot', text: 'Error: Unable to get response' }]);
      }
    } catch {
      setChatLog((prev) => [...prev, { sender: 'bot', text: 'Error: Network error' }]);
    }

    inputRef.current?.focus();
  };

  // Send on Enter key press
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendQuery();
    }
  };

  return (
    <>
      {/* Floating chat bubble */}
      <div
  onClick={toggleChat}
  style={{
    position: 'fixed',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,

    backgroundImage: `url(${blueImage})`,
    backgroundSize: 'cover',      // cover the whole div
    backgroundPosition: 'center', // center the image
    backgroundRepeat: 'no-repeat',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 30,
    boxShadow: '0 15px 20px rgba(0,0,0,0.3)',
    zIndex: 1000,
  }}
  aria-label="Open support chat"
>
</div>


      {/* Chat window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="support-chat-title"
          style={{
            position: 'fixed',
            bottom: 100,
            right: 30,
            width: 350,
            height: 450,
            backgroundColor: 'transparent',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            zIndex: 1001,
          }}
        >
          <div
  style={{
   
    backgroundColor: 'black',
    color: 'white',
    borderTopLeftRadius: 10,
    
    flexDirection: 'row',  // container changes to row
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    boxShadow: '0 1px 5px rgba(56, 54, 54, 0.74)',
    paddingTop:'10px',
  }}
>
  <h3
    id="support-chat-title"
    style={{
      margin: 0,
      writingMode: 'vertical-rl',  // rotate text vertically
      textOrientation: 'mixed',    // keep text upright
      fontSize: 26,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: 'white',
      userSelect: 'none',
    }}
  >
    <b>SUPPORT CHAT</b>
  </h3>
</div>

          <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                
            }}>

          <div
            style={{
              flex: 1,
              padding: 10,
              overflowY: 'auto',
              backgroundColor: '#f9f9f9',
              fontSize: 14,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {chatLog.map(({ sender, text }, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: sender === 'user' ? '#d65039ff' : '#e0e0e0',
                  color: sender === 'user' ? 'white' : 'black',
                  padding: '8px 12px',
                  borderRadius: 20,
                  maxWidth: '75%',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            style={{
              padding: 10,
              borderTop: '1px solid #ddd',
              display: 'flex',
              backgroundColor: 'white',
              gap: 8,
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: 8,
                fontSize: 14,
                borderRadius: 10,
                border: '1px solid #ccc',
                outline: 'none',
              }}
              ref={inputRef}
              autoFocus
              aria-label="Type your question"

              
            />
            <button
              onClick={sendQuery}
              style={{
               background: 'linear-gradient(to right, #e50914, #221f1f)',
                color: 'white',
                border: 'none',
                borderRadius: 10,
                padding: '8px 16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              aria-label="Send question"
              type="button"
            >
              Ask
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default SupportChat;

