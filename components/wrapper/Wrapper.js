import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import gql from "graphql-tag";
import Link from "next/link";
import { LocalStateButton } from "./testLocalState";

const theme = {
  red: "#FF0000",
  black: "#393939"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'Arial';
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'Arial'; }
`;

class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Link href="/">
            <a> Boilerplate </a>
          </Link>
          <LocalStateButton />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Wrapper;
