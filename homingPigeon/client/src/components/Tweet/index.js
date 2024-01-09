import {Container, LikeButton} from "./styles"

export default function Tweet(props) {
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