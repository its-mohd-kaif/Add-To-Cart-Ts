import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { settingContext } from "../App";
function AddSetting() {
  // UseContext For Setting Object
  let item: any = useContext(settingContext);
  // UseState For Input Fields
  const [tag, setTag] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  // Option Handler
  const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTag(e.target.value);
  };
  // Price Input Field
  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  // Stock Input Field
  const stockHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.value);
  };
  // Zip Input Field
  const zipHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  };
  // Add Setting Handler
  const addSetting = () => {
    // Check Validation
    if (tag === "") {
      alert("Option field Can Not Be Empty");
      document.getElementById("tag")?.focus()
    } else if (price === "") {
      alert("Price Field Can Not Be Empty");
      document.getElementById("price")?.focus()
    } else if (stock === "") {
      alert("Stock Field Can Not Be Empty");
      document.getElementById("stock")?.focus()
    } else if (zip === "") {
      alert("Zip Field Can Not Be Empty");
      document.getElementById("zip")?.focus()
    } else {
      let obj = {
        tag: tag,
        price: price,
        stock: stock,
        zip: zip
      }
      item.setSetting(obj)
      setTag("");
      setPrice("");
      setStock("");
      setZip("");
    }
  };
  return (
    <div>
      <center>
        <h1>Setting</h1>
        <div className="d-grid gap-2 col-3 mx-auto">
          <Link to="/" className="btn btn-secondary" type="button">
            Home
          </Link>
        </div>
        <div style={{ margin: "3em", width: "50%" }}>
          <form>
            <div className="input-group mb-3">
              <select
                onChange={optionHandler}
                id="tag"
                value={tag}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>--Select--</option>
                <option value="With Tag">With Tag</option>
                <option value="Without Tag">Without Tag</option>
              </select>
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Option
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={priceHandler}
                id="price"
                value={price}
                type="number"
                className="form-control"
                placeholder="Type price..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Default Price
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={stockHandler}
                type="number"
                value={stock}
                id="stock"
                className="form-control"
                placeholder="Type Stock..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Default Stock
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={zipHandler}
                type="number"
                value={zip}
                id="zip"
                className="form-control"
                placeholder="Type Zip..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Default Zip
              </span>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                onClick={addSetting}
                className="btn btn-success"
                type="button"
              >
                ADD SETTING
              </button>
            </div>
          </form>
          {/*Display Table */}
          {item.setting.zip !== undefined ? (
            <table
              style={{ marginTop: "2em" }}
              className="table table-dark table-hover"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Option</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Zip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{item.setting.tag}</td>
                  <td>{item.setting.price}</td>
                  <td>{item.setting.stock}</td>
                  <td>{item.setting.zip}</td>
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      </center>
    </div>
  );
}

export default AddSetting;
