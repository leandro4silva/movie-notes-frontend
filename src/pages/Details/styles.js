import styled from "styled-components";
import theme from "../../styles/theme";

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

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 4rem;

        > button:last-child{
            background: transparent;
            border: none;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
 
    .title-rating{
        display: flex;
        align-items: center;
        gap: 1.9rem;
        margin-top: 2.4rem;

        h2{
            font-size: 3.6rem;
            line-height: 4.7rem;
            font-weight: 500;
        }
    }

    .user-created-at{
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-top: 2.4rem;

        > img:first-child{
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
        }
    }


    .tags{
        display: flex;
        align-items: center;
        margin-top: 4rem;
        gap: 0.8rem;
    }

    > p{
        margin-top: 4rem;
        line-height: 2.1rem;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        text-align: justify;
    }

`