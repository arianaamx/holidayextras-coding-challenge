import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import * as colors from "../../colors";

interface HeaderProps {
  setSearchByTag: Dispatch<SetStateAction<string | null>>;
}

function Header({ setSearchByTag }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>
        <h2>Flickr Photo Stream</h2>
        <SearchInput
          type="text"
          placeholder="Search by tags..."
          onChange={(event) => {
            setSearchByTag(event.target.value);
          }}
        />
      </Title>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  line-height: 3em;

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
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: 3px solid ${colors.Blue};
`;
