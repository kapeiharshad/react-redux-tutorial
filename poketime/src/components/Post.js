import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";

class Post extends Component {
  // state = {
  //   id: null
  // };
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //     .then((res) => {
  //       this.setState({
  //         post: res.data
  //       });
  //     });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
  };

  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <button className="btn grey" onClick={this.handleClick}>
          Delete Post
        </button>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => {
      return post.id === parseInt(id);
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
