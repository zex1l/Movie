import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className=''>
                <div className='flex justify-center items-center flex-col h-screen'>
                    <div className='text-xl'>Page not found</div>
                    <Link 
                        to='/'
                        className='mt-4 underline text-white'
                    >
                    Go to Home</Link>
                </div>
        </section>
    );
};

export default NotFound;