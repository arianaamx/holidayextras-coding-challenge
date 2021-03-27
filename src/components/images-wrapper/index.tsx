import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

import ImageContainer from "../image-container";

function ImagesWrapper() {
  return (
    <ImagesContainer>
      <Images>
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
      </Images>
    </ImagesContainer>
  );
}

export default ImagesWrapper;

const ImagesContainer = styled.div`
  background-color: ${colors.LightLightBlue};
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 20px;
`;

const Images = styled.div`
  max-width: 1200px;
  columns: 4 auto;
`;
