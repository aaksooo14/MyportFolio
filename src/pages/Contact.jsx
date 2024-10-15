
import { FaRegHandPointDown } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="p-5 space-y-5 bg-black text-white">
                <div className="flex justify-center">
                    <p className="text-2xl">Let&apos;s collaborate</p>
                </div>

                <div className="text-8xl flex items-center justify-center p-5">
                    <FaRegHandPointDown />
                </div>

                <div className="flex items-center justify-center">
                    <form className="space-y-2 flex flex-col items-center">
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
                </div>

                <div className="flex justify-center">
                    <button className="btn bg-red-700 w-full max-w-xs">Wide</button>
                </div>
            </div>

        </>
    )
}

export default Contact
