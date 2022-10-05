import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    @media (min-width: 1024px) {
        grid-template-rows: 13.3rem auto;
        display: grid;
        grid-template-areas: 'header' 
                             'content';
    }
`
export const Content = styled.div`
    
    
    padding-inline: 2.2rem;
    overflow-y: auto;

    > header{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-weight: 400;
            font-size: 2.3rem;
            color: white;
            line-height: 1.6rem;
        }

        a{
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            border-radius: 0.8rem;
            padding: 1.5rem 1.2rem;
        }

    }

    .search{
        margin-top: 2.5rem;
    }

    .movie-list{
        margin-top: 2.5rem;

        .any-movie{
            height: 40vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }


    @media (min-width: 1024px) {
        padding-inline: 12.3rem;
        grid-area: content;


        > header{
            h2{
                font-size: 3.2rem;
                line-height: 4.2rem;
            }

            a{
                padding: 1.3rem 3.2rem;
            }
        }

        .search{
            display: none;
        }

        .movie-list{
            margin-top: 3.7rem;
        }
    }

`

