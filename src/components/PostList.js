import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

renderList() {
  console.log( this.props)
  if(this.props.post.data){
    return this.props.post.data.map( post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{ post.body}</p>
            </div>
         <UserHeader userId={post.userId}/>
          </div>
        </div>
      );
    });
  }
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }

}

const mapStateToProps = (state) => {
  // console.log(state)
 return { post: state.post };
}

export default connect(
mapStateToProps, { fetchPosts } 
)(PostList);