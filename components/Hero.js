import React from 'react'
import styled from "styled-components"
import heroImage from '../src/mjpicsart.png'
import Image from 'next/image'
import { FloatingSocmed } from './data';
import { motion } from 'framer-motion';


const HeroSection = styled.div`
    padding: 50px 0;

    @media only screen and (max-width: 350px) {
        padding: 50px 0 0 0;
    }

`;

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 5px;
    
`;
const HeroContent = styled.div`
    width: 600px;
    height: 600px;
    position: relative;

    @media only screen and (max-width: 350px) {
        height: 350px;
    }

`;
const HeroHi = styled(motion.div)`
    height: 60px;
    width: 200px;
    border: 2px solid #29C7AC;
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    top: 13%;
    left: 5%;

    @media only screen and (max-width: 565px) {
        width: 150px;
        top: 13%;
        left: 5%;
        height: 50px;
    }
    @media only screen and (max-width: 350px) {
        width: 100px;
        top: 13%;
        left: 5%;
        height: 40px;
    }
`;
const HeroHiText = styled.h2`
    margin-right: 70px;
    letter-spacing: 1rem;
    @media only screen and (max-width: 450px) {
        font-size: 1.2rem;
        margin-right: 60px;
    }
    @media only screen and (max-width: 350px) {
        font-size: 1rem;
        margin-right: 30px;
    }
`;
const HeroIm = styled(motion.div)`
    height: 200px;
    width: 60px;
    border: 2px solid #29C7AC;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: absolute;
    left: 22%;
    top: 25%;
    @media only screen and (max-width: 565px) {
        width: 50px;
        height: 150px;
        left: 18%;
        top: 25%;
    }
    @media only screen and (max-width: 350px) {
        width: 40px;
        height: 100px;
        left: 17%;
    }
`;
const HeroImText = styled.h2`
    text-align: center;
    @media only screen and (max-width: 450px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 350px) {
        font-size: 1rem;
    }
`;
const HeroName = styled(motion.div)`
    height: 300px;
    width: 60px;
    border: 2px solid #29C7AC;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: absolute;
    left: 80%;
    top: 45%;
    @media only screen and (max-width: 565px) {
        width: 50px;
        height: 250px;
        top: 40%;
    }
    @media only screen and (max-width: 450px) {
        height: 230px;
        top: 30%;
    }
    @media only screen and (max-width: 350px) {
        width: 40px;
        height: 180px;
        top: 25%;
    }
`;
const HeroNameText = styled.h2`
    text-align: center;

    @media only screen and (max-width: 450px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 350px) {
        font-size: 1rem;
    }
`;

const HeroImageContainer = styled(motion.div)`
    text-align: center;
    position: relative;
`;
const HeroFloatingContainer = styled(motion.div)`
    @media only screen and (max-width: 350px) {
        display: none;
    }

    .floating-socmed{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background-image: linear-gradient(var(--primaryColor) -10%, transparent);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;

        @media only screen and (max-width: 450px) {
            width: 50px;
            height: 50px;
        }
        
    }
    .icons{
        width: 35px;
        height: 35px;

        @media only screen and (max-width: 450px) {
            width: 30px;
            height: 30px;
        }
        
    }
    .facebook-loc{
        right: -15%;
        top: 90%;
        
        @media only screen and (max-width: 798px) {
            right: -7%;
        }
        @media only screen and (max-width: 705px) {
            right: -2%;
        
        }
        @media only screen and (max-width: 648px) {
            right: 0;
        }
        @media only screen and (max-width: 450px) {
            top: 80%;
        }
        
    }
    .linkedin-loc{
        left: -20%;
        top: 75%;

        @media only screen and (max-width: 865px) {
            left: -5%;
        }
        @media only screen and (max-width: 677px) {
            left: 0;
        
        }
        @media only screen and (max-width: 498px) {
        
        }
        @media only screen and (max-width: 350px) {
        }
    }
    .github-loc{
        right: 5%;
        top: 5%;
    }
`;

const floatingSocialmedia = {
    anim: {
        y: [0, -7, 7, 0],
        transition: { ease: 'linear', duration: 3, repeat: Infinity}
    }
   
}

function Hero() {

    return (
        <HeroSection>
            <HeroContainer>
                <HeroContent>
                    <HeroHi 
                     initial={{ x: '-100vw' }}
                     animate={{ x: 0 }}
                     transition={{ delay: 0.4, type: 'spring', stiffnes: 100 }}
                    >
                        <HeroHiText>HI</HeroHiText>
                    </HeroHi>
                    <HeroIm
                     initial={{ y: '-100vh' }}
                     animate={{ y: 0 }}
                     transition={{ delay: 1, type: 'spring', stiffnes: 100 }}
                    >
                        <HeroImText>I<br />M</HeroImText>
                    </HeroIm>
                    <HeroName
                     initial={{ y: '-100vh' }}
                     animate={{ y: 0 }}
                     transition={{ delay: 1.5, type: 'spring', stiffnes: 100 }}
                    >
                        <HeroNameText>M<br />E<br />L<br />V<br />I<br />N</HeroNameText>
                    </HeroName>
                    <HeroImageContainer 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.1 }}
                    >
                        <Image src={heroImage} alt='My Picture' layout='' className='img'/>
                    </HeroImageContainer>

                    {FloatingSocmed.map((socmed, key) => {
                        const {id, href, Icon} = socmed

                        return(
                            <HeroFloatingContainer
                             initial={{ opacity: 0 }} 
                             animate={{ opacity: 1 }}
                             transition={{ delay: 2.5 }}
                             key={key}
                            >
                                <motion.a
                                variants={floatingSocialmedia}
                                animate='anim'
                                whileHover={{ scale: 1.2 }}
                                href={href}
                                className={`floating-socmed ${id}-loc`}>
                                <Icon  className={`icons icon-${id}`} />
                                </motion.a>
                            </HeroFloatingContainer>
                        )
            
                    })}
                    
                </HeroContent>
                
            </HeroContainer>

        </HeroSection>
    )
}

export default Hero
