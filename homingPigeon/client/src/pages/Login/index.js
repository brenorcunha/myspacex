import React from 'react'

export default function Login(){
	return (
		<div>
			<form>
				<div>
					<label>Username: </label>
					<input type="text" />
				</div>
				<div>
					<label>Password: </label>
					<input type="password" />
				</div>
				
				<div>
					<a href="/register">Create account </a>
					<button type="submit">Enter</button>
				</div>
			</form>
		</div>
	)
}