import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  render() {
    return (
      <div>
        Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = {state} => {
  return {
    count: state.count
  };
};

export default App;
