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

type GetPublicPhotosProps = {
  setFetchedImages: Function;
  searchByTag?: string | null;
  fetchedImages?: Item[];
  setHasMore?: Function;
};

type AddNewFetchedImagesProps = {
  oldImages: Item[];
  newImages: Item[];
  setHasMore: Function | undefined;
};

export const GetPublicPhotos = ({ setFetchedImages, searchByTag, fetchedImages, setHasMore }: GetPublicPhotosProps) => {
  const addNewFetchedImages = ({ oldImages, newImages, setHasMore }: AddNewFetchedImagesProps) => {
    let newList = oldImages.slice(0);

    // Find values that are in new fetched images but not in the old ones
    let uniqueResults = newImages.filter(function (obj) {
      return !oldImages.some(function (obj2) {
        return obj.description === obj2.description;
      });
    });

    if (uniqueResults.length === 0 && setHasMore !== undefined) {
      setHasMore(false);
    }

    return newList.concat(uniqueResults);
  };

  const tag = searchByTag ? searchByTag : "";

  jsonp(URL + `/feeds/photos_public.gne?format=json&tags=${tag}`, { name: "jsonFlickrFeed" }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let items = data.items;
      if (fetchedImages) {
        items = addNewFetchedImages({ oldImages: fetchedImages, newImages: data.items, setHasMore: setHasMore });
      }
      setFetchedImages(items);
    }
  });
};
