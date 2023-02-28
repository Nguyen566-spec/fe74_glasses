import React, { Component } from "react";
import Glass from "./glassesImage/model.jpg";
import Glass1 from "./glassesImage/v1.png";
import Glass2 from "./glassesImage/v2.png";
import Glass3 from "./glassesImage/v3.png";
import Glass4 from "./glassesImage/v4.png";
import Glass5 from "./glassesImage/v5.png";
import Glass6 from "./glassesImage/v6.png";
import Glass7 from "./glassesImage/v7.png";
import Glass8 from "./glassesImage/v8.png";
import Glass9 from "./glassesImage/v9.png";

export default class Glasses extends Component {
  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: Glass1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: Glass2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: Glass3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: Glass4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: Glass5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: Glass6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: Glass7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: Glass8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: Glass9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  getGlass = (id) => {
    return this.glasses.find((item) => item.id === id);
  };
  renderGlass = () => {
    const glassUI = this.glasses.map((glass) => {
      return (
        <div key={glass.id} className="col-2">
          <button onClick={() => this.changeGlass(glass.id)}>
            <img src={glass.url} className="card-img" alt="..." />
          </button>
        </div>
      );
    });
    return glassUI;
  };
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: Glass1,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  changeGlass = (id) => {
    const glass = this.getGlass(id);
    this.setState({
      id: id,
      price: glass.price,
      name: glass.name,
      url: glass.url,
      desc: glass.desc,
    });
  };
  render() {
    return (
      <>
        <h1 className="bg-dark opacity-50 text-white py-5">TRY GLASSES APP ONLINE</h1>
        <div className="container">
          <div className="d-flex justify-content-around my-5">
            <div className="card border-0">
              <img src={Glass} className="card-img" alt="..." />
              <div
                className="card-img-overlay bg-warning opacity-50 text-start"
                style={{ top: "auto", bottom: 0, height: "30%" }}
              >
                <h1 className="card-title text-primary">{this.state.name}</h1>
                <h6 className="card-text">${this.state.price}</h6>
                <p className="card-text text-white">{this.state.desc}</p>
              </div>
              <div className="card-img-overlay" style={{ top: 130 }}>
                <img
                  src={this.state.url}
                  className="opacity-50"
                  width="60%"
                  alt="..."
                />
              </div>
            </div>
            <img src={Glass} alt="" />
          </div>
          <div className="row bg-white p-5">{this.renderGlass()}</div>
        </div>
      </>
    );
  }
}
