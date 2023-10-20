import { V1 } from "./v1";
import { Express } from "express";

export const routes = [...V1];

export const addRoutes = (app: Express) => {
  routes.forEach((route) => {
    app.use("/api/" + route.url, route.route);
  });
};
