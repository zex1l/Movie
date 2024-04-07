import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import { IMovie } from '../../types/IMovie';

import { options } from '../../api-options';

import starPng from '../../assets/star.png'


const SearchMovie = () => {
    const [moviesData, setMoviesData] = useState<IMovie []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const {nameCinema} = useParams()

    useEffect(() => {
        setLoading(true)

        fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${nameCinema}`, options)
            .then(responce => responce.json())
            .then(responce => setMoviesData(responce.docs))
            .catch(error => setError(error))

        setLoading(false)
    }, [nameCinema])

    console.log(moviesData)

    return (
        <section>
            <h1 className='mb-7 text-2xl font-bold'>По запросу "{nameCinema}" найдено:</h1>
            <div className='flex justify-start flex-col'>
               {
                loading && !error ? <div>Loading...</div>
                :
                moviesData.map(movie => {
                    if(movie.name === "") return null
                    return(
                        <Link 
                            key={movie.id} 
                            to={`/movie/${movie.id}`}
                            className='flex gap-10 mb-12 p-4'
                        >
                            <img 
                                className='w-[270px] h-[400px]' 
                                src={movie.poster.url ? movie.poster.url : 'https://placehold.co/270x400'} 
                                alt="preview image" 
                            />
                            <div>
                                <p className='mb-2 text-2xl'>{movie.name}</p>
                                <p className='mb-2'>{movie.year}</p>
                                <p className='mb-2'>{movie.description}</p>
                                {
                                    movie.rating.kp ? 
                                    <div className='flex gap-3 items-center'>
                                        <img className='w-[32px]' src={starPng} alt="rating star" />
                                        <span>{movie.rating.kp.toFixed(1)}</span>
                                    </div> 
                                    :
                                    null
                                }
                            </div>
                        </Link>
                    )
                })
               }
            </div>
        </section>
    );
};

export default SearchMovie;