import { prisma } from "config/client";
import getConnection from "config/database";

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
  return newUser;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany()

  return users;
};

const handleDeleteUser = async (id: string) => {
  const deleteUser = await prisma.user.delete({
  where: {
    id: +id
  },
})
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
  where: {
    id: +id,
  },
})
return user
};

const postUserById = async (
  name: string,
  email: string,
  address: string,
  id: string
) => {
  const updateUser = await prisma.user.update({
    where: {
      id: +id
    },
  data: {
      name: name,
      email: email,
      address: address,
  },
})
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  postUserById,
};
