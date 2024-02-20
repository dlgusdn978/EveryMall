import CommonAPI from "./common";

export const getBasketProduct = async (userId: string) => {
  return CommonAPI.get(`/api/basket/${userId}`);
};
export const addBasketProduct = async (
  userId: string,
  productId: number,
  count: number
) => {
  return CommonAPI.post("/api/basket", { userId, productId, count });
};

export const updateBasketProduct = async (
  userId: string,
  productId: number,
  count: number
) => {
  return CommonAPI.put("/api/basket", { userId, productId, count });
};

export const deleteBasketProduct = async (
  userId: string,
  productId: number
) => {
  return CommonAPI.delete(`/api/basket/${userId}/${productId}`);
};
