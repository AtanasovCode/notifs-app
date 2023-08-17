import styled from "styled-components";

const NotifContent = ({
    notifPost,
    notifText,
    viewed,
    theme,
}) => {
    return (
        <Container>
            {notifText}
            <Reaction>
                {notifPost}
            </Reaction>
            {
                !viewed &&
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill={theme === "light" ? "#F65552" : "#698af7"} />
                </svg>
            }
        </Container>
    );
}

export default NotifContent;

const Container = styled.span`
    color: ${props => props.theme.grayBlue700};
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (min-width: 768px) {
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 16px;
    }
`;

const Reaction = styled.span`
    color: ${props => props.theme.grayBlue700};
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 4px;

    @media (min-width: 768px) {
        font-size: 16px;
        font-weight: 800;
    }
`;