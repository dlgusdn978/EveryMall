import CommonAPI from "./common";

export const getCarouselImg = async () => {
  return CommonAPI.get("/api/carousel");
};

export const getMainProduct = async () => {
  return CommonAPI.get("/api/main");
};

export const getProduct = async (id: number) => {
  console.log("들어오긴 함?");
  return CommonAPI.get(`/api/product/${id}`);
};
