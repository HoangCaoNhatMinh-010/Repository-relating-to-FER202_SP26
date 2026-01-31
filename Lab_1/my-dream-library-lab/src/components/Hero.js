export default function Hero() {
  return (
    <div id="hero" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
               className="d-block w-100" height="500" style={{ objectFit: "cover" }} alt="" />
          <div className="carousel-caption">
            <h1 className="fw-bold">Read. Imagine. Grow.</h1>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
               className="d-block w-100" height="500" style={{ objectFit: "cover" }} alt="" />
          <div className="carousel-caption">
            <h1 className="fw-bold">A World of Knowledge</h1>
          </div>
        </div>

      </div>
    </div>
  );
}




