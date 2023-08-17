import styled from "styled-components";
import NotifContent from "./NotifContent";


const Notif = ({
    picture,
    name,
    about,
    post,
    time,
    viewed,
    message,
    commentedPicture,
    theme,
}) => {
    return (
        <Container>
            <Wrapper>
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
                    <NotifContent
                        theme={theme}
                        notifText={about}
                        notifPost={post}
                        viewed={viewed}
                        commentedPicture={commentedPicture}
                    />
                    <TimeAgo>
                        {time} ago
                    </TimeAgo>
                    <PrivateMessage>
                        {message}
                    </PrivateMessage>
                </TextContainer>
            </Wrapper>
            {
                commentedPicture &&
                <CommentedPicture src={commentedPicture} />
            }
        </Container>
    );
}

export default Notif;


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const ProfilePicture = styled.div`
    width: 39px;
    height: 39px;
    min-width: 39px;
    margin-right: 13px;
    
    @media (min-width: 768px) {
        width: 45px;
        height: 45px;
        min-width: 45px;
        margin-right: 19px;
    }
`;

const Picture = styled.img`
    width: 100%;
    height: 100%;
`;

const TextContainer = styled.div`

`;

const ProfileName = styled.span`
    color: ${props => props.theme.grayBlue900};
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-right: 4px;

    @media (min-width: 768px) {
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 16px;
    }
`;

const TimeAgo = styled.div`
    color: ${props => props.theme.grayBlue500};
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 4px;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;

const PrivateMessage = styled.div`
    color: ${props => props.theme.grayBlue700};
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 25px;
    max-width: 526px;
`;

const CommentedPicture = styled.img`
    display: inline-block;
    width: 39px;
    height: 39px;
    min-width: 39px;
    border-radius: 7px;
    overflow: hidden;
    margin-left: 15px;
`;