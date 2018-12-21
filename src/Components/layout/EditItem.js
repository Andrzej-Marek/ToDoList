import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class EditItem extends Component {
  onDelete = () => {
    this.props.deleteToDo(this.props.toDo.id);
    this.props.history.push("/");
  };

  onSubmitEdit = e => {
    e.preventDefault();
    this.props.onSubmit(this.props.toDo.id);
  };

  onChange = e => {
    this.props.onChange(e);
  };

  render() {
    const toDo = this.props.toDo ? (
      <div>
        <div className="card mt-4">
          <div className="card-header text-center font-weight-bold">
            {this.props.toDo.title.toUpperCase()} #{this.props.toDo.id}
            {/* ICON  */}
            <i
              className="fas fa-pen ml-3"
              style={{ cursor: "pointer" }}
              data-toggle="collapse"
              href="#collapseExample"
            />
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <form onSubmit={this.onSubmitEdit}>
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.editValue}
                    onChange={this.onChange}
                  />

                  <button className="btn btn-success mt-2 px-4">Edit</button>
                </form>
              </div>
            </div>
          </div>

          <div className="card-body">
            <p className="card-text text-center">Description</p>
            <button
              className="mx-auto btn btn-danger btn-group d-flex "
              onClick={this.onDelete}
            >
              Delete
            </button>
          </div>
        </div>
        <Link to="/">
          <div className="text-center mt-3">
            <i
              className="fas fa-angle-double-left"
              style={{ fontSize: "20px" }}
            >
              Back
            </i>
          </div>
        </Link>
      </div>
    ) : (
      <div>Loading post...</div>
    );
    return <div>{toDo}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    state: state.main.toDos,
    toDo: state.main.toDos.find(el => el.id == id),
    editValue: state.main.editValue
  };
};

const mapDispachToProps = dispatch => {
  return {
    deleteToDo: id => dispatch({ type: "DELETE_TODO", id: id }),
    onChange: e => dispatch({ type: "INPUT_CHANGE", e: e }),
    onSubmit: id => dispatch({ type: "FORM_SUBMIT", id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(EditItem);
