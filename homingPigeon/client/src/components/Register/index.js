import React from "react"

export default function Register(){
	return(
		<div>
			<div>
				<div>
					<label>Username: </label>
					<input type="text" />
				</div>
				<div>
					<label>Password: </label>
					<input type="password" />
				</div>
				
				<div>
					<a href="/">Cancel </a>
					<button type="submit">Register</button>
				</div>
			</div>
		</div>
	)
}