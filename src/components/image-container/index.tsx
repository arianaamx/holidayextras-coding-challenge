import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

interface ImageContainerProps {
  title: string;
  author: string;
  description: string;
  tags: string;
  link: string;
  media: string;
}

function ImageContainer({ title, author, description, tags, link, media }: ImageContainerProps) {
  const parseTags = (tags: string) => {
    if (!tags) {
      return "-";
    }
    return tags.replace(" ", ", ");
  };

  return (
    <Container>
      <FlickrImage src={media} alt="" />
      <TitleAndAuthor>
        <a href={link}>
          <BoldedLink>{title}</BoldedLink>
        </a>{" "}
        by <BoldedLink>{(author.match(/"(.+)"/) || [])[1]}</BoldedLink>
      </TitleAndAuthor>
      <Tags>Tags: {parseTags(tags)}</Tags>
    </Container>
  );
}

export default ImageContainer;

const Container = styled.div`
  text-align: left;
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  border: 3px solid ${colors.LightBlue};
  margin: 5px 5px;

  width: 250px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);

  /* Display inline-block so the columns don't break the element */
  display: inline-block;
`;

const FlickrImage = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

const TitleAndAuthor = styled.p`
  height: 3em;
  overflow: hidden;
`;

const BoldedLink = styled.span`
  font-weight: 600;
  text-decoration: underline;
  color: ${colors.Blue};

  display: inline-block;
  vertical-align: bottom;
  height: 1.5em;
  overflow: hidden;
`;

const Tags = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* number of lines to show */
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
