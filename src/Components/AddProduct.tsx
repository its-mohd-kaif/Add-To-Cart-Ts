import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productContext, settingContext } from "../App";
import useSetting from "./customHook";
// Define Type
type AddType = {
  name: string,
  desc: string,
  price: string,
  tag: string,
  stock: string
}
function AddProduct() {
  // UseContext For Product Array
  let item: any = useContext(productContext);
  // UseContext For Setting Object
  let setting: any = useContext(settingContext);
  // UseState For Input Field
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  // UseCustom Hook
  const { settingWithoutTag, settingWithTag }: any = useSetting()
  // Name Input Box
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // Description Input Box
  const descHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  // Price Input Box
  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  // Tag Input Box
  const tagHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  // Stock Input Box
  const stockHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.value);
  };
  // Add To Cart
  const addProduct = () => {
    // Check Validation
    if (name === "") {
      alert("Name Field Can Not Be Empty");
      document.getElementById("name")?.focus();
    } else if (desc === "") {
      alert("Description Field Can Not Be Empty");
      document.getElementById("desc")?.focus();
    } else if (setting.setting.zip !== undefined && price === "" && stock === "") {
      if (setting.setting.tag === "Without Tag") {
        // Call Custom Hook
        settingWithoutTag(name, desc, setting.setting.price, tag, setting.setting.stock)
        clearInput()
      } else if (setting.setting.tag === "With Tag") {
        // Call Custom Hook
        settingWithTag(name, desc, setting.setting.price, tag, setting.setting.stock)
        clearInput()
      }
    } else if (setting.setting.zip !== undefined && price !== "" && stock === "") {
      if (setting.setting.tag === "Without Tag") {
        // Call Custom Hook
        settingWithoutTag(name, desc, price, tag, setting.setting.stock)
        clearInput()
      }
      else if (setting.setting.tag === "With Tag") {
        // Call Custom Hook
        settingWithTag(name, desc, price, tag, setting.setting.stock)
        clearInput()
      }
    }
    else if (setting.setting.zip !== undefined && price === "" && stock !== "") {
      if (setting.setting.tag === "Without Tag") {
        // Call Custom Hook
        settingWithoutTag(name, desc, setting.setting.price, tag, stock)
        clearInput()
      } else if (setting.setting.tag === "With Tag") {
        // Call Custom Hook
        settingWithTag(name, desc, setting.setting.price, tag, stock)
        clearInput()
      }
    }
    else {
      let obj = {
        name: name,
        desc: desc,
        price: price,
        tag: tag,
        stock: stock,
      };
      item.setProduct([...item.product, obj]);
      clearInput()
    }
  };
  // Function For Clear Input Fields
  function clearInput() {
    setName("");
    setDesc("");
    setPrice("");
    setTag("");
    setStock("");
  }
  return (
    <div>
      <center>
        <h1>Add Product</h1>
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
                placeholder="Type Product Name..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Product Name
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={descHandler}
                id="desc"
                value={desc}
                type="text"
                className="form-control"
                placeholder="Type Description..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Description
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={priceHandler}
                type="number"
                value={price}
                className="form-control"
                placeholder="Type Price..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Price
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={tagHandler}
                type="text"
                value={tag}
                id="tag"
                className="form-control"
                placeholder="Type Tag..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                style={{ backgroundColor: "#274ae5", color: "white" }}
                className="input-group-text"
                id="basic-addon2"
              >
                Tag
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                onChange={stockHandler}
                type="number"
                value={stock}
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
                Stock
              </span>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                onClick={addProduct}
                className="btn btn-success"
                type="button"
              >
                ADD PRODUCT
              </button>
            </div>
          </form>
          {/*Display Table */}
          {item.product.length !== 0 ? (
            <table
              style={{ marginTop: "2em" }}
              className="table table-dark table-hover"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Tag</th>
                  <th scope="col">Stock</th>
                </tr>
              </thead>
              <tbody>
                {item.product.map((val: AddType, index: number) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.desc}</td>
                    <td>{val.price}</td>
                    <td>{val.tag}</td>
                    <td>{val.stock}</td>
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

export default AddProduct;
