import { gql } from "graphql-request";

export const registrationData = gql`
{
        registrations {
          id
          username
          password
          email
        }
      }
`