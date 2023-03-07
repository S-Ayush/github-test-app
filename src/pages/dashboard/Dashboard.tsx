import React, { useMemo, useState, useCallback } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import StaredRepos from "../../components/staredRepos/StaredRepos";
import Layout from "../../container/layout/Layout";
import { DashBoardContainer } from "../../styles/Dashboard.style";

function Dashboard() {
  return (
    <Layout>
      <DashBoardContainer>
        <StaredRepos />
      </DashBoardContainer>
    </Layout>
  );
}

export default Dashboard;
