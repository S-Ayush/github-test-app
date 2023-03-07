import { styled } from "@mui/system";

export const MainDiv = styled("div")({
  height: "100vh",
  width: "100%",
});
export const ChildDiv = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  height:"calc(100vh - 101px)",
  overflow: "auto",
});
