import React, { Component } from "react";
import "./style.css";
import PropTypes from "prop-types";

export default class Cards extends Component {
  render() {
    const { array, addValue, buttonVisiblity } = this.props;
    return (
      <React.Fragment>
        {array.map((jsonForRender, index) => (
          <div className="col mb-2" key={jsonForRender["_id"]}>
            <div className="card">
              <img
                src={jsonForRender.additional_image}
                className="image"
                width="100%"
                height="100%"
              />
              <hr />
              <div className="card-body">
                <div className="card-title ml-0 d-flex align-items-center">
                  <span>
                    <b>Name:</b>{" "}
                  </span>
                  <span className="brandName ft-14">
                    &nbsp;{jsonForRender.description}
                  </span>
                </div>
                <div className="card-title m-0 d-flex align-items-center">
                  <span>
                    <b>Collection:</b>{" "}
                  </span>
                  <span className="brandName ft-14">
                    &nbsp;
                    {jsonForRender.collection
                      ? jsonForRender.collection
                      : jsonForRender.name}
                  </span>
                </div>

                {jsonForRender.category ? (
                  <div>
                    <span>
                      <b>Category:</b>{" "}
                    </span>
                    <span className="brandName ft-14">
                      {jsonForRender.category}
                    </span>
                  </div>
                ) : null}
                {buttonVisiblity ? (
                  jsonForRender.add ? (
                    <div className="icon-wrapper"> 
                      <i
                        className="fa fa-plus"
                        aria-hidden="true"
                        onClick={() => addValue(jsonForRender, index, "add")}
                      ></i>
                    </div>
                  ) : (
                    <div className="icon-wrapper">
                      {" "}
                      <i
                        className="fa fa-minus"
                        aria-hidden="true"
                        onClick={() =>
                          addValue(jsonForRender, index, "subtract")
                        }
                      ></i>
                    </div>
                  )
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

Cards.defaultProps = {
  addValue: () => {},
  array: [],
  buttonVisiblity: true,
};
Cards.propTypes = {
  addValue: PropTypes.func,
  array: PropTypes.array,
  buttonVisiblity: PropTypes.bool,
};
