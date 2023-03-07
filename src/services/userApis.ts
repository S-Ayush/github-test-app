import { axiosWithAuth, axiosWithoutAuth } from "./config";

const userApis = {
  signup: (userData: any) => axiosWithoutAuth.post("/signup", userData),
  signin: (userData: any) => axiosWithoutAuth.post("/signin", userData),
  getUserData: () => axiosWithAuth.get("/userData"),
  starRepo: (repo: any) => axiosWithAuth.post("/starRepo", repo),
  unstarRepo: (id: string | number) => axiosWithAuth.post("/unstarRepo", { id }),
};
export default userApis;
