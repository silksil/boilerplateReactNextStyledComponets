import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import GlobalStyle from "./GlobalStyle";
import themes from "./themes";

export const StyledPage = styled.div`
  background: ${({ theme }) => theme.background};
  width: 100%;
  margin: 0 auto;
`;

export const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
`;

class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.light}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Wrapper;
