import { FETCH_ALL } from "../actions/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
