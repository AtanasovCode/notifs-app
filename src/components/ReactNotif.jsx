import styled from "styled-components";
import { useState } from "react";

const ReactNotif = ({
    notifPost,
    notifText,
    viewed,
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
                    <circle cx="4" cy="4" r="4" fill="#F65552" />
                </svg>
            }
        </Container>
    );
}

export default ReactNotif;

const Container = styled.span`
    color: var(--dark-grey-blue, #5E6778);
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Reaction = styled.span`
    color: var(--4-dark-grey-blue, #5E6778);
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 4px;
`;
