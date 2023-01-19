import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext, settingContext } from "../App";

function PlaceOrder() {
  // UseContext For Product Array
  let item: any = useContext(productContext);
  // UseContext For Setting Object
  let setting: any = useContext(settingContext)
  let navigate = useNavigate()
  // UseState For Input Fields
  const [select, setSelect] = useState<any>([]);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zip, setZip] = useState<string | number>("");
  const [option, setOption] = useState<string>("");
  const [quantity, setQuantity] = useState<string | number>("");
  const [result, setResult] = useState<any | []>([]);
  useEffect(() => {
    let tempArr = [];
    // Push Product Name Into Options
    for (let i = 0; i < item.product.length; i++) {
      tempArr.push(item.product[i].name);
    }
    setSelect(tempArr);
  }, [item.product]);
  // Name Input Field
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // Address Input Field
  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  // Zip Input Field
  const zipHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  };
  // Options Input Field
  const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };
  // Quantity Input Field
  const quantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };
  // Add Order
  const addOrder = () => {
    // Check Validation
    if (name === "") {
      alert("Name Field Can Not Be Empty");
      document.getElementById("name")?.focus();
    } else if (address === "") {
      alert("Address Field Can Not Be Empty");
      document.getElementById("address")?.focus();
    } else if (zip === "" && setting.setting.zip !== undefined) {
      let obj = {
        name: name,
        address: address,
        zip: setting.setting.zip,
        option: option,
        quantity: quantity,
      };
      setResult([...result, obj]);
      clearInput();
    } else if (option === "") {
      if (item.product.length === 0) {
        alert("Firstly Add Some Products and After Place Order !!")
        navigate("/product");
      } else {
        alert("Select Product Field Can Not Be Empty");
        document.getElementById("option")?.focus();
      }

    } else if (quantity === "") {
      alert("Quantity Product Field Can Not Be Empty");
      document.getElementById("quantity")?.focus();
    } else {
      let obj = {
        name: name,
        address: address,
        zip: zip,
        option: option,
        quantity: quantity,
      };
      setResult([...result, obj]);
      clearInput();
    }
  };
  // Function For Clear Input Fields
  function clearInput() {
    setName("");
    setAddress("");
    setZip("");
    setOption("");
    setQuantity("");
  }
  return (
    <div>
      <center>
        <h1>Place Order</h1>
        <div className="d-grid gap-2 col-3 mx-auto">
          <Link to="/" className="btn btn-secondary" type="button">
            Home
          </Link>
        </div>
        <div style={{ margin: "3em", width: "50%" }}>
          <form>
            <div className="input-group mb-3">
              <input
                onChange={nameHandler}
                id="name"
                value={name}
                type="text"
                className="form-control"
                placeholder="Your Name..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Name
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={addressHandler}
                id="address"
                value={address}
                type="text"
                className="form-control"
                placeholder="Your Address..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Address
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={zipHandler}
                type="number"
                value={zip}
                id="zip"
                className="form-control"
                placeholder="Your Zip Code..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Zip
              </span>
            </div>
            <div className="input-group mb-3">
              <select
                onChange={optionHandler}
                className="form-select"
                aria-label="Default select example"
                id="option"
              >
                <option selected>---Select Product---</option>
                {select.map((val: any) => (
                  <option>{val}</option>
                ))}
              </select>
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Your Product
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={quantityHandler}
                type="number"
                value={quantity}
                id="quantity"
                className="form-control"
                placeholder="Quantity..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Quantity
              </span>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                onClick={addOrder}
                className="btn btn-success"
                type="button"
              >
                PLACE ORDER
              </button>
            </div>
          </form>
          {/* Table */}
          {result.length !== 0 ? (
            <table
              style={{ marginTop: "2em" }}
              className="table table-dark table-hover"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Zip Code</th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {result.map((val: any, index: number) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.address}</td>
                    <td>{val.zip}</td>
                    <td>{val.option}</td>
                    <td>{val.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </center>
    </div>
  );
}

export default PlaceOrder;
