import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as colors from "../../colors";

import ImageContainer from "../image-container";
import { GetPublicPhotos, Item } from "../../fetcher";

interface ImagesWrapperProps {
  searchByTag: string | null;
}

function ImagesWrapper({ searchByTag }: ImagesWrapperProps) {
  const [fetchedImages, setFetchedImages] = useState<undefined | Item[]>(undefined);

  useEffect(() => {
    GetPublicPhotos({ setFetchedImages });
  }, []);

  useEffect(() => {
    GetPublicPhotos({ setFetchedImages, searchByTag });
  }, [searchByTag]);

  return (
    <ImagesContainer>
      <Images>
        {fetchedImages !== undefined &&
          fetchedImages.map((element, index) => {
            return (
              <ImageContainer
                key={index}
                title={element.title}
                description={element.description}
                author={element.author}
                link={element.link}
                tags={element.tags}
                media={element.media.m}
              />
            );
          })}
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
  column-count: 4;

  @media (max-width: 1300px) {
    columns: 3;
  }
`;
