import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 13.3rem auto;
    grid-template-areas: 'header'
                         'content';


    header{
        margin-top: 4rem;
    }
` 


export const Content = styled.div`
    grid-area: content;
    padding-inline: 2.2rem;
    overflow-y: auto;
    padding-bottom: 8.5rem;

    > h2{
        font-size: 3.6rem;
        line-height: 4.7rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        margin-top: 2.4rem;
    }


    @media (min-width: 1024px) {
        padding-inline: 12.3rem;
    }
`


export const Form = styled.form`
    width: 100%;
    margin-top: 4rem;

    .error{
        color: red;
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }

    > .input-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    > .textarea-wrapper{
        margin-top: 4rem;
    }

    > .input-tags{
        margin-top: 4rem;
        > h3{
            color: ${({theme}) => theme.COLORS.GRAY_300};
            font-size: 2rem;
            line-height: 2.6rem;
            font-weight: 400;
        }

        > .handle-tags{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 2.4rem;
            width: 100%;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            padding: 1.6rem;
            border-radius: 0.8rem;
            margin-top: 2.4rem;
        }
    }

    > .input-button{
        margin-top: 4rem;
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    @media (min-width: 1024px) {
        >.input-wrapper{
            column-gap: 4rem;
        } 

        >.input-tags{
            > .handle-tags{       
                flex-direction: row;
            }
        }
    }
`