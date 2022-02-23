import { NextApiHandler } from "next";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type User = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  metrics: {
    followers: number;
    following: number;
  };
};

const mockUser: User = {
  backgroundImageUrl:
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  profilePictureUrl:
    "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
  name: "John Doe",
  title: "Frontend developer",
  metrics: {
    followers: 23000,
    following: 23000,
  },
};

const getUser: NextApiHandler<User> = async (req: any, res: any) => {
  await sleep(2500);
  if (req.method === "GET") {
    console.log("getUser", req.method);
    res.send(mockUser);
  } else {
    res.status(405);
  }

  res.end();
};

export default getUser;
