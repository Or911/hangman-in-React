import { useState } from "react"
import Letter from "./Letter"

export function Letters (props){
    function generateLetterStatuses() {
        let letterStatus = {}
        for (let i = 65; i < 91; i++) {
          letterStatus[String.fromCharCode(i)] = false
        }
        return letterStatus
      }
      const [letters , setLetters] = useState(generateLetterStatuses())
    
      function clickedLetter (letter){
        if(letters[letter]){
            return
        }
        setLetters({...letters , [letter] : true})
        props.selectLetter(letter)
    }

      return (
      <div>
        <p>Available Letters</p>
        {Object.keys(letters).map(key =>  <Letter letter={key} status={letters[key]} clickLetter={clickedLetter} />)}
      </div>
      )
}