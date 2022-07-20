import Detail from "../Pages/Detail";
import Home from "../Pages/Home";

const routeList = [
  {
    component: <Home />,
    path: "/",
    title: "home",
    header: true,
    headerType: "1",
    footer: true,
  },
  {
    component: <Detail />,
    path: "/detail/:slug",
    title: "detail",
    header: true,
    headerType: "2",
    footer: true,
  },
];
export default routeList;
