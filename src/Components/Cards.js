import React from "react";
import Card from "react-bootstrap/Card";
import Carddata from "./Carddata";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../action/action";
const Cards = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mt-2 ">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {Carddata.map((ele) => {
          return (
            <Card
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={ele.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{ele.rname}</Card.Title>
                <Card.Text>Price:{ele.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => dispatch(ADD(ele))}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
