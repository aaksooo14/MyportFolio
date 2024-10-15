// import profileImage from '../assets/profile.jpg'
import shopMe from '../assets/shopMe.png'
import weatherApp from '../assets/weatherApp.png'

import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <>
            <div
                className={`pl-2 pr-2 bg-black text-white `}

            >
                <div

                    className='space-y-6 pt-5 p-6 rounded-lg shadow-md '>
                    <p className='text-3xl font-semibold text-white'>
                        FullStack Developer
                    </p>
                    <p className='text-xl '>
                        React JS | Node JS | Express JS | Mongo DB
                    </p>
                    <div className="w-full">
                        <p className="leading-relaxed ">
                            React Developer with a proven track record in building dynamic and responsive web applications using React, HTML, CSS, JavaScript, and Tailwind CSS. Passionate about creating seamless user experiences and eager to contribute to a forward-thinking team that values innovation and collaboration.
                        </p>
                    </div>
                </div>

                {/* PROJECT  SECTION*/}
                <div className='space-y-5 pb-5'>
                    <p className=' text-2xl font-semibold flex items-center justify-center p-5'>Projects</p>
                    <div className=" card lg:card-side bg-black text-white shadow-xl 
                     border  border-white">
                        <figure className='pt-5'>
                            <img
                                className='w-[320px] h-[200px] '
                                src={shopMe}
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">ShopMe Ecommerce Website</h2>
                            <p>Technology : React JS, Tailwind CSS , JavaScript</p>
                            <div className="card-actions justify-end">
                                <Link to={'https://shop-me-six.vercel.app/'}> <button className="btn btn-primary">View</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className="card lg:card-side bg-black text-white shadow-xl p-3 border  border-white">
                            <figure className='pt-5'>
                                <img
                                    className='w-[320px] h-[200px] rounded-md'
                                    src={weatherApp}
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Weather App</h2>
                                <p>Technology : React JS, Tailwind CSS , JavaScript</p>
                                <div className="card-actions justify-end">
                                    <Link to={'https://weather-app-sigp.vercel.app/'}> <button className="btn btn-primary">View</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* //2 */}


            </div >
        </>
    )
}

export default Project
