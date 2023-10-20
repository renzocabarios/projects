import sampleRoute from "./sample/route";
import usersRoute from "./users/route";
import authRoute from "./auth/route";
import memoriesRoute from "./memories/route";

const routes = [
  {
    url: "sample",
    route: sampleRoute,
  },
  {
    url: "users",
    route: usersRoute,
  },
  {
    url: "auth",
    route: authRoute,
  },
  {
    url: "memories",
    route: memoriesRoute,
  },
];
export const V1 = routes.map((e: any) => {
  e.url = "v1/" + e.url;
  return e;
});
