import { useGetProductsQuery } from "../../services/productApiSlice";
import ProductCard from "../../components/ProductCard";

const ProductList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.products.map((product) => (
          <ProductCard key={product.id} src={product.images[0]} />
        ))}
      </div>
    );
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return (
    <>
      <main>
        <form action="" method="post">
          <input style={{ padding: "10px", fontSize: "1rem" }} type="" />
          <button type="submit">submit</button>
        </form>

        <h1>Products List</h1>
        {content}
      </main>
    </>
  );
};

export default ProductList;
