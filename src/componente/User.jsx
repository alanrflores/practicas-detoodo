import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
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
        <div className="container">
            <h3 className="fw-bold fst-italic p-2 text-white">
                <b>{users.name}</b><hr />
            </h3>
            <div className="d-flex justify-content-center">

                <img
                    src={users.background_image_additional}
                    style={{ width: "900px", height: "600px" }} />
            </div>
            <a
                href="http://www.metalgearsolid.com"
                target="_blank">
                {users.website}
            </a>
            <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
                {
                    users?.platforms?.length > 0 && users.platforms.map((user, i) => {
                        return <p className="text-white fw-bolds fst-italic mt-2">
                            🎮<b>{user.platform.name}</b><br /></p>
                    })
                }
            </div>
            <div className="d-flex justify-content-center mt-4">

                <p className="fst-italic mb-4 text-white"> <b>{users.released}</b><br />
                    {users.description_raw} <br />
                    
                </p>
            </div>
            {
                users?.publishers?.length > 0 && users.publishers.map((user, i) => {
                    return <h4 className="text-white">{user.name}</h4>
                })    
            }
            {
                  users?.stores?.length > 0 && users.stores.map((user,i)=> {
                    return <a>{user.store.domain}<br/></a> 
                })
            }


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