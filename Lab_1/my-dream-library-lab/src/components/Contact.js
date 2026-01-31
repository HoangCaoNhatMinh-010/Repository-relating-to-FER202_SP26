export default function Contact() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <form className="row g-3 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" placeholder="Your name" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" placeholder="Your email" />
        </div>

        <div className="col-12">
          <label className="form-label">Favorite Book</label>
          <input className="form-control" placeholder="Book name" />
        </div>

        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-primary px-4">Send Message</button>
        </div>
      </form>
    </section>
  );
}






