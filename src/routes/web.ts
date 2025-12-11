import express, { Express } from "express";
import { getCreateUserPage, getHomePage, getViewUser, postCreateUserPage, postDeleteUser, postUpdateUser } from "controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/create-user", getCreateUserPage);

  router.post("/create-user", postCreateUserPage);

  router.post("/delete-user/:id", postDeleteUser)

  router.get("/view-user/:id", getViewUser);

  router.post("/handle-update-user/:id", postUpdateUser);

  app.use("/", router);
};

export default webRoutes;
