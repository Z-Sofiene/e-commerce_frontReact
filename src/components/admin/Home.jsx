import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                    src="https://img.freepik.com/photos-gratuite/montrant-panier-chariot-shopping-ligne-signe-graphique_53876-133967.jpg"
                    alt="Shopping Cart"
                />
                <Carousel.Caption>
                    <h5>Online Shopping Made Easy</h5>
                    <p>Explore our wide range of products and shop from the comfort of your home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                    src="https://img.freepik.com/photos-gratuite/achats-ligne-paiement-e-commerce-banque_53876-127604.jpg?semt=ais_hybrid"
                    alt="Secure Payments"
                />
                <Carousel.Caption>
                    <h5>Secure and Fast Payments</h5>
                    <p>Experience hassle-free transactions with our trusted payment gateways.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                    src="https://static.vecteezy.com/system/resources/previews/035/198/647/non_2x/ai-generated-online-shopping-representation-with-people-on-digital-devices-surrounded-by-gifts-and-icons-of-products-photo.jpg"
                    alt="Exclusive Offers"
                />
                <Carousel.Caption >
                    <h5>Exclusive Deals and Discounts</h5>
                    <p>Grab the best deals on your favorite products with unbeatable prices.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
