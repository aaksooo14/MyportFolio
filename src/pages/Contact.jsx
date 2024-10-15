
import { FaRegHandPointDown } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="p-5 space-y-5 bg-black text-white " >
                <div className="flex justify-center">
                    <p className="text-2xl">Let&apos;s collaborate</p>
                </div>

                <div className="text-8xl flex items-center justify-center p-5">
                    <FaRegHandPointDown />

                </div>
                <form className="space-y-2  ">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-md w-full max-w-xs" />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-md w-full max-w-xs" />
                    <input
                        type="text"
                        placeholder="Message"
                        className="input input-bordered input-lg w-full max-w-xs" />
                </form>
                <div >
                    <button className="btn bg-red-700 w-[89vw] ">Wide</button>
                </div>
            </div>
        </>
    )
}

export default Contact
