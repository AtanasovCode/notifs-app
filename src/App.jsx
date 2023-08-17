import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import profile1 from './assets/images/profile-pictures/profile1.svg';
import profile2 from './assets/images/profile-pictures/profile2.svg';
import profile3 from './assets/images/profile-pictures/profile3.svg';
import profile4 from './assets/images/profile-pictures/profile4.svg';
import profile5 from './assets/images/profile-pictures/profile5.svg';
import profile6 from './assets/images/profile-pictures/profile6.svg';
import profile7 from './assets/images/profile-pictures/profile7.svg';

import commentedPicture from './assets/images/commented-picture.png';



import Notif from "./components/Notif";
import Switch from "./components/Switch";

const light = {
  blue: "#0A327B",
  notif: "#0A327B",
  notifCount: "#FFFFFF",
  grayBlue900: "#1C202B",
  grayBlue700: "#5E6778",
  grayBlue500: "#939CAD",
  grayBlue300: "#E5EFFA",
  grayBlue100: "#DDE7EE",
  bodyBackground: "#F7FAFD",
  background: "#FFFFFF"
}

const dark = {
  blue: "#75a4fc",
  notif: "#2b72f5",
  notifCount: "#111111",
  grayBlue100: "#1C202B",
  grayBlue300: "#5E6778",
  grayBlue500: "#939CAD",
  grayBlue700: "#E5EFFA",
  grayBlue900: "#DDE7EE",
  background: "#15132d",
  bodyBackground: "#0c0b18",
}

const App = () => {

  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState([
    {
      name: "Mark Webber",
      picture: profile1,
      time: "1m",
      about: "reacted to your recent post",
      post: "My first tournament today!",
      viewed: false,
      message: "",
      commentedPicture: null,
    },
    {
      name: "Angela Gray",
      picture: profile2,
      time: "5m",
      about: "followed you",
      post: "",
      viewed: false,
      message: "",
      commentedPicture: null,
    },
    {
      name: "Jacob Thompson",
      picture: profile3,
      time: "1 day",
      about: "has joined your group",
      post: "Chess Club",
      viewed: false,
      message: "",
      commentedPicture: null,
    },
    {
      name: "Rizky Hasanuddin",
      picture: profile4,
      time: "5 days",
      about: "sent you a private message",
      post: "",
      viewed: true,
      message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      commentedPicture: null,
    },
    {
      name: "Kimberly Smith",
      picture: profile5,
      time: "1 week",
      about: "commented on your picture",
      post: "",
      viewed: true,
      message: "",
      commentedPicture: commentedPicture,
    },
    {
      name: "Nathan Peterson",
      picture: profile6,
      time: "2 weeks",
      about: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      viewed: true,
      message: "",
      commentedPicture: null,
    },
    {
      name: "Anna Kim",
      picture: profile7,
      time: "2 weeks",
      about: "left the group",
      post: "Chess Club",
      viewed: true,
      message: "",
      commentedPicture: null,
    },
  ])

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Container>
        <Switch theme={theme} toggleTheme={toggleTheme} />
        <Heading>
          <Title>
            Notifications

            <NotifCount>
              3
            </NotifCount>
          </Title>
          <MarkAll>
            mark all as read
          </MarkAll>
        </Heading>

        <NotifsContainer>
          {
            notifications.map((notif) => {
              return (
                <Notif
                  key={notif.name}
                  theme={theme}
                  name={notif.name}
                  picture={notif.picture}
                  time={notif.time}
                  about={notif.about}
                  post={notif.post}
                  viewed={notif.viewed}
                  message={notif.message}
                  commentedPicture={notif.commentedPicture}
                />
              );
            })
          }
        </NotifsContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div` 
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${props => props.theme.background};
  flex-shrink: 0;
  border-radius: 15px;
  background: ${props => props.theme.background};
  box-shadow: 0px 20px 60px 0px rgba(73, 97, 168, 0.05);

  @media (min-width: 768px) {
    width: 730px;
    margin: 63px 0;
  }
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`;

const Title = styled.div`
  color: ${props => props.theme.grayBlue900};
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 24px;
  }
`;

const NotifCount = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 6px;
  text-align: center;
  background: ${props => props.theme.notif};
  color: ${props => props.theme.notifCount};
  font-feature-settings: 'clig' off, 'liga' off;
  /* Body (Bold) */
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-left: 9px;

  @media (min-width: 768px) {
    margin-left: 22px;
  }
`;

const MarkAll = styled.div`
  color: ${props => props.theme.grayBlue700};
  text-align: right;
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 15px;

  &:hover {
    color: ${props => props.theme.blue};
    font-feature-settings: 'clig' off, 'liga' off;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const NotifsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;