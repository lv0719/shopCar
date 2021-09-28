// 购物车model
const CartModal = {
  namespace: "cart",
  state: {
    carData: [], // 购物车数组
  },
  reducers: {
    addCar(state, { action }) {
      localStorage.setItem("carData", JSON.stringify(action?.newCarData));
      return {
        ...state,
        carData: action?.newCarData,
      };
    },
  },
  effects: {},
};
export default CartModal;
