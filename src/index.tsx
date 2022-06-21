/* @refresh reload */
import { render } from "solid-js/web";
import { ApolloProvider } from "@merged/solid-apollo";
import { client } from "./apollo.client";
import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";

render(
  () => (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <App />
        </Router>
      </div>
    </ApolloProvider>
  ),
  document.getElementById("root") as HTMLElement
);
