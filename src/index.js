import dva from "dva";
import createLoading from "dva-loading"; // 引入dvaloading
import ProductModel from "./modal/product";
import CartModel from "./modal/cart";
import createHistory from "history/createHashHistory";
import ShoppingCart from "./component/shoppingCart";
import "./app.css";
// dva配置 启动项目
const app = dva({
  history: createHistory(),
});
app.use(createLoading());
app.model(ProductModel);
app.model(CartModel);
app.router(() => <ShoppingCart />);
app.start("#root");
