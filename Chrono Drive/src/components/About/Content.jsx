import Container from "../container/Container";

function Content() {
  return (
    <div className="py-16 bg-white">
      <Container>
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://i.imgur.com/ChaXOr2.jpg"
                alt="image"
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-red-700 font-bold md:text-4xl">
                Our Story
              </h2>
              <p className="my-4 text-gray-600">
                Established in 2020, CHRONODRIVE has been a beacon for
                automotive enthusiasts, providing an exceptional car-buying
                experience. Our journey began with a passion for cars and a
                commitment to redefine the standards of customer service in the
                industry.
              </p>
              <h2 className="text-2xl text-red-700 font-bold md:text-4xl">
                Our Mission
              </h2>
              <p className="my-4 text-gray-600">
                At CHRONODRIVE, our mission is simple: to be the preferred
                choice for automotive needs in USA and beyond. We strive to
                achieve this by offering a curated selection of high-quality
                vehicles, ensuring transparent and fair transactions, and
                providing unparalleled customer service.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Content;
