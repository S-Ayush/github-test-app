import {
  StaredRepoContainer,
  StaredRepoBody,
  StaredRepoItem,
  Unstar,
} from "../../styles/StaredRepos.Style";
import { useDispatch, useSelector } from "react-redux";
import StarActions from "../../redux/actions/starActions";
import userApis from "../../services/userApis";
import { toast } from "react-toastify";

function StaredRepos() {
  const starRepos = useSelector((state: any) => state.starRepos);
  const dispatch = useDispatch();

  return (
    <StaredRepoContainer>
      <h2>Stared</h2>
      <StaredRepoBody>
        {starRepos.map((repo: any) => (
          <StaredRepoItem key={repo.id}>
            <h3 style={{ width: "90%", color: "blue" }}>{repo.full_name}</h3>
            <Unstar
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
            >
              Unstar
            </Unstar>
            <div style={{ width: "100%" }}>{repo.description}</div>
          </StaredRepoItem>
        ))}
      </StaredRepoBody>
    </StaredRepoContainer>
  );
}

export default StaredRepos;
