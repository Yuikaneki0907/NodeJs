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
  const connection = await getConnection();

  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `user`");

    return results;
  } catch (err) {
    console.log(err);
  }

  return [];
};

const handleDeleteUser = async (id: string) => {
  try {
    const connection = await getConnection();
    const sql = "DELETE FROM `user` WHERE `id` = ? LIMIT 1";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id: string) => {
  try {
    const connection = await getConnection();
    const sql = "SELECT * FROM `user` WHERE `id` = ?";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    //
    return result;
  } catch (err) {
    console.log(err);
  }
};

const postUserById = async (
  name: string,
  email: string,
  address: string,
  id: string
) => {
  try {
    const connection = await getConnection();
    const sql =
      "UPDATE `user` SET `name` = ? , `email` = ?, `address` = ? WHERE `id` = ? ";
    const values = [name, email, address, id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  postUserById,
};
