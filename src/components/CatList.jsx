import React, { Component } from "react";
import uuid from "uuid";
import { Link } from "react-router-dom";
import "./CatList.css";

class CatList extends Component {
  state = {};
  render() {
    const cats = this.props.cats.map(cat => (
      <div
        key={uuid()}
        className="col-10 mx-auto col-md-4 my-3 mx-3 text-center"
      >
        <div className="Catlist-img-container">
          <img
            src={cat.src}
            alt={`cat ${cat.name}`}
            className="img-fluid rounded-circle"
          />
        </div>
        <Link to={`/cats/${cat.name}`} className="Catlist-cat">
          {cat.name}
        </Link>
      </div>
    ));
    return (
      <section className="CatList">
        <div className="container py-3">
          <div className="row">
            <div className="col-10 mx-auto col-md-4 my-3 text-center CatList-title">
              Cat List
            </div>
          </div>
          <div className="row">{cats}</div>
        </div>
      </section>
    );
  }
}

export default CatList;
