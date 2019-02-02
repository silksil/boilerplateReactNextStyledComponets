import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "../config";
import { LOCAL_STATE_QUERY } from "../components/Wrapper/testLocalState";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleButton(_, variables, { cache }) {
            const { buttonOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY
            });
            const data = {
              data: { buttonOpen: !buttonOpen }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        buttonOpen: false
      }
    }
  });
}

export default withApollo(createClient);
