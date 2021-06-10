import styled from "@emotion/styled"

const Header = () => {
    return (
        <HeaderStyled>
            I'm a HEADER
        </HeaderStyled>
    )
};

const HeaderStyled = styled.header`
    background: ${props=>props.theme.colors.primary};
    color:"blue"
`;

export default Header