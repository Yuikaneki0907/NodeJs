import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  //get users
  const users = await getAllUsers();
  console.log(">>>>check user", users)

  return res.render("home", {
    users: users
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postCreateUserPage = (req: Request, res: Response) => {
  console.log(">>> check data: ", req.body);
  const {email, address, name} = req.body;
  handleCreateUser(name, email, address)
  return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUserPage };
