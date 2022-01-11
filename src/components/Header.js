import React from 'react';
import {
    NavContainer,
    NavTitle,
    CreatorLink
} from './Header.styles'

const Header = () => {
    return (
        <NavContainer>
            <NavTitle href={'/'}>Harry Potter Trivia</NavTitle>
            <CreatorLink href={'https://github.com/wheaties5588'} target={'_blank'}>Wieciech GitHub</CreatorLink>
        </NavContainer>
    )
}

export default Header