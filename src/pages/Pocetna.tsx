import {Link} from 'react-router-dom';

export const Pocetna = () => {
    return (
        <div className="h-screen bg-black">
            <h1 className="text-center text-[#FFD700] text-5xl pt-12 font-bold">WHM METODA</h1>

            {/* MAIN PAGE */}
            <div className="flex flex-col xl:flex-row pt-32 min-xl:pt-60 justify-center w-full">

                {/* BREADING */}
                <div id="breathing" className="w-full xl:w-[50%] border-b-2 min-[1190px]:border-b-0 min-[1190px]:border-r-2 border-[#FFD700] cursor-pointer hover:bg-gray-900 transition duration-800 ease-in-out">
                <Link to='/breathPage'>
                    <h2 className="pb-12 min-[500px]:pb-0 text-6xl min-[500px]:text-[170px] xl:text-[170px] text-center text-white">BREATH</h2>
                </Link>
                </div>
                
                {/* HISTORY */}
                <div id="history" className="w-full xl:w-[50%] cursor-pointer transition duration-800 ease-in-out hover:bg-gray-900">
                    <Link to='/history'>
                    <h2 className="pt-12 min-[500px]:pt-0 text-6xl min-[500px]:text-[170px] xl:text-[170px] text-center text-white">HISTORY</h2>
                </Link>
                </div>
            </div>
    </div>
    )
}

export default Pocetna;