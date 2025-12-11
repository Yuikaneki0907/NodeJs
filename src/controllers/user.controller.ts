import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  postUserById,
} from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  //get users
  const users = await getAllUsers();

  return res.render("home", {
    users: users,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postCreateUserPage = async (req: Request, res: Response) => {
  const { email, address, name } = req.body;
  await handleCreateUser(name, email, address);
  return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
};

const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.render("view-user", {
    id: id,
    user: user,
  });
};

const postUpdateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, address } = req.body;
  await postUserById(name, email, address, id);
  return res.redirect("/");
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUser,
  getViewUser,
  postUpdateUser,
};
