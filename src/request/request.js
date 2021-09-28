import axios from "axios";
// 获取商品列表数据
const getProductData = async (obj) => {
  const {
    data: { data },
  } = await axios.get("http://120.55.193.14:3030/shoppingCat", { params: obj });
  return data;
};
export { getProductData };
