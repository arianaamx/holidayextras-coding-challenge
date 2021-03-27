import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

function ImageContainer() {
  return (
    <Container>
      <FlickrImage src="/" alt="" />
      <p>
        <BoldedLink>Photo title</BoldedLink> by <BoldedLink>author</BoldedLink>
      </p>
      <Description>
        Description: asifdohafoashf diusadgasuidgasuzdgsadjhBSA asdhuasdh ashfdaufhdaiudh fiushfasu
      </Description>
      <p>Tags: </p>
    </Container>
  );
}

export default ImageContainer;

const Container = styled.div`
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${colors.LightBlue};
  margin: 5px 5px;

  width: 250px;
`;

const FlickrImage = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

const BoldedLink = styled.span`
  font-weight: 600;
  text-decoration: underline;
  color: ${colors.Blue};
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* number of lines to show */
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
