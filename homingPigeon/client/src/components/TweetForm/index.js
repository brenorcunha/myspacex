import React, {useState} from "react"
import {Container} from "./styles"
import axios from "axios"

export default function TweetForm() {
    const[text, setText] = useState()

    const handleTweet = async event =>{
        event.preventDefault()
        //THE PAGE TWEETS WILL BE CREATED FUTURELLY.
        try{
            const response = await axios.post(
                "http://localhost:3000/tweets",
                {
                    content: text
                },
                {
                    // eslint-disable-next-line no-use-before-define
                    headers: { "auth:token": localStorage.setItem("SESSION_TOKEN", response.data.token) }
                }
            )
            setText("")
            console.log(response)
        }
        catch(error){
            console.error(error)
        } 
   }
    return(
        <Container>
            
            <textarea 
            required
            value = {text}
            onChange={e => setText(e.target.value)}
            placeholder="What do you want to share with us?"
            rows={4}
            />
            
            <div>
                <button onClick={handleTweet}>Share</button>
            </div>
        </Container>
    )
}