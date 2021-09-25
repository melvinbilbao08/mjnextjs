import React from 'react'
import styled from 'styled-components'
import { footerSocmed } from './data';
import { motion } from 'framer-motion';

const FooterContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
`;
const FooterSocmedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const FooterSocmedLinks = styled(motion.a)`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .facebook-icon{
        width: 25px;
        height: 25px;
    }
    .instagram-icon{
        width: 18px;
        height: 18px;
    }
    .linkedin-icon{
        width: 25px;
        height: 25px;
    }
    .github-icon{
        width: 25px;
        height: 25px;
    }
`;
const FooterCopyright = styled.div`
    text-align: center;
    padding-top: 20px;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterSocmedContainer>
            {footerSocmed.map((footersocmed, key) => {
                const {name, href, Icon} = footersocmed
                return(
                    <FooterSocmedLinks 
                     whileHover={{scale: 1.3, originY: 1}}
                     transition={{ type: 'spring', stiffness: 200 }}
                     key={key} 
                     href={href}
                    >
                        <Icon className={`${name}-icon`}/>
                    </FooterSocmedLinks>
                )
            })}
            </FooterSocmedContainer>
            <FooterCopyright>© 2021 Melvin John Bilbao | All rights reserved.</FooterCopyright>
        </FooterContainer>
    )
}

export default Footer
