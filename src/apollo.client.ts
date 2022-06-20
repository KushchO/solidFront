import { HttpLink, split } from "@apollo/client/core/"
import { getMainDefinition } from "@apollo/client/utilities/"
import { ApolloClient, InMemoryCache } from '@apollo/client/core/'
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient as createWsClient } from "graphql-ws"


export function createLink() {
  const httpLink = new HttpLink({
    credentials: 'include',
  });

  const url = new URL(location.href)
  url.port = '4000'
  url.protocol = 'ws'

  const wsLink = new GraphQLWsLink(
    createWsClient({
      url: url.toString(),
      retryAttempts: 1000,
      retryWait(retry) {
        const wait = (wait: number) => new Promise<void>(res => setTimeout(res, wait))
        switch (true) {
          case retry < 5:
            return wait(1500)

          case retry < 10:
            return wait(5000)

          default:
            return wait(10000)
        }
      },
      // connectionParams: {
      //   authentication:
      // }
    }),
  );

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  return link
}

export function createClient() {
  const client = new ApolloClient({
    link: createLink(),
    cache: new InMemoryCache()
  })

  return client
}

export const client = createClient()