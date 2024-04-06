import { ImSearch } from "react-icons/im";
import { Link} from "react-router-dom";
const Header = () => {
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
                />
                <ImSearch className='cursor-pointer'/>
            </div>
        </header>
    );
};

export default Header;