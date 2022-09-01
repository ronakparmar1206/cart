import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import Carddata from "./Carddata";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../action/action";

const Carddetails = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [data, setdata] = useState([]);
  console.log(data);
  const { id } = useParams();
  const [price, setprice] = useState(0);
  const mystate = useSelector((state) => state.cartreducer.carts);
  const compare = () => {
    let comparedata = mystate.filter((e) => {
      console.log(e.id);
      return e.id == id;
    });
    setdata(comparedata);
    // console.log(comparedata);
  };
  useEffect(() => {
    compare();
  }, [id]);
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };
  const total = () => {
    let price = 0;
    data.map((e) => {
      price = e.price + price;
      setprice(price);
    });
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((e) => {
              return (
                <>
                  <div className="items_img">
                    <img src={e.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>Restaurant</strong> :{e.rname}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> :{e.price}
                          </p>
                          <p>
                            {" "}
                            <strong>Dishes</strong> : {e.address}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> {e.price * e.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              // onClick={() => dispatch(REMOVE(e))}
                              onClick={
                                e.qnty <= 1
                                  ? () => dlt(e.id)
                                  : () => dispatch(REMOVE(e))
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{e.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => dispatch(ADD(e))}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              3 ★{" 5"}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>
                              " 1175 + order placed from here recently"{" "}
                            </span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={() => dlt(e.id)}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Carddetails;
