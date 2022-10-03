import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
`


export const Header = styled.div`
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;
`

export const Form = styled.form`
    max-width: 34rem;
    margin: -8.4rem auto;
    
    
    .name-email{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 2.4rem;
    }

    .password{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 2.4rem;
    }

    .error{
        color: red;
        font-size: 1.5rem;
    }
`
export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 6.4rem;
    width: 18.6rem;
    height: 18.6rem;

    >img{
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label{
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;

        input{
            display: none;
        }

        > svg{
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};;
        }
    }
    
`