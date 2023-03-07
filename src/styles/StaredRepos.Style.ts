import { styled } from "@mui/system";

export const StaredRepoContainer = styled("div")({
  width: "65vw",
  margin: "auto",
});
export const StaredRepoBody = styled("div")({
  maxHeight: "calc(100vh - 185px)",
  overflow: "auto",
});
export const StaredRepoItem = styled("div")({
  padding: "25px",
  marginTop: "15px",
  width: "95%",
  borderBottom: "1px solid grey",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "15px",
});
export const Unstar = styled("div")({
  textDecoration: "underLine",
  cursor: "pointer",
  color: "grey",
});
