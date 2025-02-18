import { Link } from "react-router-dom"
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";



const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="flex navbar bg-black text-white">
                <div className="flex-1">
                    <Link to={'/'}><p className="text-xl bg-green-400 text-black font-bold pl-1 pr-1 rounded">Akash</p></Link>
                </div>
                <div className="flex-none">

                    <div>
                        <div className="dropdown dropdown-end">
                            <div
                                onClick={() => setShow(!show)}
                                tabIndex={0}
                                className="text-4xl ">
                                <IoReorderThreeOutline />
                            </div>
                            {
                                show && (
                                    <div className="top-0 fixed right-0 z-10">

                                        <ul
                                            tabIndex={0}
                                            className="bg-black  dropdown-content menu space-y-5 w-[60vw] h-[100vh]
                                            pt-[15vh] pl-[10vw] ">
                                            <p
                                                onClick={() => setShow(!show)}
                                                className="absolute top-0 right-0 p-2 text-3xl ">
                                                <IoCloseCircleOutline />

                                            </p>
                                            <Link to={'/'}><li className="text-2xl py-3">Project</li></Link>
                                            <Link to={'/profile'}><li className="text-2xl py-3">Profile</li></Link>
                                            <Link to={'/contact'}><li className="text-2xl py-3">Contact</li></Link>

                                        </ul>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                </div>
            </div >
        </>
    )
}

export default Header
