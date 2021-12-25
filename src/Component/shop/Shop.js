import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../shop/Shop.css';
import { addToDb, getStoredCart,deleteFromDb } from '../../utilities/fakedb'
import { Container, Row, Card, Col } from 'react-bootstrap';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import CheckOut from '../CheckOut/CheckOut';

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
console.log(cart)
        //save to local database
        addToDb(product.key);

    }
    const handleDeleteCart = (e) => {
        // const array = ; // make a separate copy of the array
        var array = [...cart]; // make a separate copy of the array
        var index = array.indexOf(e)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({cart: array});
        }
        setCart(array);
    }

    const handelSearch = event => {
        const searchText = event.target.value;

        const matcherdProdect = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setdisplayProducts(matcherdProdect);

        // console.log(matcherdProdect.length);
    }
    return (
        <div >

            <div className="search-container">


                <input type="text"
                    onChange={handelSearch}
                    placeholder="search here" />
                <Badge color="secondary" badgeContent={cart.length}>
                    <ShoppingCartIcon className='c' />{" "}
                </Badge>
                <br />
                <br />

            </div>
            <br />
            <Row>

                <Col sm={4}>
                    <Card className='cart-fixed'>
                        <Cart cart={cart} handleDeleteCart={handleDeleteCart} key={cart.key} ></Cart>
                        
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
            </Row>
        </div>
    );
};

export default Shop;