import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import {
  Input,
  SearchBarContainer,
  SearchResultContainer,
} from "../../styles/SearchBar.style";
import SearchResultView from "./SearchResultView";
import githubApis from "../../services/gitHubApis";

function SearchBar() {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [serachValue, setSearchValue] = useState<string>("");
  const [resultRepo, setResultRepo] = useState<any>([]);
  let timeOut: any;
  const handelChange = (e: any) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setSearchValue(e.target.value);
      setIsResultModalOpen(!!e.target.value.trim());
    }, 400);
  };

  useEffect(() => {
    if (serachValue.trim()) {
      githubApis
        .getRepoByUserName(serachValue)
        .then((res) => {
          console.log(
            res.data.sort((a: any, b: any) => b.watchers - a.watchers)
          );
          setResultRepo(
            res.data.sort((a: any, b: any) => b.watchers - a.watchers)
          );
        })
        .catch(() => {
          setResultRepo([]);
        });
    } else {
      setResultRepo([]);
    }
  }, [serachValue]);

  return (
    <ClickAwayListener onClickAway={() => setIsResultModalOpen(false)}>
      <SearchBarContainer>
        <Input
          type="text"
          placeholder="Enter UserName"
          onChange={handelChange}
          onFocus={(e) => {
            if (e.target.value) {
              setIsResultModalOpen(true);
            }
          }}
        />
        {isResultModalOpen && (
          <SearchResultView
            setIsResultModalOpen={setIsResultModalOpen}
            resultRepo={resultRepo}
          />
        )}
      </SearchBarContainer>
    </ClickAwayListener>
  );
}

export default SearchBar;
