import axios from "axios";
// 获取商品列表数据
const getProductData = async (obj) => {
  const {
    data: { data },
  } = await axios.get("http://120.55.193.14:3030/shoppingCat", { params: obj });
  return data;
};
export { getProductData };

// const getProductData = async (obj) => {
//   try {
//     const res = await axios.get("http://120.55.193.14:3030/shoppingCat", {params: {...obj}})
//     const { code } = res
//     return new Promise((resolve, reject) => {
//       if(code === 200) {
//         resolve(res.data)
//       }else{
//         reject(res.message)
//       }
//     })
//   } catch(err) {
//     console.log(err)
//   }
// }
