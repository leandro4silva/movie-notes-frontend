import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 13.3rem auto;
    grid-template-areas: 'header' 
                         'content';
`
export const Content = styled.div`
    
    grid-area: content;
    padding-inline: 12.3rem;
    overflow-y: auto;

    > header{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-weight: 400;
            font-size: 3.2rem;
            color: white;
            line-height: 4.2rem;
        }

        a{
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            border-radius: 0.8rem;
            padding: 1.3rem 3.2rem;
        }

    }

    .movie-list{
        margin-top: 3.7rem;
    }
`

