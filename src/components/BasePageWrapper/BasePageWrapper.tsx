import { Route, Routes, useRoutes } from "solid-app-router";
import { Suspense, createSignal, lazy } from "solid-js";
import './style.css'
import Menu from "../Menu";

const HomePage = lazy(() => import("../../pages/HomePage"));
const Pools = lazy(() => import("../../pages/Pools"));

export default function BasePageWrapper() {
  const [pageLoading, setCount] = createSignal(false);
  const [poolUuid, setPoolUuid] = createSignal('7b16de79-abd6-4d86-951b-c605087c439d')

  const switchRoute = () =>  {
    setCount(true)
    setTimeout(() => {
      setCount(false)
    }, 300)
  }

  const switchPools = () => {
    switchRoute()
    return poolUuid
  }
  return (
    <>
      <Menu />
      <div class="page" classList={{ pending: pageLoading() }}>
        <Suspense fallback={<p>Lloading...</p>}>
          <Routes>
            <Route path={"/"} component={HomePage} data={switchRoute}/>
            <Route path={"/pools"} component={Pools} data={switchPools}/>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
