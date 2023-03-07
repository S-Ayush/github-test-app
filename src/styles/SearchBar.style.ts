import styled from "@emotion/styled";

export const SearchBarContainer = styled("div")({
  width: "60%",
  margin: "0px 25px",
  position: "relative",
});
export const Input = styled("input")({
  width: "100%",
  height: "41px",
  borderRadius: "25px",
  outline: "none",
  border: "1px solid grey",
  fontSize: "18px",
  padding: "0px 15px",
  color: "grey",
});
export const SearchResultContainer = styled("div")({
  background: "white",
  width: "100%",
  position: "absolute",
  Height: "450px",
  boxShadow: "0px 4px 4px 2px grey",
  borderRadius: "25px",
  padding: "15px",
  top: "50px",
  left: 0,
  zIndex: 1000,
  overflow: "hidden",
});
export const ResultHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "25px",
});
export const ResultBody = styled("div")({
  height: "350px",
  overflow: "auto",
});
export const RepoItemContainer = styled("div")({
  display: "flex",
  gap: "15px",
  marginTop: "5px",
  border: "1px solid #8080804f",
  padding: "7px",
  borderRadius: "7px",
  alignItems: "center",
});
export const ValidAccount = styled("div")({
  textAlign: "center",
  fontWeight: 500,
  color: "grey",
});
