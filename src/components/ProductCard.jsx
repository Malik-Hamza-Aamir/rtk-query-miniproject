const ProductCard = ({ src }) => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <div >
          <img src={src} height="200" width="250" alt="product image" />
        </div>

        <button>Learn More</button>
      </div>
    </>
  );
};

export default ProductCard;
