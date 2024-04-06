import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import {IMovie} from "../../types/IMovie";

import { options } from "../../api-options";

const CurrentMovie = () => {
    const [movie, setMovie] = useState<IMovie>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options)
            .then(res => res.json())
            .then(res => setMovie(res))
            .catch(err => {
                console.log(err)
                setError(true)
            })

        setLoading(false)
        if(movie) setError(false)
    }, [])

    console.log(movie)

    return (
        <div>
            {
                loading && !error ? <div>Loading...</div>
                :
                <section className=' py-7'>
                    <div className='flex  justify-start gap-10'>
                        <div>
                            <img className='w-34' src={movie?.poster.url} alt="" />
                            {
                                movie?.watchability 
                                ? 
                                <div className='flex gap-2 mt-2'>
                                    {movie?.watchability.items.map((item) => {
                                        return(
                                            <a key={item.name} href={item.url} >
                                                <img className='max-w-12 rounded-lg' src={item.logo.url} alt="" />
                                            </a>
                                        )
                                    })}
                                </div>  
                                :
                                null
                            }
                        </div>
                        <div>
                            <div className='text-3xl font-bold mb-6'>{movie?.name}</div>
                            <p className='text-xl font-medium mb-6'>О фильме:</p>
                            <div className='flex flex-row justify-between gap-24 pr-40'>
                               <div>
                                <div className='text-gray-400 text-sm mb-3'>Год производства</div>
                                <div className='text-gray-400 text-sm mb-3'>Страна</div>
                                <div className='text-gray-400 text-sm mb-3'>Жанр </div>
                                <div className='text-gray-400 text-sm mb-3'>Тип </div>
                               </div>
                               <div>
                                <div className='text-sm mb-3'>
                                    {movie?.year}
                                </div>
                                <div className='text-sm mb-3'>
                                    {
                                        movie?.countries.map((country, index) => <span key={index} className='mr-1'>{country.name}</span>)
                                    }
                                </div>
                                
                                <div className='text-sm mb-3'>
                                    {
                                        movie?.genres.map((genre, index) => {
                                            
                                            if(index != movie.genres.length-1) {
                                                return(
                                                    <span className='mr-1' key={index}>{genre.name},</span>
                                                )
                                            }
                                            else {
                                                return(
                                                    <span className='mr-1' key={index}>{genre.name}</span>
                                                )
                                            }
                                            
                                        })
                                    }
                                </div>
                                <div>
                                    {movie?.type}
                                </div>
                               </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center items-center flex-col'>
                        <p className='text-xl font-medium mb-6'>Описание:</p>
                        <div>{movie?.description}</div>
                    </div>
                </section>
                
            }
        </div>
    );
};

export default CurrentMovie;