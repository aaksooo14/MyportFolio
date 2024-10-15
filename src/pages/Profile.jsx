
import profileImage from '../assets/profile.jpg'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import tailwind from '../assets/tailwind.png'
import { Link } from 'react-router-dom'
const Profile = () => {
    return (
        <>
            <div className='pr-2 pl-2 bg-black text-white space-y-5'>
                <div className='space-y-3 pt-5'>
                    <p className='text-2xl'>Hi, I am Akash Sahastrabuddhe</p>
                    <p>I am a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <div className="flex items-center justify-center">
                        <img
                            className='rounded-lg border border-white p-2'
                            src={profileImage} alt='image' />
                    </div>
                </div>
                <div className=" p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                    <div className="mb-2">
                        <p className="text-lg font-medium ">B.Tech in Electronics & Telecommunication</p>
                        <p >JD College of Engineering and Management, Nagpur</p>
                    </div>
                </div>

                {/* SKILLS */}
                <p>Technologies</p>
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

                <div className="flex justify-center items-center p-5">
                    <Link to={'https://drive.google.com/file/d/1lWyQLx8I5TMoSKPUrF9XPc6mKtjlXYVT/view?usp=drivesdk'}>
                        <button className="btn bg-pink-600 text-white px-4 py-2 rounded">Download Resume</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Profile
