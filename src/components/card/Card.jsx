import arrow from '../../assets/icons8-up-right-50.png';
import './card.css'

const Card = ({cardbg}) => {
    return (
        <div className="card">
            <img src={cardbg} alt="card-bg" className="bg-img" />

            <div className="card-header">
                <h3>Title</h3>

                
                <img src={arrow} alt="arrow-icon" />
                
            </div>
        </div>
    )
}

export default Card;