import { useDispatch, useSelector } from 'react-redux';
import MySlider from '../descroptionSlider/slider';
import './description.scss';
import { Link } from 'react-router-dom';
import { openModal } from '../coffeListItem/coffeeSlice';

const img_url = 'https://t.ly/VJQ1';

const Description = () => {
    // const openModal = useSelector(state => state.filter.modalOpen);

    const dispatch = useDispatch();

    const showModal = () => {
        dispatch(openModal());
    };
    return (
        <div className="grid_container_descr">
            <div className="img">
                <img
                    src={img_url}
                    alt="coffee"
                />
            </div>
            <div className="descr">
                <h1>Welcome to Our Fruits Shop</h1>
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible. <br />
                    <br />
                    Afraid at highly months do things on at. Situation recommend
                    objection do intention so questions.
                    <br />
                </p>
            </div>
            <div className="descr__buttons">
                <Link to="/items">
                    <button className="btn btn-descr btn_shop">Shop now</button>
                </Link>

                <button
                    onClick={showModal}
                    className="btn btn-descr"
                >
                    contact Us
                </button>
            </div>
        </div>
    );
};

export default Description;
