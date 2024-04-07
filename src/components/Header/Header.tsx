import {useState} from 'react'
import { ImSearch } from "react-icons/im";
import { Link, useNavigate} from "react-router-dom";
const Header = () => {
    const [nameMovie, setNameMovie] = useState<string>("")

    const navigate = useNavigate()

    const navigateToCurrentCinema = () => {
        navigate(`/search/${nameMovie}`)
        setNameMovie('')
    }

    console.log(nameMovie)

    return (
        <header className='p-3 flex justify-between'>
            <Link to='/' className=''>Кино</Link>
            <nav className='flex gap-2'>
                <Link className='' to='/catalog'>Категория</Link>
                <Link to='/top'>Топ 250 фильмов</Link>
            </nav>
            <div className='flex gap-1 items-center'>
                <input 
                    type="text" 
                    className='text-black rounded-lg px-4 py-1' 
                    placeholder="Поиск"
                    onChange={e => setNameMovie(e.target.value)}
                    value={nameMovie}
                />
                <ImSearch 
                    className='cursor-pointer'
                    onClick={navigateToCurrentCinema}
                />
            </div>
        </header>
    );
};

export default Header;