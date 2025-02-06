import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/*" element={<Products />}>
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Products() {
  let { productId } = useParams();
  return (
    <div>
      <h1>Products</h1>
      {productId ? <p>Product ID: {productId}</p> : <p>Browse Products</p>}
    </div>
  );
}

function ProductDetails() {
  let { productId } = useParams();
  return <h1>Product Details for {productId}</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}