import React, { useState } from "react"
import { Container, Content, Input, Button } from "./styles"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import Layout from "../../components/Layout"
//CONTINUE FROM PAGE 29 PDF.
export default function Register(){
	const[username, setUsername] = useState("")
	const[password, setPassword] = useState("")
	const navigate = useNavigate()
	
	const handleRegister = async event =>{
		event.preventDefault()
		if(!username || !password) return;

		try {
			await axios.post("http://localhost:3000/login", {
				username,
				password
			})
			console.log({ username, password })
			return navigate("/")
		} catch (error) {
			console.error(error)
		}
	}
	return(
		<Container>
			<Content>
				<div>
					<label>Username: </label>
					<Input 
						value={username}
						onChange={e => setUsername(e.target.value)}
						type="text" 
						/>
				</div>
				<div>
					<label>Password: </label>
					<Input 
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="text" 
						/>
				</div>
				
				<div>
					<a href="/">Cancel </a>
					<Button onClick={handleRegister} type="submit">Register</Button>
				</div>
			</Content>
		</Container>
	)
}