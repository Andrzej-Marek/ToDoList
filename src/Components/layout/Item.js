import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Item = ({ el, onClickNotDone, onClickDone }) => {
  return (
    <div className="card text-center mb-4">
      <div className="card-header font-weight-bold">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">{el.title.toUpperCase()}</div>
          <div className="col-md-2">
            {" "}
            <Link to={`/${el.id}`}>Edit</Link>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-success btn-block "
        onClick={() => onClickDone(el.id)}
      >
        Done
      </button>
      <button
        className="btn btn-danger btn-block"
        onClick={() => onClickNotDone(el.id)}
      >
        Not Done
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toDos: state.toDos
  };
};

export default connect(mapStateToProps)(Item);
