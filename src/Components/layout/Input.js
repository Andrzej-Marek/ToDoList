import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Add something to do</label>
            <input
              type="text"
              name="newTitle"
              value={this.props.newTitle}
              onChange={onChange}
              className="form-control"
              style={{ borderColor: [this.props.borderColor] }}
            />
            <small className="form-text text-muted">
              New to do will show up on your list
            </small>
          </div>

          <button className="btn btn-primary btn-block mb-5">
            Add new to do
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newTitle: state.newTitle,
    borderColor: state.borderColor
  };
};
export default connect(mapStateToProps)(Input);

//@todo
// Dodawanie tytulu
