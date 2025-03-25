export default function Testimonials() {
    return (
      <section className="container my-5">
        <h2 className="text-center">What Our Users Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"This platform changed my life!"</p>
              <footer className="blockquote-footer">John Doe</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"Highly recommend it to everyone!"</p>
              <footer className="blockquote-footer">Jane Smith</footer>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
  