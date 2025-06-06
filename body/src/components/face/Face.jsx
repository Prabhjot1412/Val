import { use, useState } from 'react'

import face_styles_1 from './face_1.module.css'

const Face = () => {
    const [styles, setStyles] = useState(face_styles_1)
    const [chatHistory, setChatHistory] = useState([ { "from": 'ai', "message": "..werewrew rewrqwewq ewqdxqwiodjhoqwijdo wiqjdoiqwjdoiwqjddoiwqj doiwqjdi ojsq." }, { "from": "user", "message": "lorem lipsum loreem lipsumm lorem lipsum lorem lipsum" },{ "from": 'ai', "message": "..werewrew rewrqwewq ewqdxqwiodjhoqwijdo wiqjdoiqwjdoiwqjddoiwqj doiwqjdi ojsq." }, { "from": "user", "message": "lorem lipsum loreem lipsumm lorem lipsum lorem lipsum" },{ "from": 'ai', "message": "..werewrew rewrqwewq ewqdxqwiodjhoqwijdo wiqjdoiqwjdoiwqjddoiwqj doiwqjdi ojsq." }, { "from": "user", "message": "lorem lipsum loreem lipsumm lorem lipsum lorem lipsum" },{ "from": 'ai', "message": "..werewrew rewrqwewq ewqdxqwiodjhoqwijdo wiqjdoiqwjdoiwqjddoiwqj doiwqjdi ojsq." }, { "from": "user", "message": "lorem lipsum loreem lipsumm lorem lipsum lorem lipsum" }, ])
    const [message, setMessage] = useState('')

    const handleOnType = (e) => {
      let value = e.target.value
      setMessage(value)
    }

    const handleOnClick = () => {

    } 

    return(
        <>
          <div className={styles.container}>
            <div className={styles.chatContainer}>
              {chatHistory.map((chatMessage, i) => {
                return (
                  <div>
                    <div className={chatMessage.from == 'ai' ? styles.aiChatMessage : styles.userChatMessage} key={i}>
                      {chatMessage.message}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={styles.textAreaContainer}>
              <textarea className={styles.textArea}
                onChange={handleOnType}
              />

              <button className={styles.sendButton}
                onClick={handleOnClick}
              > Send </button>
            </div>
          </div>
        </>
    )
}

export default Face