import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    // Make an ajax request //
    const data = await axios.get("/api/posts");
    this.setState({ posts: data.data });
  }

  render() {
    const allPosts = this.state.posts || [];
    console.log(allPosts, "XXXX it hits here");
    return (
      <div className="wrapper-div">
        {this.state.posts.map((el) => {
          return (
            <div key={el.id} className="post-card">
              <h3 className="post-padding">Title: {el.title}</h3>
              <p className="post-padding">Content: {el.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
