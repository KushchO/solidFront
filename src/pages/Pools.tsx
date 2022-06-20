import { gql, createQuery } from "@merged/solid-apollo";
import { useRouteData } from "solid-app-router";
import { createSignal, on, createEffect, Accessor } from "solid-js";

export default function Pools() {

  const [data, setData] = createSignal<string>('...loading');
  const uuid = useRouteData<Accessor<string>>();
  const query = gql`
    query getPools($uuid: String!) {
      pools(filters: { pool_uuid: $uuid }) {
        pool_uuid
        pool
      }
    }
  `;

  const pools = createQuery(query, { variables: {uuid: uuid()}})

  createEffect(on(pools, (pools) => {
    setData(JSON.stringify(pools));
  }, { defer: true }))

  return (
    <>
      <h1>Pools</h1>
      <p></p>
      {data()}
    </>
  );
}
