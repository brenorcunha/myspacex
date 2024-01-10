import React, {useState, useEffect} from "react"
import axios from "axios"

import TweetForm from "../../components/TweetForm"
import TweetList from "../../components/TweetList"
import Layout from "../../components/Layout"

export default function Home(){
	const[tweets, setTweets] = useState([])
	useEffect(()=>{
		const fetchTweets = async () => {
			try {
				const tweetResponse = await axios.get(`http://localhost:3000/tweets`, 
					{
						// eslint-disable-next-line no-use-before-define
						headers:{"authToken": localStorage.setItem("SESSION_TOKEN", tweetResponse.data.token) }
					}
				)
				const tweetUsers = await Promise.all(
					tweetResponse.data.map(async tweet => {
						const user = await axios.get(`http://localhost:3000/users/${tweet.owner}`,
						{
							headers: {"auth-token": localStorage.setItem("SESSION_TOKEN", tweetResponse.data.token)}
						}
					)
					
					return {...tweet, username: user.data.username}
				})
			)
			setTweets(tweetUsers)
		
			} catch (error) {
				console.error(error)
			}
		}
		fetchTweets()
	},[])

	return(
		<Layout>
			<div>Welcome 2 homingPigeon!</div>
			<TweetForm />
			<TweetList tweets={tweets}/>
		</Layout>
	)
}