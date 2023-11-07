import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const API = process.env.API;

const Detail = () => {

    const [movie, setMovie  ] = useState();
    
    const title = useParams().title;

    useEffect(() => {
        fetch(`${API}&t=${title}`)
        .then((res) => res.json())
        .then((data) => {
            setMovie(data);
        });
    }, [title]);

    return(
        <div>
            console.log(movie);
        </div>
    );
}

export default Detail;