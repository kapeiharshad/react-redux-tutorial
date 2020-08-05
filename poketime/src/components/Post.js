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
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    console.log(" this.props.post::", this.props);
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
      return post.id === id;
    })
  };
};
console.log("mapStateToProps::", mapStateToProps);

export default connect(mapStateToProps)(Post);
