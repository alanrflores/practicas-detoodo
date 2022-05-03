import { useState } from "react"


const Pagination = ({ updateGames, next, previous, loading, page, setPage }) => {

    const [total, setTotal] = useState(Math.round(25, 30 * page));

    const lastPage = () => {
        const lastP = Math.max(page - 1, 0)

        if (page > 1) {
            setPage(lastP)
            updateGames(loading, previous)
        }
    }

    const nextPage = () => {
        const nextP = Math.min(page + 1, total);
        if (page < 25) {
            setPage(nextP);
            updateGames(loading, next)
        }
    }

    return (

        <div className="d-flex m-2 p-2">
            <button className="btn btn-outline-success border-0" onClick={lastPage}>
                <div>👈</div>
            </button>
            <div className="d-flex flex-wrap align-content-center m-2 fw-bold">{page} de {total}</div>
            <button className="btn btn-outline-success border-0" onClick={nextPage}>
                <div>👉</div>
            </button>
        </div>

    )
}




export default Pagination;