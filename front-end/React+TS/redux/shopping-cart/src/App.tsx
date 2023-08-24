import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import ProductListComponent from "./components/productListComponent";
import DetailCartComponent from "./components/detailCartComponent";
function App() {
  const router: any[] = [
    {
      path: "/",
      element: <ProductListComponent />,
    },
    {
      path: "/cart-details",
      element: <DetailCartComponent />,
    },
  ];

  return (
    <div className="wrapper-app">
      <HeaderComponent />
      <Routes>
        {router.map((item: any, index: number) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
