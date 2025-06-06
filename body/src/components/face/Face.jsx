import { use, useState } from 'react'

import face_styles_1 from './face_1.module.css'
import Think from '../nerves/Nerve'

const Face = () => {
    const [styles, setStyles] = useState(face_styles_1)
    const [chatHistory, setChatHistory] = useState([])
    const [message, setMessage] = useState('')
    const [awaitingResponse, setAwaitingResponse] = useState(false)

    const handleOnType = (e) => {
      let value = e.target.value
      setMessage(value)
    }

    const handleOnClick = async () => {
      let chatContainer = document.getElementById('chatContainer')
      let history = [...chatHistory, {"from": "user", "message": message}]
      setChatHistory(history)
      setMessage('')

      setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1000)

      setAwaitingResponse(true)
      let reply = await Think(message)
      setAwaitingResponse(false)

      history = [...history, {"from": "ai", "message": reply.message}]
      setChatHistory(history)

      setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1000)
    } 

    return(
        <>
          <div className={styles.container}>
            <div id='chatContainer' className={styles.chatContainer}>
              {chatHistory.map((chatMessage, i) => {
                return (
                  <div key={i}>
                    <div className={chatMessage.from == 'ai' ? styles.aiChatMessage : styles.userChatMessage}>
                      {chatMessage.message}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={styles.textAreaContainer}>
              <textarea className={styles.textArea}
                onChange={handleOnType}
                value={message}
              />

              <button className={styles.sendButton}
                onClick={handleOnClick}
                disabled={awaitingResponse}
              > Send </button>
            </div>
          </div>
        </>
    )
}

export default Face