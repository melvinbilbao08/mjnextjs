import React from 'react'
import styled from 'styled-components'
import { Skills } from './data';
import { motion } from 'framer-motion'
import useInView from "react-cool-inview";
import { fadeInRight, fadeInUp, animationContainer,  } from '../components/animation'



const AboutSection = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 10px;


`;
const AboutContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding-bottom: 150px;

    @media only screen and (max-width: 498px) {
        display: block;
        padding-bottom: 50px;
    }
    @media only screen and (max-width: 350px) {
    }
`;
const AboutTitleContainer = styled(motion.div)`
    height: 100%;
    width: 250px;
    padding: 50px;

    @media only screen and (max-width: 850px) {
        padding: 20px;
    }
    @media only screen and (max-width: 668px) {
        padding: 10px;
    
    }
    @media only screen and (max-width: 498px) {
        padding: 5px;
    }
    @media only screen and (max-width: 350px) {
    }

`;
const AboutTitle = styled(motion.h1)`
    font-size: 5rem;
    text-align: left;
    color: var(--primaryColor);

    span{
        color: #29C7AC;
    }

    @media only screen and (max-width: 850px) {
        font-size: 4.5rem;
        padding-left: 20%;
    }
    @media only screen and (max-width: 668px) {
        padding-left: 0;
    
    }
    @media only screen and (max-width: 448px) {
        font-size: 4rem;
    }
`;
const AboutContent = styled(motion.div)`
    position: relative;
    top: 120px;
    width: 500px;
    padding: 20px;

    @media only screen and (max-width: 850px) {
        font-size: 0.9rem;
        width: 400px;
    }
    @media only screen and (max-width: 668px) {
        font-size: 0.8rem;
        width: 800px;
        padding: 10px;
    
    }
    @media only screen and (max-width: 498px) {
        width: auto;
        top: 0;
        padding: 0 5px 5px 5px;
    }
    @media only screen and (max-width: 350px) {
    }

`;
const AboutName = styled.h2`
`;
const AboutCourse = styled.small``;
const AboutIntro = styled.p`
    line-height: 2em;
    letter-spacing: 0.1em;
    margin-top: 20px;
`;
const AboutSkills = styled.div`
    padding-top: 50px;
`;
const SkillsTitle = styled(motion.h2)`
    color: var(--primaryColor);
    text-align: center;
    letter-spacing: 0.2em;
`;
const SkillsParagraph = styled.p`
    text-align: center;
    padding: 20px 0;
    font-size: 1.1rem;

    @media only screen and (max-width: 498px) {
        font-size: 0.9rem;
    }

`;
const SkillsContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;
const SkillsUL = styled.ul`
    display: flex;
    flex-flow: wrap;
    gap: 20px;
    justify-content: center;
`;
const SkillsListContainer = styled(motion.div)`
    border: 1px solid var(--outlineColor);
    border-radius: 5px;
    padding: 10px;
`;
const SkillsList = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    .icon{
        height: 25px;
        width: 25px;
        color: var(--primaryColor) ;
    }
`;

const SkillsName = styled.p``;

function About() {

    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: true,
        // For better UX, we can grow the root margin so the image will be loaded before it comes to the viewport
        rootMargin: "-50px 0px",
      });


    return (
        <AboutSection id='about'>
            <AboutContainer ref={observe} >
                <AboutTitleContainer ref={observe}>
                    {inView && <AboutTitle 
                     variants={ fadeInRight } 
                     initial='hidden'
                     animate='visible'
                    >
                        Abo<br />ut<span>.</span></AboutTitle>}
                </AboutTitleContainer>
                {inView && <AboutContent
                  variants={ fadeInUp } 
                  initial='hidden'
                  animate='visible'
                >   

                    <AboutName>Melvin John R. Bilbao</AboutName>
                    <AboutCourse>Bachelor of Science in Information Technology</AboutCourse>
                    <AboutIntro>Hi there! I am a highly motivated, passionate, and self-taught web developer. 
                        BSIT graduate in STI Caloocan.  
                        I do not have experience in IT related field yet. As of now, 
                        I am currently refresh all of what I studied in 4 years of my college and still working with personal projects to improve my skills.</AboutIntro>
                </AboutContent>}
            </AboutContainer>
            <AboutSkills ref={observe}>
                {inView && <SkillsTitle variants={ fadeInUp }
                initial='hidden'
                animate='visible'>
                Skills</SkillsTitle>}
                <SkillsParagraph>Here are some technologies I use for building web applications.</SkillsParagraph>
                <SkillsContainer  >
                    <SkillsUL>
                        {Skills.map((skill, key) => {
                            const { name, id, Icon } = skill;

                            return(
                                inView && <SkillsListContainer key={key} variants={fadeInUp} initial='hidden' animate='visible'>
                                <SkillsList  key={id}>
                                    <Icon className='icon' />
                                    <SkillsName>{name}</SkillsName>
                                </SkillsList>
                                </SkillsListContainer>
                            )
                        })}
                        
                    </SkillsUL>
                </SkillsContainer>
            </AboutSkills>
        </AboutSection>
    )
}

export default About
