import jsonp from "jsonp";

// ! Flickr server - jsonp

const URL = "https://api.flickr.com/services";

export type Item = {
  title: string;
  author: string;
  description: string;
  tags: string;
  link: string;
  media: { m: string };
};

interface GetPublicPhotosProps {
  setFetchedImages: Function;
  searchByTag?: string | null;
}

export const GetPublicPhotos = ({ setFetchedImages, searchByTag }: GetPublicPhotosProps) => {
  jsonp(URL + `/feeds/photos_public.gne?format=json&tags=${searchByTag}`, { name: "jsonFlickrFeed" }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);
      setFetchedImages(data.items);
    }
  });
};
