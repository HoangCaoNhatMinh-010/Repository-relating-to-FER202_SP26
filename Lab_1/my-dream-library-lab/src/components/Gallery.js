export default function Gallery() {
  return (
    <section id="gallery" className="container my-5">
      <h2 className="text-center fw-bold mb-4">Reading Corners & Facilities</h2>

      <div className="row g-4">
        {[1, 2, 3].map((i) => (
          <div className="col-md-4" key={i}>
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              className="img-fluid rounded shadow"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}





