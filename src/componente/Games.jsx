import { useEffect, useState } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import Pagination from "./Pagination";
import axios from "axios";


const Games = (props) => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        updateGames(setLoading,
            "https://api.rawg.io/api/games?key=28303e1c119441d89ca8ae33d5611273&page_size=30"
        )
    }, [])

    const updateGames = (loading, url) => {
        getGames(loading, url)
            .then((newGames) => {
                setGames(newGames);
            })
            .catch((error) => { })
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="text-center mt-2">
                            <h3 className="text2 fst-italic text-success fs-4 border-bottom rounded-pill">
                                Games Coder
                            </h3>
                        </div>
                        <Pagination
                            updateGames={updateGames}
                            next={games.next}
                            previous={games.previous}
                            loading={setLoading}
                            page={page}
                            setPage={setPage}
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center py-1">
                    <Cards
                        games={games.results}
                    />
                </div>
                {/*
                    games.length > 0 && games.map((game, i) => (
                        <li key={i}><h4>{game.name}</h4></li>
                    ))
                    */}
            </div>
        </>
    )
}

export const getGames = async (setLoading, url) => {
    setLoading(true)
    try {
        const res = await axios.get(url)
        //console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false)
    }
};

export default Games;