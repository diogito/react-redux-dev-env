import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logoReact from '../images/logo-react.svg';
import logoRedux from '../images/logo-redux.svg';

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  LOAD_STACK
} from '../constants/actionTypes';

export class Home extends Component {
  stackRow(stackComponent, index) {
    return <div key={index}>{stackComponent.name}</div>;
  }

  UNSAFE_componentWillMount() {
    this.props.onLoad();
    this.props.loadStack();
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const { stack } = this.props;
    return (
      <div>
        <h1 className="cover-heading">React Redux Development Environment</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logoReact} className='App-logo' alt='logo-react' />
            </div>
            <div className="col">
              <img src={logoRedux} className='App-logo' alt='logo-redux' />
            </div>
          </div>
        </div>
        <div>
          { stack && stack.length ?
            <div>{stack.map(this.stackRow)} </div>:
            <div>Loading...</div>
          }
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  stack: PropTypes.array,
  onLoad: PropTypes.func,
  onUnload: PropTypes.func,
  loadStack: PropTypes.func
}

function mapStateToProps({stack}) {
  return {
    stack
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({type: HOME_PAGE_LOADED}),
  onUnload: () =>
    dispatch({type: HOME_PAGE_UNLOADED}),
  loadStack: () =>
    dispatch({type: LOAD_STACK})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
