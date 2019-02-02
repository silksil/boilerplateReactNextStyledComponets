import App, { Container } from "next/app";
import Wrapper from "../components/Wrapper/Wrapper";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";

class MyApp extends App {
  // Exposes page numbers.
  // Will run before render function and passed to props if you return
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        {/* Expose Apollo client to React
        by wrapping the App in the Apollo Provider from the HOC*/}
        <ApolloProvider client={apollo}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
