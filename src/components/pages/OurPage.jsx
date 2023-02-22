import OurDesc from '../ourDescription/ourDescription';
import './ourPage.scss';

const OurPage = () => {
    return (
        <div className="ourPage_list_grid">
            <OurDesc
                num={1}
                value="Our Passion"
            />
            <OurDesc
                num={2}
                value="Our Goals"
            />
            <OurDesc
                num={3}
                value="Our Insiration"
            />
        </div>
    );
};

export default OurPage;
