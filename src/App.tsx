import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/header";
import ImagesWrapper from "./components/images-wrapper";

function App() {
  const [searchByTag, setSearchByTag] = useState<string | null>(null);
  return (
    <AppContainer>
      <AppHeader>
        <Header setSearchByTag={setSearchByTag} />
      </AppHeader>
      <ImagesWrapper searchByTag={searchByTag} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppHeader = styled.header`
  z-index: 10;
`;
