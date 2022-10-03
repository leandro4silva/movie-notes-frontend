import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    border: ${({hasError}) => hasError ? "1px solid red" : "none"};

    > input{
        background-color: transparent;
        border: none;
        padding: 1.6rem;
        width: 100%;
        height: 5.6rem;
        color: white;
        
        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    > svg{
        margin-left: 1.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

`

