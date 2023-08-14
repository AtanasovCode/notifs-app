import styled from "styled-components";

import ReactNotif from "./ReactNotif";

const Notif = ({
    picture,
    name,
    about,
    post,
    time,
    viewed,
}) => {
    return (
        <Container>
            <ProfilePicture>
                <Picture 
                    src={picture}
                    alt="profile picture"
                />
            </ProfilePicture>
            <TextContainer>
                <ProfileName>
                    {name}
                </ProfileName>
                <ReactNotif 
                    notifText={about}
                    notifPost={post}
                    viewed={viewed}
                />
                <TimeAgo>
                    {time} ago
                </TimeAgo>
            </TextContainer>
        </Container>
    );
}

export default Notif;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
`;

const ProfilePicture = styled.div`
    width: 39px;
    height: 39px;
    min-width: 39px;
    margin-right: 20px;
`;

const Picture = styled.img`
    width: 100%;
    height: 100%;
`;

const TextContainer = styled.div`
`;

const ProfileName = styled.span`
    color: var(--very-dark-grey-blue, #1C202B);
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-right: 4px;
`;

const TimeAgo = styled.div`
    color: var(--5-grey-blue, #939CAD);
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 4px;
`;