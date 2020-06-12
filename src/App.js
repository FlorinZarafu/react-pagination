import React from "react";
import axios from "axios";
import "./App.css";
import Post from "./Post";
import Pagination from "./Pagination";

class App extends React.Component {
  state = {
    posts: [],
    loading: true,
    currentPage: 1,
    postPerPage: 10,
  };
  componentDidMount() {
    const fetchPosts = async () => {
      const res = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.data);

      const { currentPage, postPerPage } = this.state;
      const indexOfLastPost = currentPage * postPerPage;
      const indexOfFirstPost = indexOfLastPost - postPerPage;

      this.setState({
        curPosts: res.slice(indexOfFirstPost, indexOfLastPost),
        loading: false,
        posts: res,
      });
    };
    fetchPosts();
  }

  paginate = (pageNumber) => {
    this.setState(
      {
        currentPage: pageNumber,
      },
      () => {
        console.log(this.state.currentPage);
      }
    );
  };

  render() {
    const { posts, loading } = this.state;
    return (
      <div className="App">
        <h1>List of Posts</h1>
        <Post posts={posts} loading={loading} />
        <Pagination
          postsPerPage={this.state.postPerPage}
          totalPosts={posts.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default App;
