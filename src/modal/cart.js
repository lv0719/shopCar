import { cloneDeep } from "loadsh";

// 购物车model
const CartModal = {
  namespace: "cart",
  state: {
    carData: [], // 购物车数组
  },
  reducers: {
    addCar(state, { action }) {
      console.log("action", action);
      // 判断商品在购物车中是否存在，如果存在数量加1
      let newCarDatas = action?.newCarData;
      let newListDatas = action?.newListData;
      let ids = action?.id;
      let flag = true;
      if (ids !== undefined) {
        newCarDatas.forEach((item) => {
          if (item.id === ids) {
            item.number += 1;
            flag = false;
          }
        });
        if (flag) {
          let arr = newListDatas.filter((item) => {
            return item?.id === ids;
          });
          newCarDatas = [...newCarDatas, ...arr];
        }
      }
      localStorage.setItem("carData", JSON.stringify(newCarDatas));
      return {
        ...state,
        carData: newCarDatas,
      };
    },
    clearCar(state, { action }) {
      localStorage.setItem("carData", JSON.stringify(action?.newCarData));
      return {
        ...state,
        carData: action?.newCarData,
      };
    },
    deleteCar(state, { action }) {
      let newCarData = cloneDeep(state.carData);
      newCarData = newCarData.filter((item) => item.id !== action?.id);
      localStorage.setItem("carData", JSON.stringify(newCarData));
      return {
        ...state,
        carData: newCarData,
      };
    },
  },
  effects: {},
};
export default CartModal;
