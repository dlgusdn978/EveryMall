import CommonAPI from "./common";

export const getCarouselImg = async () => {
  return CommonAPI.get("/api/carousel");
};
