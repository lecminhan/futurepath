export default function Gallery() {
    return (
      <section className="container my-5">
        <h2 className="text-center">Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Gallery 1" />
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Gallery 2" />
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Gallery 3" />
          </div>
        </div>
      </section>
    );
  }
  