import './cards.scss';

const Cards = () => {
    return (
        <div className='cards'>
            <div className='ticket'>
                <img
                    src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D0%BF%D0%B8%D1%80%D0%B0-%D1%8C%D0%BD%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5-%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-36825045.jpg"
                    alt=""/>
                <p>Product 1</p>
                <p>USD 100.00 <span className='item'>item</span></p>
            </div>
            <div className='ticket'>
                <img
                    src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D0%BF%D0%B8%D1%80%D0%B0-%D1%8C%D0%BD%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5-%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-36825045.jpg"
                    alt=""/>
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,</p>
                <p>USD 100.00</p>
            </div>
            <div className='ticket'>
                <img
                    src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D0%BF%D0%B8%D1%80%D0%B0-%D1%8C%D0%BD%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5-%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-36825045.jpg"
                    alt=""/>
                <p>Product 1</p>
                <p>USD 100.00</p>
            </div>
            <div className='ticket lastChild'>
                <img src="https://publicdomainvectors.org/tn_img/dev.webp" alt=""/>
                <p>Tap to add<br/> a new item</p>
            </div>
        </div>
    )
}

export default Cards;