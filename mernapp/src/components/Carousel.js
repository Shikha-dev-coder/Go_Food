import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        classNameName="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div classNameName="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div classNameName="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900×700/?burger"
              classNameName="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div classNameName="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?pizza"
              classNameName="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div classNameName="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?noodles"
              classNameName="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          classNameName="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            classNameName="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span classNameName="visually-hidden">Previous</span>
        </button>
        <button
          classNameName="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            classNameName="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span classNameName="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
