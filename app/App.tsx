import React from "react";
import styled from "styled-components";
import {ThemeProvider, createMuiTheme} from "@material-ui/core";
import Root from "./screens/TestScreen";
import GlobalStyles from "./components/GlobalStyle";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Root />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
