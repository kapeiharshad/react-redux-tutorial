const initState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat ",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit"
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
