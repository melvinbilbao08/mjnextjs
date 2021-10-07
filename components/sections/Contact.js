import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'



const ContactSection = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 20px 250px 20px;

    @media only screen and (max-width: 370px) {
        padding: 50px 10px 250px 10px;
    }

`;
const ContactTitle = styled.h1`
    text-align: center;
    padding: 20px 0;
    line-height: 2em;
`;
const ContactParagraph = styled.p`
    text-align: center;
    padding: 0 40px;

    @media only screen and (max-width: 370px) {
        padding: 0 20px;
    }
`;
const ContactButton = styled.div`
    padding-top: 50px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-flow: wrap;
`;
const ContactEmail = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid var(--primaryColor);
    position: relative;
    box-shadow: inset 30px 0 0 0.1px var(--primaryColor);
    transition: var(--transition);

    &:hover{
        box-shadow: inset 150px 0 0 0 var(--primaryColor);
    }

    > a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const ContactResume = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid var(--primaryColor);
    box-shadow: inset 30px 0 0 0.1px var(--primaryColor);
    transition: var(--transition);

    &:hover{
        box-shadow: inset 150px 0 0 0 var(--primaryColor);
    }
    
    > a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;   
        
    }
`;


class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}


function Contact() {

    return (
        <ContactSection id='contact'>
            <ContactTitle>I am looking for a great opportunities, to developed my skills.</ContactTitle>
            <ContactParagraph>If you are thinking about hiring me or would like to discuss a project, Do not hesitate to contact me.</ContactParagraph>
            <ContactButton>
                <ContactEmail>
                    <Link href='mailto:bilbao.melvin08@gmail.com'>
                        <a> Email </a>
                    </Link>
                </ContactEmail>
                <ContactResume>
                    <DownloadLink src='/resource/melvinresume.pdf'>
                        Resume
                    </DownloadLink>
                </ContactResume>
            </ContactButton>
        </ContactSection>
    )
}

export default Contact
