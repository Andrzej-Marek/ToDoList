import React, { Component } from "react";
import Input from "./Input";
import Item from "./Item";
import GoodJob from "./GoodJob";
import { connect } from "react-redux";

class Items extends Component {
  state = {
    borderColor: ""
  };

  render() {
    //@ Shorts
    const {
      toDos,
      done,
      notDone,
      onChange,
      onSubmit,
      borderColor
    } = this.props;

    let Statistics = (
      <div style={{ textAlign: "center" }}>
        <br />
        {`Done: ${done} Not Done: ${notDone}`}
      </div>
    );

    let doneAll = (
      <div className="container text-center">
        {toDos && toDos.length === 0 && done + notDone === done && (
          <div>
            <h1>You done everythink !</h1>
            <GoodJob />
          </div>
        )}
      </div>
    );

    return (
      <div className="container">
        <h3 className="text-center">
          {toDos && toDos.length === 0
            ? "NOTHING TO DO LEFT"
            : `What you have to do today ? Left: ${toDos.length}`}
        </h3>
        <Input onChange={onChange} onSubmit={onSubmit} />

        {Statistics}
        {doneAll}
        {toDos &&
          toDos.map(el => (
            <Item
              el={el}
              onClickNotDone={this.props.deleteToDoNotDone}
              onClickDone={this.props.deleteToDoDone}
              key={el.id}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDos: state.main.toDos,
    done: state.main.done,
    notDone: state.main.notDone,
    borderColor: state.main.borderColor
  };
};

const mapDispachToProps = dispach => {
  return {
    deleteToDoDone: id => {
      dispach({ type: "DELETE_TODO_DONE", id: id });
    },
    deleteToDoNotDone: id => {
      dispach({ type: "DELETE_TODO_NOTDONE", id: id });
    },
    onChange: e => {
      dispach({ type: "ON_CHANGE", e: e });
    },
    onSubmit: e => {
      dispach({ type: "ON_SUBMIT", e: e });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Items);
