import axios from "axios";

export const FetchProfileInfo = async () => {
  let ret = <any>[];
  await axios
    .get("/api/user")
    .then((data) => (ret = data))
    .catch((err) => {
      console.log("error", err);
    });
  console.log("FetchProfileInfo", ret.data);
  return ret.data;
};
