import { gql } from "graphql-request";

export const registrationData = gql`
{
        registrations {
          username
          password
          email
        }
      }
`