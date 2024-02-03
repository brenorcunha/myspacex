import React, {useState} from "react"
import Layout from "../../components/Layout"
import { Container, Content, Input, Button, ErrorWarning } from './styles'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import jwt from "jsonwebtoken"

export default function Login(){
	const[username, setUsername] = useState("")
	const[password, setPassword] = useState("")
	const navigate = useNavigate()
	const[error, setError] = useState("") 
	const handleLogin = async event=> {
		//event.preventDefault()
		if(!username || !password) return;

		try {
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
				username,
				password
			})
			console.log(jwt.decode(response.data.token))
			localStorage.setItem("SESSION_TOKEN", response.data.token) 
			return navigate("/home")
		} catch (error) {
			console.log.error(error)

			//Error treatment:
			if(error.response.status===404){
				setError("Username not found.")
			} else if(error.response.status===400){
				setError("Wrong password!")
			}
			setPassword("")
		}
		
	}
	return (
		<Layout>
			<Container>
				
				<Content>
					<p>Welcome 2 homingPigeon!</p>
					{error && <ErrorWarning>(error)</ErrorWarning>}
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
						type="password" 
						/>
					</div>
					
					<div>
						<a href="/register">Create account </a>
						<Button onClick={handleLogin} type="submit">Enter</Button>
					</div>
				</Content>
			</Container>
		</Layout>
	)
}