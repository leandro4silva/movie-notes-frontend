import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    gap: 6.4rem;
    padding: 3rem 2.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK_100};

    .menu{
   
        transform: translateY(100%);
    }

    .vertical-menu{
        display: none;
    }

    ul{
        display: none;
    }

    &.menu-expanded .menu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100vh;
        width: 100%;
    
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};

        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        z-index: 1;


        transform: translateY(0%);
        transition: transform 300ms ;

        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4rem;
        }

        ul li a{
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 2.8rem;
        }

        .close-menu{
            display: block;
            position: fixed;
            top: 0;
            left: 0;
        }
    }   

    .open-menu, .close-menu{
        border: none;
        background: transparent;
    }

    .close-menu{
        display: none;
    }
    
    &.menu-expanded .close-menu{
        display: block;
        position: fixed;
        top: 3rem;
        right: 2.2rem;
        z-index: 1;
    }

    &.menu-expanded .logo{
        display: block;
        position: fixed;
        top: 3.5rem;
        left: 2.2rem;
        z-index: 2;
    }

    
    @media (min-width: 1024px) {
        grid-area: header;
        padding: 3rem 12.3rem;

        .menu{
            display: flex;
            align-items: center;
            gap: 6.4rem;
            width: 80%; 
            transform: translateY(0%);   
        }

        .vertical-menu{
            display: flex;
            align-items: center;
            gap: 6.4rem;
            width: 100%;
        }

        .open-menu, .close-menu{
            display: none;
        }
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

