import "./App.css";
import Header from "./components/Navbar/Header";
import ProductContext from "./context/ProductContext";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <div className="App">
      <ProductContext>
        <Header />
        <MyRoutes />
      </ProductContext>
    </div>
  );
}

export default App;
