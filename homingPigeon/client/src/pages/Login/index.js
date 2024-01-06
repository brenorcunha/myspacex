import React, {useState} from 'react'
import Layout from "../../components/Layout"
import { Container, Content, Input, Button } from './styles'
import axios from 'axios'

export default function Login(){
	const[username, setUsername] = useState("")
	const[password, setPassword] = useState("")

	const handleLogin = async event=> {
		event.preventDefault()
		if(!username || !password) return;

		try {
			const response = await axios.post("http://localhost:3000/login", {
				username,
				password
			})
			console.log({ username, password }, response)
		} catch (error) {
			console.error(error)
		}
		
	}
	return (
		<Layout>
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