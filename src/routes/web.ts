import express, { Express } from "express";
import { getCreateUserPage, getHomePage, getViewUser, postCreateUserPage, postDeleteUser, postUpdateUser } from "controllers/user.controller";
import {getDashboardPage,  getAdminOrderPage, getAdminProductPage, getAdminUserPage, getAdminCreateUserPage } from "controllers/admin/dashboard.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  // router.get("/create-user", getCreateUserPage);

  router.post("/create-user", postCreateUserPage);

  router.post("/delete-user/:id", postDeleteUser)

  router.get("/view-user/:id", getViewUser);

  router.post("/handle-update-user/:id", postUpdateUser);

  //admin routes
  router.get("/admin", getDashboardPage);

  router.get("/admin/user", getAdminUserPage);

  router.get("/create-user", getAdminCreateUserPage);

  router.get("/admin/product", getAdminProductPage);

  router.get("/admin/order", getAdminOrderPage);

  app.use("/", router);
};

export default webRoutes;
