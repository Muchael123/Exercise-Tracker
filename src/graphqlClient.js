import { GraphQLClient } from "graphql-request";
const url ='https://sanminiato.stepzen.net/api/geared-angelfish/__graphql'

const apikey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;
const client = new GraphQLClient(url, {headers: {
    "Authorization": `apikey ${apikey}`
}})
export default client;