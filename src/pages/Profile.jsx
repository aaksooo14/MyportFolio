
import profileImage from '../assets/profile.jpg'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import tailwind from '../assets/tailwind.png'
import fulldev from '../assets/fulldev.png'
import { Link } from 'react-router-dom'
const Profile = () => {
    return (
        <>
            <div className='pr-2 pl-2 bg-black text-white space-y-5'>
                <div className='space-y-6 pt-5 max-w-xl mx-auto'>
                    <p className='text-3xl font-bold text-white text-center'>
                        Hi, I am Akash Sahastrabuddhe
                    </p>
                    <p className='text-white text-center leading-relaxed'>
                        Aspiring React JS Developer seeking to leverage my web development skills and engineering background to
                        contribute to innovative projects in a dynamic environment.
                    </p>
                    <div className="flex items-center justify-center">
                        <img
                            className='rounded-full border-4 border-white shadow-lg'
                            src={fulldev}
                            alt='image'
                        />
                    </div>
                </div>

                <div className="flex justify-center p-6 bg-black rounded-lg shadow-md">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
                        <div className="mb-4">
                            <p className="text-lg font-medium text-white">B.Tech in Electronics & Telecommunication</p>
                            <p className="text-white">JD College of Engineering and Management, Nagpur</p>
                        </div>
                    </div>
                </div>



                {/* SKILLS */}
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-white mb-4 text-center">Technologies</p>
                </div>


                <div className="carousel carousel-center bg-neutral  max-w-md space-x-4 p-4">
                    <div className="carousel-item ">
                        <img
                            src={react}
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={node}
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={express}
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={mongodb}
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={javascript}
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={tailwind}
                            className="rounded-box" />
                    </div>

                </div>

                <div className="flex justify-center items-center pb-[25px] ">
                    <Link to={'https://drive.google.com/file/d/1lWyQLx8I5TMoSKPUrF9XPc6mKtjlXYVT/view?usp=drivesdk'}>
                        <button className="btn bg-pink-600 text-white px-4 py-2 rounded">Download Resume</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Profile
