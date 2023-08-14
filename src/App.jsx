import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import profile1 from './assets/images/profile-pictures/profile1.svg';
import profile2 from './assets/images/profile-pictures/profile2.svg';
import profile3 from './assets/images/profile-pictures/profile3.svg';
import profile4 from './assets/images/profile-pictures/profile4.svg';



import Notif from "./components/Notif";

const light = {
  blue: "#0A327B",
  red: "#F65552",
  grayBlue900: "#1C202B",
  grayBlue700: "#5E6778",
  grayBlue500: "#939CAD",
  grayBlue300: "#E5EFFA",
  grayBlue100: "#DDE7EE",
  snow: "#F7FAFD",
  background: "#FFFFFF"
}

const dark = {
  blue: "#0A327B",
  red: "#F65552",
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
    },
    {
      name: "Angela Gray",
      picture: profile2,
      time: "5m",
      about: "followed you",
      post: "",
      viewed: false,
    },
    {
      name: "Jacob Thompson",
      picture: profile3,
      time: "1 day",
      about: "has joined your group",
      post: "Chess Club",
      viewed: false,
    }
  ])

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Container>
        <Heading>
          <Title>
            Notifications
          </Title>
          <NotifCount>
            3
          </NotifCount>
        </Heading>

        <NotifsContainer>
          {
            notifications.map((notif) => {
              return (
                <Notif 
                  key={notif.name}
                  name={notif.name}
                  picture={notif.picture}
                  time={notif.time}
                  about={notif.about}
                  post={notif.post}
                  viewed={notif.viewed}
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${props => props.theme.background};

`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px;
`;

const Title = styled.div`
  color: var(--very-dark-grey-blue, #1C202B);
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-right: 10px;
`;

const NotifCount = styled.div`
  width: 32px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 6px;
  text-align: center;
  background: var(--1-blue, #0A327B);
  color: var(--9-white, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  /* Body (Bold) */
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const NotifsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;