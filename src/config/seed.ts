import { prisma } from "config/client";

const initDatabase = async () => {
  const countUser = await prisma.user.count();
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
  else{
    console.log("====YOU ARE READY====")
  }
};

export default initDatabase;
