const OurDesc = ({ num, value }) => {
    const isOdd = num % 2 === 0 ? true : false;
    const img = (
        <img
            src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="coffe"
        ></img>
    );

    console.log(isOdd);

    const descr = (
        <div className="our_descr_item_text">
            <h3>{value}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                autem eius adipisci consequatur quo. Provident, expedita?
                Reiciendis ipsam nesciunt ab! Explicabo omnis natus debitis
                itaque sit, fuga tempore modi maxime.
            </p>
        </div>
    );

    return (
        <div className="our_descr_item">
            {isOdd ? (
                <>
                    {descr} {img}
                </>
            ) : (
                <>
                    {img} {descr}
                </>
            )}
        </div>
    );
};

export default OurDesc;
