import React, { useState, useEffect } from "react"
import {Container, LikeButton} from "./styles"
import axios from "axios"

export default function Tweet(props) {
    const[username, setUsername] = useState()
    useEffect(() =>{
        const fetchUsername = async() =>{
            try {
                const token = localStorage.getItem("SESSION_TOKEN")
                const response=await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/users/${props.owner}`,
                    {
                        headers: {"auth-token": token}
                    }
                )
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setUsername = (response.data.username)
            } catch (error) {
                console.error(error)
            }
        }
        fetchUsername()
    })
    return(
        <Container>
            <span>{props.owner}</span>
            <p>{props.content}</p>
            <div>
                <span>{props.likes.length}</span>
                <LikeButton>Like</LikeButton>
            </div>
        </Container>
    )
}