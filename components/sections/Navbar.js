import styled, {ThemeProvider, css} from "styled-components"
import Link from 'next/link'
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { lightTheme, darkTheme, GlobalStyles } from '../themes'
import { MenuItemsLinks } from '../data'
import { motion } from "framer-motion";
import { textMotion } from "../animation";


const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    transition: var(--transition);
    
    ${(props) =>
    props.isScrolled &&
    css`
      background-color: ${(props) => props.theme.body};
    `}
    
    @media only screen and (max-width: 448px) {
        padding: 0 20px;
    }

    
`;

const TitleLogo = styled(motion.div)`
    color: var(--primaryColor);
    font-size: 2rem;
    font-family: 'Allison', cursive;
`;

const MenuItems = styled(motion.div)`
    display: flex;
    gap: 50px;
    align-items: center;
    font-size: 1rem;

    @media (max-width: 768px){
        display: flex;
        position: fixed;
        top: 0;
        right: -100%;
        width: 200px;
        background: #29C7AC;
        justify-content: center;
        gap: 100px;
        z-index: 1;
        opacity: 0;
    }
    &.active{
        right: 0;
        opacity: 1;
        height: 100vh;
        display: flex;
        flex-direction: column;
        transition: var(--transition);
        
    }

    > a{
        cursor: pointer;
        color: ${props => props.theme.fontColor};
    }
`;

const MobileMenuBtn = styled.div`
    height: 35px;
    width: 35px;
    border: solid 1px #FF5252;
    border-radius: 3px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    display: none;
    position: relative;
    z-index: 2;

    @media (max-width: 768px){
        display: flex;
        
    }
   
`;

const MobileMenuBurger = styled.div`
    height: 3px;
    width: 20px;
    background: ${props => props.theme.fontColor};
    border-radius: 3px;
    transition: var(--transition);


    &:before,
    &:after {
        content: '';
        width: 20px;
        height: 3px;
        background: ${props => props.theme.fontColor};
        position: absolute;
        border-radius: 3px;
        transition: var(--transition);
    }

    &:before{
        transform: translateY(-8px);
    }
    &:after{
        transform: translateY(8px);
    }
    
    &.active{
        transform: translateX(-50px);
        background: transparent;
    }
    &.active:before{
        transform: rotate(45deg) translate(35px, -35px);
        transition: var(--transition);
    }
    &.active:after{
        transform: rotate(-45deg) translate(35px, 35px);
        transition: var(--transition);
    }
`;

const LightDarkTheme = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`;

const Navbar = () => {

    const [theme, setTheme] = useState('dark');
    const [sidebar, setSidebar] = useState(false);
    const [width, setWidth] = useState(0);

    const [isScrolled, setIsScrolled] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);

    const ChangeIcon = () => {
        if (theme === 'dark'){
            return(
                <FiSun size={20}/>
            )
        } else {
            return(
                <FiMoon size={20}/>
            )
        }
    }

    const themeToggler = () => {
        theme === 'light' ? setTheme ('dark') : setTheme ('light');
    };

    const handleResize = () => setWidth(window.innerWidth)
        useEffect(() => {
            if (window.innerWidth > 768) {
                setSidebar(false)
            }
            window.addEventListener('resize', handleResize)
        },[width])

    
    const onScroll = () => {
        const scrollTop = window !== undefined ? window.pageYOffset : 0;

        setIsScrolled(scrollTop > 0)

    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true})
        return () =>{
            window.removeEventListener('scroll', onScroll, { passive: true })
        }
    }, [])
    

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Header>
                <Nav isScrolled={ isScrolled }>
                    <TitleLogo 
                     initial={{ y: -100 }}  
                     animate={{ y: 0 }}
                     transition={{delay: 0.2}}
                     whileHover={{ color: 'var(--outlineColor)' }}
                    >
                        <Link href='/'>
                            <a>MJ.</a>
                        </Link>
                    </TitleLogo>
                    <MenuItems 
                        initial={{ y: -100 }}  
                        animate={{ y: 0 }}
                        transition={{delay: 0.2}}
                        className={sidebar ? 'active' : ''}>

                        {MenuItemsLinks.map(({title, url}, i) => {
                            return(  
                                <Link href={url} key={i} passHref>
                                    <motion.a 
                                     
                                     variants={textMotion}
                                     whileHover="hover"
                                    >
                                    {title}</motion.a>    
                                </Link>
                                
                            )      
                        })}
                        <LightDarkTheme onClick={themeToggler} >
                            {ChangeIcon()}
                        </LightDarkTheme>
                    </MenuItems>
                    <MobileMenuBtn  onClick={showSideBar}>
                        <MobileMenuBurger className={sidebar ? 'active' : ''} >
                            
                        </MobileMenuBurger>
                    </MobileMenuBtn>
                </Nav>
            </Header>
        </ThemeProvider>
    )
}

export default Navbar
