import { use, useState } from 'react'
import face_styles_1 from './face_1.module.css'

const Face = () => {
    const [styles, setStyles] = useState(face_styles_1)
    const [chatHistory, setChatHistory] = useState([ { "from": 'ai', "message": "..werewrew rewrqwewq ewqdxqwiodjhoqwijdo wiqjdoiqwjdoiwqjddoiwqj doiwqjdi ojsq." }, { "from": "user", "message": "lorem lipsum loreem lipsumm lorem lipsum lorem lipsum" } ])

    return(
        <>
          <div className={styles.container}>
            <div className={styles.chatContainer}>
              {chatHistory.map((chatMessage, i) => {
                return (
                  <div className={chatMessage.from == 'ai' ? styles.aiChatMessage : styles.userChatMessage} key={i}>
                    {chatMessage.message}
                  </div>
                )
              })}
            </div>
          </div>
        </>
    )
}

export default Face