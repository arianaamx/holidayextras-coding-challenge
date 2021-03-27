import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

function Header() {
  return (
    <HeaderContainer>
      <Title>
        <h2>Flickr Photo Stream</h2>
      </Title>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;

  -webkit-box-shadow: 0px 1px 1px ${colors.LightGrey};
  -moz-box-shadow: 0px 1px 1px ${colors.LightGrey};
  box-shadow: 0px 2px 2px ${colors.LightGrey};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin: 5px 20px;
  max-width: 1200px;
`;
