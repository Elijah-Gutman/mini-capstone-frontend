import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Footer year={2024} />
    </div>
  );
}

export default App;
