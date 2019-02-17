import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

export const LOCAL_STATE_QUERY = gql`
  query {
    buttonOpen @client
  }
`;

export const MUTATE_LOCAL_STATE = gql`
  mutation {
    toggleButton @client
  }
`;

export const LocalStateButton = () => (
  <Mutation mutation={MUTATE_LOCAL_STATE}>
    {toggleButton => (
      <Query query={LOCAL_STATE_QUERY}>
        {({ data }) => (
          <div>
            <button onClick={toggleButton}> Toggle Local State</button>
            <p> State: {data.buttonOpen ? "True" : "False"} </p>
          </div>
        )}
      </Query>
    )}
  </Mutation>
);
