import { prisma } from "config/client";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRole = await prisma.role.count();
  if (countUser === 0) {
    await prisma.user.createMany({
      data: [
        {
          username: "leanh",
          password: "123456",
          accountType: "SYSTEM",
        },
        {
          username: "tunk",
          password: "123456",
          accountType: "SYSTEM",
        },
      ],
    });
  }
  else if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
          name: "ADMIN",
          description: "Admin full quyen"
        },
        {
          name: "USER",
          description: "User quyen thuong"
        },
      ],
    });
  }
  else{
    console.log("====YOU ARE READY====")
  }
};

export default initDatabase;
