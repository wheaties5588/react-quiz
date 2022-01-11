import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
    background-color: #31233c;
`;

export const NavTitle = styled.h1`
    font-family: 'Henny Penny', cursive;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
`;

export const CreatorLink = styled.a`
    font-family: 'Henny Penny', cursive;
    color: rgba(255,255,255,.5);
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    
    &:hover {
        color: #fff;
    }
`;
