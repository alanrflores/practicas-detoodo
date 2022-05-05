import { Link } from "react-router-dom"



const Home = () => {
    const imgUrl = "https://www.wallpapertip.com/wmimgs/13-138750_neon.jpg"
    const imgUrl2 = "https://cdn.vox-cdn.com/thumbor/6I-IQtvx29OSQp0nZscVi7Ev9rA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg"
    const imgUrl3 = "https://cdn.arstechnica.net/wp-content/uploads/2020/12/ars-games-of-the-year-2020-800x450.jpg"

    return (
        <div className="w-100">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1">
                    </button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2">
                    </button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3">
                    </button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgUrl} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-caption d-none d-md-block">

                        <div className="row justify-content-start">
                            <div className="col">
                                <h3 className="fst-italic mb-2">Welcome in</h3>
                                <h3 className="fst-italic ms-2 text-success">GamesCoder</h3>
                            </div>
                        </div>
                        <Link to="/Games">
                            <button
                                className="btn btn-outline-success fst-italic 
                                           fw-bold border-0 border-bottom m-2 p-2"
                            >
                                Go to Games
                            </button>
                        </Link>

                    </div>
                    <div className="carousel-item">
                        <img src={imgUrl2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgUrl3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home