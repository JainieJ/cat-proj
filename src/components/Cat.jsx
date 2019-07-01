import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cat.css";

class Cat extends Component {
  state = {};
  render() {
    const cat = this.props.cats.find(
      cat => cat.name === this.props.match.params.name
    );
    const facts = cat.facts.map((fact, idx) => {
      return (
        <li className="list-group-item" key={idx}>
          {fact}
        </li>
      );
    });
    return (
      <section className="Cat">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto my-3 col-lg-6">
              <div className="Cat-card card">
                <img
                  src={cat.src}
                  alt={`cat ${cat.name}`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{cat.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{`${
                    cat.age
                  } years old`}</h6>
                </div>
                <ul className="list-group list-group-flush">{facts}</ul>
                <div className="card-body">
                  <Link to="/cats" className="btn btn-primary">
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cat;
