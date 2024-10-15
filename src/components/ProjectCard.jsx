import shopMe from '../assets/shopMe.png'
import { Link } from 'react-router-dom'
const ProjectCard = () => {
    return (
        <div>
            <div className="card lg:card-side bg-black text-white shadow-xl p-2 border  border-white">
                <figure>
                    <img
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
        </div>
    )
}

export default ProjectCard
