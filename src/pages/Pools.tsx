import { gql, createQuery } from "@merged/solid-apollo";
import { useRouteData } from "solid-app-router";
import { createSignal, on, createEffect, Accessor } from "solid-js";
import { IGetServersQuery, IGetServersQueryVariables } from "./types";

export default function Pools() {
  const [data, setData] = createSignal<string>("...loading");
  const uuid = useRouteData<Accessor<string>>();

  const query = gql`
    query getPools($uuid: String!) {
      pools(filters: { pool_uuid: $uuid }) {
        pool_uuid
        pool
      }
    }
  `;

  const pools = createQuery(query, { variables: { uuid: uuid() } });
  createEffect(() => {
    console.log(pools())
  })
  console.log("###");
  console.log(pools.loading);


  // createEffect(on(pools, (pools) => {
  //   setData(JSON.stringify(pools));
  //}, { defer: true }))

  return (
    <>
      <h1>Pools</h1>
      <p>{pools.loading.toString()}</p>
      {JSON.stringify(pools())}
    </>
  );
}
