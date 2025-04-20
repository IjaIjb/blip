import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));


const routes = [
    {
      path: "/",
      component: HomePage,
    },
 ];

export default routes;
