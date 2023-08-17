import styled from "styled-components";

import sun from '../assets/icons/sun.png';
import moon from '../assets/icons/moon.png';

const Switch = ({
    theme,
    toggleTheme,
}) => {
    return (
        <Container onClick={() => toggleTheme()}>
            <Toggle src={theme === "light" ? moon : sun} />
        </Container>
    );
}

export default Switch;

const Container = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px; 
    right: 10px;

    @media (min-width: 768px) {
        top: 35px;
        right: 35px;
    }
`;

const Toggle = styled.img`
    width: 100%;
    height: 100%;
`;