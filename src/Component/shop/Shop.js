import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../shop/Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import { Container, Row, Card, Col } from 'react-bootstrap';

const Shop = () => {
    const [products, setproducts] = useState([]);

    const [cart, setCart] = useState([]);

    const [displayProducts, setdisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
                setdisplayProducts(data);
            });
    }, [])

    useEffect(() => {
        if (products.length) {

            const saveCart = getStoredCart();

            const storedCart = [];

            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;

                    //console.log(addedProduct);

                    storedCart.push(addedProduct);
                }
            }

            setCart(storedCart);
            // console.log(saveCart); 

        }

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        //save to local database
        addToDb(product.key);

    }

    const handelSearch = event => {
        const searchText = event.target.value;

        const matcherdProdect = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setdisplayProducts(matcherdProdect);

        // console.log(matcherdProdect.length);
    }
    return (
        <div>
            <div className="search-container">
                <input type="text"
                    onChange={handelSearch}
                    placeholder="search here" />
            </div>
            <Row>
                 <Col sm={4}>
                    <Card>
                    <Cart cart={cart}></Cart>

                
                    </Card>
                </Col>
                <Col sm={8}>
                    <Card>
                        <Container >

                            <h1 className="text-center">Our total Course:{displayProducts.length}</h1>
                            <Row xs={1} md={3} className="g-4">
                                {
                                    displayProducts.map(product => <Product product={product} key={product.key}
                                        handleAddToCart={handleAddToCart} ></Product>)
                                }
                            </Row>
                        </Container>

                    </Card>
                </Col>
               
                {/* <div className="product-container">
                  <h2>product : {products.length}</h2>
                  {
                      displayProducts.map(product => <Product product={product} key={product.key}
                        handleAddToCart={handleAddToCart} ></Product>)
                  }
              </div> */}


            </Row>
        </div>
    );
};

export default Shop;