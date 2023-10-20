import sampleRoute from "./sample/route";
import usersRoute from "./users/route";
import authRoute from "./auth/route";

export const routes = [
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
];

export const V1 = routes.map((e: any) => {
  e.route = "v1/" + e.route;
  return e;
});
