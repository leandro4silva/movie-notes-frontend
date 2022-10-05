import styled from "styled-components";

import backgroundImg from '../../assets/image/background-signIn.png'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1.5fr 2.3fr;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    
    flex-direction: column;
    
    padding-inline: 2.2rem;
    text-align: left;
    
    > h2{
        text-align: left;
        margin-block: 1.8rem;
    }
    
    > a{
        color: ${({theme}) => theme.COLORS.PINK};
        line-height: 2.1rem;
        font-weight: 400;
        font-size: 1.6rem;
        
        margin-top: 4.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        
        > svg{
            font-size: 2.4rem;
        }
    }
    
    > div{
        margin-bottom: 0.8rem;
    }
    
    > button {
        margin-top: 2.4rem;
    }
    
    .error{
        margin-bottom: 1rem;
        color: red;
        font-size: 1.5rem;
    }

    .alert-success{
        padding: 2.6rem;
        background-color: green;
        border-radius: 0.4rem;
        margin-top: 4.8rem;
    }

    @media (min-width: 1024px) {
        padding-inline: 13.6rem;
        padding-block: 2.4rem;

        >h2{
            margin-block: 2.8rem;
        }
    }
    
    `
export const Content = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        flex: 1;
        background: url(${backgroundImg}) no-repeat center center;
        background-size: cover;
    }
`