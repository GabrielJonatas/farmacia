import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    // const navigate = useNavigate();

    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farmacia ParaSeuBem</Link>

                    <div className='flex gap-4'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar