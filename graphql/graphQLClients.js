import { GraphQLClient } from "graphql-request";
const endPoint = "https://api-ap-south-1.hygraph.com/v2/clbs8l6do1cge01t9hxyv0zpr/master"
export const clientWithoutAuth = new GraphQLClient(endPoint)
export const clientWithAuth = new GraphQLClient(endPoint)
// clientWithAuth.setHeader('x-GQL-Token','key')