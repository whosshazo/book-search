import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        authors
        description
        link
      }
      books {
        _id
        authors
        description
      }
    }
  }
`;
