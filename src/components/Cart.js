import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const disapper = (item) => {
    dispatch(remove(item));
  };

  const cards = cartProducts.map((x) => (
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
          <Button variant="danger" onClick={() => disapper(x.id)}>
            remove
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
};

export default Cart;
