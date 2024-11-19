export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products ({props.products.length} total)</h1>
      <div className="cards">
        {props.products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.title}</h2>
            <img src={product.image} alt="" />
            <p>Info: {product.info}</p>
            <button>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
