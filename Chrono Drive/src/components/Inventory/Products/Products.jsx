const Products = ({ result }) => {
  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {result}
      </section>
    </>
  );
};

export default Products;
