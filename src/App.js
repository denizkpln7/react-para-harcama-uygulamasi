import Header from "./components/Header";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <div>
      <Header total={total} money={money} setMoney={setMoney} />
      {products.map((product) => (
        <Product
          total={total}
          money={money}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
    </div>
  );
}

export default App;
