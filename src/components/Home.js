import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import HomeSlider from './HomeSlider';
import axios from 'axios'; 

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      posts: [],
      errormsg: ''
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response);
      this.setState({posts: response.data})
    })
    .catch(error => {
      console.log(error);
      this.setState({errormsg: 'Error retriving the data !'})
    })
  }
  
  render() {
    const { posts, errormsg } = this.state
    return (
      <div className = "Home-main">
        {/* <HomeSlider/> */}
        <h1>Post from API</h1>
        {
          posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>): null
        }
        {
          errormsg ? <div>{ errormsg }</div> : null
        }
        <Link to='/contactus'>Contact Us</Link>
      </div>
    )
  }
}

export default Home;
