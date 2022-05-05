import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "./Loading";
import axios from "axios";



const User = () => {
    //console.log(useParams())
    const { id } = useParams()
    //console.log(id)

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        updateGames(setLoading,
            `https://api.rawg.io/api/games/${id}?key=28303e1c119441d89ca8ae33d5611273&page_size=30`
        )
    }, [id])

    const updateGames = (loading, url) => {

        obtenerDatos(loading, url)
            .then((newUsers) => {
                setUsers(newUsers);
            })
            .catch((error) => { })
    }

    if (loading) {
        return <Loading />
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-10 mx-auto">
                    <h3 className="fw-bold fst-italic p-2 text-white text-center flex-wrap">
                        <b>{users.name}</b><hr />
                    </h3>
                    <div
                        id="carouselExampleDark"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img
                                    src={users.background_image}
                                    width="640px"
                                    height="480px"
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="fw-bold fst-italic text-black border-bottom rounded-pill p-0 m-0">
                                        <span>$3500</span>
                                    </h5>
                                    <button className="btn btn-outline-success border-0 fw-bold fst-italic m-2">
                                        Buy Now
                                    </button>
                                    <button className="btn btn-outline-light border-0 fw-bold fst-italic m-2">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">

                                <img src={users.background_image_additional}
                                    width="640px" height="480px" className="d-block w-100"
                                    alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="fw-bold fst-italic text-white-50 text-uppercase">
                                        {users.slug}
                                    </h5>


                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-10 mx-auto">
                    <div className="text-center">
                        <a href={users.website} target="_blank">
                            {users.website}
                        </a>
                    </div>
                    <div className="row bd-highlight mb-3">
                        {users?.platforms?.length > 0 && users.platforms.map((user, i) => (
                            <div className="col-sm-12 col-md-4 text-center">
                                <p className="text-white fw-bolds fst-italic mt-2">
                                    🎮<b>{user.platform.name}</b>
                                </p>
                            </div>
                        ))}

                    </div>
                    <div className="mt-4">
                        <p className="fst-italic text-white text-center mb-4">
                            <b>{users.released}</b>
                            {users.description_raw}
                        </p>
                    </div>
                    <div>
                        {users?.publishers?.length > 0 && users.publishers.map((user, i) => (
                            <h4 className="text-white text-center">{user.name}</h4>
                        ))}
                        <div className="row">
                            {users?.stores?.length > 0 && users.stores.map((user, i) => (
                                <div className="col-sm-12 col-md-4 text-center">
                                    <a href={user.store.name} target="_blank" >{user.store.domain}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const obtenerDatos = async (setLoading, url) => {
    setLoading(true)
    try {
        const res = await axios.get(url)
        return res.data;

    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false)
    }
};

export default User