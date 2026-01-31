export default function Books() {
  const books = [
    { title: "The Silent Forest", author: "John Blake", rating: "4.0" },
    { title: "Dream Beyond Stars", author: "Emily Rose", rating: "5.0" },
    { title: "Ocean of Secrets", author: "Mark Lee", rating: "4.5" },
    { title: "Mystic Tales", author: "Sarah Moon", rating: "5.0" }
  ];

  return (
    <section id="books" className="container my-5">
      <h2 className="text-center fw-bold mb-4">Featured Books</h2>

      <div className="row g-4">
        {books.map((b, i) => (
          <div className="col-md-3" key={i}>
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1528207776546-365bb710ee93"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>
                <p className="card-text">Author: {b.author}</p>
                <p>{b.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}






