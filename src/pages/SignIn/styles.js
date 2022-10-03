import styled from "styled-components";

import backgroundImg from '../../assets/image/background-signIn.png'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 2.3fr;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;

    flex-direction: column;
    padding-inline: 13.6rem;
    padding-block: 2.4rem;
    text-align: left;

    > h2{
        text-align: left;
        margin-block: 4.8rem;
    }

    > a{
        color: ${({theme}) => theme.COLORS.PINK};
        line-height: 2.1rem;
        font-weight: 400;
        text-align: center;
        margin-top: 4.2rem;
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
    
`
export const Content = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`