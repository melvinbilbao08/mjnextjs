import React from 'react'
import styled from 'styled-components'
import { Projects } from '../data';
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";
import { motion } from 'framer-motion';
import useInView from "react-cool-inview";
import { fadeInRight, fadeInUp } from '../animation'
import Image from 'next/image';







const ProjectSection = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
`;
const ProjectTitle = styled(motion.h1)`
    font-size: 4rem;
    padding: 0 10px;
    color: var(--primaryColor);
    span{
        color: #29C7AC;
    }
    @media only screen and (max-width: 668px) {
        font-size: 3.5rem;
    
    }
    @media only screen and (max-width: 498px) {
        
    }
    @media only screen and (max-width: 350px) {
    }
`;
const ProjectContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 20px;
    justify-content: center;
    padding-top: 30px;
`;
const ProjectCardContainer = styled(motion.div)`
    height: 300px;
    width: 500px;
    border: 1px solid var(--outlineColor);
    border-radius: 5px;
    position: relative;

    @media only screen and (max-width: 668px) {
        height: 250px;
        width: 430px
    
    }
    @media only screen and (max-width: 498px) {
        height: 200px;
        width: 300px
        
    }
    @media only screen and (max-width: 350px) {
    }

    .imagecontainer{
        position: relative;
        height: 100%;

        .overlay{
            height: 100%;
            width: 100%;
            background-color: #14161a;
            opacity: 0.8;
            position: absolute;
            top: 0px;
            left: 0px;

        }
 
    }

    
`;
const ProjectCardInfos = styled.div`
    height: 200px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 10;


    @media only screen and (max-width: 668px) {
        height: 180px;
        width: 350px;
        gap: 15px;
    }
    @media only screen and (max-width: 498px) {
        height: 150px;
        width: 300px;
        gap: 5px;
        top: 30px;
        left: 0px;
    }
    @media only screen and (max-width: 350px) {
    }
`;
const ProjectName = styled.h3`
    color: var(--primaryColor);
    @media only screen and (max-width: 498px) {
        font-size: 0.9rem;
    }
`;
const ProjectDescription = styled.small`
    color: white;
    @media only screen and (max-width: 498px) {
        font-size: 0.75rem;
    }
`;
const ProjectTechs = styled.small`
    color: white;
    .technology{
        margin-right: 10px;
        color: white;
        @media only screen and (max-width: 498px) {
        font-size: 0.75rem;
    }
    }
`;
const ProjectLinkContainer = styled.div`
`;
const ProjectGithub = styled(motion.a)`
    margin-right: 15px;
    .icon{
        height: 20px;
        width: 20px;
        color: white;
        @media only screen and (max-width: 498px) {
            height: 18px;
            width: 18px;
        }
    }
`;
const ProjectDemo = styled(motion.a)`
    .icon{
        height: 20px;
        width: 20px;
        color: white;
        @media only screen and (max-width: 498px) {
            height: 18px;
            width: 18px;
        }
    }
`;


function Project() {

    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: true,
        // For better UX, we can grow the root margin so the image will be loaded before it comes to the viewport
        rootMargin: "-50px 0px",
      });


    return (
        <ProjectSection id='projects' ref={observe}>
            {inView && <ProjectTitle
            variants={ fadeInRight } 
            initial='hidden'
            animate='visible'>
                Projects<span>.</span></ProjectTitle>}
            <ProjectContainer ref={observe}>
                {Projects.map((project, key) => {
                    const { title, image, info, techs, links, alt } = project
                    return(
                        inView && <ProjectCardContainer key={key}
                        variants={ fadeInUp } 
                        initial='hidden'
                        animate='visible'
                        >
                            <motion.div className='imagecontainer'>
                                <Image src={image} alt={alt} layout='fill' className='img'/>
                                <div className='overlay'></div>
                            </motion.div>
                            <ProjectCardInfos>
                                <ProjectName>{title}</ProjectName>
                                    <ProjectDescription>{info}</ProjectDescription>
                                    <ProjectTechs>
                                        {techs.map((tech, key) => {
                                            return(
                                                <span className='technology' key={key}>{tech}</span>
                                            )
                                        })}
                                    </ProjectTechs>
                                    <ProjectLinkContainer>
                                        <ProjectGithub 
                                         
                                         href={links.github}
                                        >
                                            <VscGithubAlt className='icon' />
                                        </ProjectGithub>
                                        <ProjectDemo 

                                         href={links.demo}
                                        >
                                            <VscLinkExternal className='icon' />
                                        </ProjectDemo>
                                    </ProjectLinkContainer>
                            </ProjectCardInfos>
                        </ProjectCardContainer>
                        )
                    })}    
            </ProjectContainer>
        </ProjectSection>
    )
}

export default Project
