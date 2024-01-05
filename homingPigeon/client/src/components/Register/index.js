import React from "react"
import { Container, Content, Input, Button } from "./styles"

export default function Register(){
	return(
		<Container>
			<Content>
				<div>
					<label>Username: </label>
					<Input type="text" />
				</div>
				<div>
					<label>Password: </label>
					<Input type="password" />
				</div>
				
				<div>
					<a href="/">Cancel </a>
					<Button type="submit">Register</Button>
				</div>
			</Content>
		</Container>
	)
}