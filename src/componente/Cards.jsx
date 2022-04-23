import Loading from "./Loading";

const Cards = ({ dog, loading, UpdateDog }) => {

    if(loading) return <Loading />


    return (
        <>
            <div className="d-flex justify-content-center">
                <div  className="card mt-4" style={{ width: "20rem" }} onClick={() => UpdateDog(dog.breed.id)}>
                    <img src={dog.image} style={{ width: "20rem" }} className="card-img-top border border-dark " alt="dog" />
                    <div className="card-body">
                        <h5 className="card-title text-center">ID: {dog.breed.id} <br />
                            {dog.breed.name}</h5>
                        <p className="card-text">{dog.breed.temperament}</p>
                        <div className="d-flex justify-content-center">
                            <button to="/" className="btn btn-outline-dark">Go somewhere</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;