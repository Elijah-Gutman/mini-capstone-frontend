export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New product</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Info: <input type="text" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
