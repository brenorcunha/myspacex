import styled from "styled-components"

export const Container = styled.div`
    display: flex
    flex-direction: column
    padding: 1rem
    border: 1px solid #CCCCCC

    > textarea {
        resize: none
        margin-bottom: 1rem
        color: #1DA1F2
        border: 1px solid #1DA1F2
        border-radius: 10px
    }
    > div {
        display: flex
        justify-content; flex-end

        > button{
            background: white
            border: 1px solid #1DA1F2
            padding: 0.4rem1 rem
            border-radius: 20px
            color: #1DA1F2
            font-weight: 600
            cursor: pointer

            &: hover{
                background: #1DA1F2
                color: white
            }
        }
    }
`
