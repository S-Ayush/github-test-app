import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { stringAvatar } from "../../helpers/muiHelpers";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  ResultBody,
  ResultHeader,
  SearchResultContainer,
  RepoItemContainer,
  ValidAccount,
} from "../../styles/SearchBar.style";
import { useDispatch, useSelector } from "react-redux";
import StarActions from "../../redux/actions/starActions";
import { toast } from "react-toastify";
import userApis from "../../services/userApis";

type props = {
  setIsResultModalOpen: (isResultModalOpen: boolean) => void;
  resultRepo: any[];
};

function RepoItem({ repo }: any) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.userData.isLogin);
  return (
    <RepoItemContainer key={repo.id}>
      <div style={{ width: "5%" }}>
        <Avatar
          {...stringAvatar(repo.name)}
          sx={{ width: "30px", height: "30px" }}
        />
      </div>
      <div style={{ width: "27%", fontWeight: 500, color: "blue" }}>
        {repo.name}
      </div>
      <div style={{ width: "50%" }}>{repo.description}</div>
      <div style={{ width: "10%" }}>{repo.watchers_count}</div>
      <div style={{ width: "8%" }}>
        {repo.stared ? (
          <StarIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              userApis
                .unstarRepo(repo.id)
                .then(() => {
                  dispatch(StarActions.unstarRepo(repo.id));
                })
                .catch(() => {
                  toast.error("something went wrong!");
                });
            }}
          />
        ) : (
          <StarBorderIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (isLogin) {
                userApis
                  .starRepo({
                    id: repo.id,
                    name: repo.name,
                    full_name: repo.full_name,
                    description: repo.description,
                  })
                  .then((res) => {
                    dispatch(
                      StarActions.starRepo({
                        id: repo.id,
                        name: repo.name,
                        full_name: repo.full_name,
                        description: repo.description,
                      })
                    );
                  })
                  .catch(() => {
                    toast.error("something went wrong!");
                  });
              } else {
                toast.error("Please login To star any repository");
              }
            }}
          />
        )}
      </div>
    </RepoItemContainer>
  );
}

function SearchResultView({ setIsResultModalOpen, resultRepo }: props) {
  const starRepos = useSelector((state: any) => state.starRepos);

  return (
    <SearchResultContainer onClick={() => setIsResultModalOpen(true)}>
      {resultRepo.length ? (
        <>
          <ResultHeader>
            <Avatar src={resultRepo[0]?.owner.avatar_url} />
            <h2>{resultRepo[0]?.owner?.login?.toUpperCase()}</h2>
          </ResultHeader>
          <ResultBody>
            {resultRepo.map((repo) => (
              <RepoItem
                repo={{
                  ...repo,
                  stared: starRepos.some((item: any) => item.id === repo.id),
                }}
                key={repo.id}
              />
            ))}
          </ResultBody>
        </>
      ) : (
        <ValidAccount>Enter a Valid GitHub Account Name</ValidAccount>
      )}
    </SearchResultContainer>
  );
}

export default SearchResultView;
