import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
import { StatusCode } from "../StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error("Error ", error);
    //   }
    // };
    // fetchData();
    //dispatch an action for fetchProducts
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) return <p>Loading...</p>;

  if (status === StatusCode.ERROR)
    return <Alert variant="danger">Somthing went wrong!!!!!!</Alert>;

  const addToCart = (item) => {
    //dispatch an add action
    dispatch(add(item));
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {products.map((x) => (
          <div className="col-md-3" style={{ marginBottom: "10px" }}>
            <Card key={x.id} className="h-100">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={x.image}
                  style={{ width: "100px", height: "130px" }}
                />
                <Card.Body>
                  <Card.Title>{x.title}</Card.Title>
                  <Card.Text>INR {x.price}</Card.Text>
                </Card.Body>
              </div>
              <Card.Footer>
                <Button variant="primary" onClick={() => addToCart(x)}>
                  Add to cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
