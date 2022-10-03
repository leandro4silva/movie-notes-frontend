import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
    gap: 6.4rem;
    padding: 3rem 12.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK_100};

    > div:nth-last-child(2){
        flex-grow: 1;
        flex-basis: 63.3rem;
    }
`

export const Logo = styled(Link)`
    flex-grow: 1;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.1rem;
`
export const Profile = styled.div`
    flex-grow: 1;
    
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.9rem;
    
    > div{
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: flex-end
        ;
        a:first-child{  
            white-space: nowrap;
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        button{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_300};
            font-weight: 400;
            background-color: transparent;
            border: none;
        }
    }   

    > a{
        img{
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
        }
    }
`

