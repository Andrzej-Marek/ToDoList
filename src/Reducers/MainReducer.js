let initState = {
  toDos: [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      id: 3,
      title: "fugiat veniam minusssss",
      completed: false
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true
    }
  ],
  done: 0,
  notDone: 0,
  newTitle: "",
  borderColor: "",
  editValue: ""
};

const MainReducer = (state = initState, action) => {
  if (action.type === "DELETE_TODO_DONE") {
    let newPosts = state.toDos.filter(item => item.id !== action.id);
    let newDone = state.done + 1;
    return {
      ...state,
      toDos: newPosts,
      done: newDone
    };
  }
  if (action.type === "DELETE_TODO_NOTDONE") {
    let newPosts = state.toDos.filter(item => item.id !== action.id);
    let newNotDone = state.notDone + 1;
    return {
      ...state,
      toDos: newPosts,
      notDone: newNotDone
    };
  }
  if (action.type === "ON_CHANGE") {
    let name = action.e.target.name;
    let value = action.e.target.value;
    return {
      ...state,
      [name]: value
    };
  }
  if (action.type === "ON_SUBMIT") {
    action.e.preventDefault();
    if (state.newToDo || state.newTitle !== "") {
      let lastId = state.toDos.length + 1;
      const Items = { id: lastId, title: state.newTitle };
      let newArray = state.toDos.concat(Items);
      return {
        ...state,
        toDos: newArray,
        newTitle: "",
        borderColor: ""
      };
    } else {
      return {
        ...state,
        borderColor: "red"
      };
    }
  }
  if (action.type === "DELETE_TODO") {
    let newState = state.toDos.filter(el => el.id !== action.id);
    console.log(action.id);
    return {
      ...state,
      toDos: newState
    };
  }
  if (action.type === "INPUT_CHANGE") {
    let value = action.e.target.value;
    return {
      ...state,
      editValue: value
    };
  }
  if (action.type === "FORM_SUBMIT") {
    let toDo = state.toDos.filter(el => el.id !== action.id);
    let Items = { id: action.id, title: state.editValue, completed: false };
    let newArray = toDo.concat(Items);
    return {
      ...state,
      toDos: newArray
    };
  }

  return state;
};

export default MainReducer;
