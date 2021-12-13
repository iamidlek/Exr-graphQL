import { ApolloClient, InMemoryCache } from "@apollo/client";

// ApolloClient 기본적 설정이 되어있음
const client = new ApolloClient({
  uri: "http://localhost:4000", // 반복 작성을 줄여주기 위한 baseurl
  cache: new InMemoryCache(),
});

export default client;
