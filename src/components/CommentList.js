import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }





  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

//when we pull comments prpoperty from state object we are
//specifically saying state.comments because back in reducer
//index.js file we had assigned comments reducer to comments property

//line 27 shows up as props to this component which is why we can refrence this.props.comments on line 6

export default connect(mapStateToProps)(CommentList);
