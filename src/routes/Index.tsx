import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));
const PortfolioPage = lazy(() => import("../pages/portfolio/Page"));
const CulturePage = lazy(() => import("../pages/culture/Page"));


const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/portfolio",
      component: PortfolioPage,
    },
    {
      path: "/culture",
      component: CulturePage,
    },
 ];

export default routes;
