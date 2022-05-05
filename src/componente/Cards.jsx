import { NavLink } from "react-router-dom";

const Cards = ({ games }) => {
    // const { results } = games
    // console.log(games)
    return (
        <>
            {
                games?.length > 0 && games.map((game, i) =>
                (
                    <div key={i} className="card shadow bg-dark d-flex align-items-center  my-2 mx-2 rounded"
                        style={{ width: "18rem" }}>
                        <div className="card-body">
                            <div className="imagen_div">
                                <img src={game.background_image} className="card-img-top image rounded" alt={`imagen ${game.name}`} />
                            </div>
                            <h4 className="card-title mt-2 text-white fst-italic fw-bold">{game.name}</h4>
                            <p className="card-text fw-bold text-white fst-italic">Ratings Top: {game.rating_top}</p>

                        </div>
                        <div className="button">
                            <NavLink to={`/Games/${game.id}`} className="btn btn-outline rounded p-1 fw-bold fst-italic m-2">
                                + INFO
                            </NavLink>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Cards;