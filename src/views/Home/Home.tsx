import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IData } from "../../types/IData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { options } from "../../api-options";

const Home = () => {
    const [data, setData] = useState<IData []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=externalId&selectFields=name&selectFields=description&selectFields=id&selectFields=poster', options)
            .then(res => res.json())
            .then(res => setData(res.docs))
            .catch(err => {
                console.log(err)
                setError(true)
            })

        setLoading(false)
        if(data) setError(false)
    }, [])

    console.log(data)
    return (
        <>
            {loading && !error ? 
                <div className='flex justify-center items-center'><AiOutlineLoading3Quarters/></div>
                :
                <div className='flex flex-wrap items-center justify-center gap-2'>
                    {data.map(item => {
                        return(
                            <Link 
                                to={`movie/${item.id}`} 
                                key={item.id}
                                className='w-18% flex justify-center flex-col items-center'
                            >
                                <img className='w-28 rounded-sm ease-in duration-200 hover:scale-125' src={item.poster.url} alt="poster" />
                            </Link>
                        )
                    })}
                </div>
            }
        </>
    );
};

export default Home;