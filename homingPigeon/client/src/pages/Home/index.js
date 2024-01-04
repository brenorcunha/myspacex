import React from "react"

export default function Home(){
	return(
		<div>
			<div>
				<div>
					<label>Home Username: </label>
					<input type="text" />
				</div>
				<div>
					<label>Home Password: </label>
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