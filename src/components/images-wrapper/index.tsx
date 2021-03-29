import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as colors from "../../colors";

import ImageContainer from "../image-container";
import { GetPublicPhotos, Item } from "../../fetcher";
import InfiniteScroll from "react-infinite-scroll-component";

interface ImagesWrapperProps {
  searchByTag: string | null;
}

function ImagesWrapper({ searchByTag }: ImagesWrapperProps) {
  const [fetchedImages, setFetchedImages] = useState<Item[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    GetPublicPhotos({ setFetchedImages });
  }, []);

  useEffect(() => {
    GetPublicPhotos({ setFetchedImages, searchByTag });
  }, [searchByTag]);

  return (
    <ImagesContainer>
      <InfiniteScroll
        dataLength={fetchedImages!.length}
        hasMore={hasMore}
        height="90vh"
        next={() => {
          GetPublicPhotos({ setFetchedImages, fetchedImages, setHasMore });
        }}
        loader={<h2>Loading more images...</h2>}
        endMessage={
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            <b>You have seen all popular photos!</b>
          </h3>
        }
      >
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
      </InfiniteScroll>
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
  align-items: center;
  padding: 20px 20px;
`;

const Images = styled.div`
  max-width: 1200px;
  column-count: 4;
  text-align: center;

  @media (max-width: 1300px) {
    columns: 3;
  }

  @media (max-width: 950px) {
    columns: 2;
  }

  @media (max-width: 650px) {
    columns: 1;
  }
`;
