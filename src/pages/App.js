import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { APP_LOAD } from '../constants/actionTypes';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';

class App extends React.Component {

  stackRow(stackComponent, index) {
    return <div key={index}>{stackComponent.name}</div>
  }

  UNSAFE_componentWillMount() {
    document.getElementById('root').className = ['text-center', styles.appContainer].join(' ');
    this.props.onLoad();
  }

  render() {
    return (
      <div className={[styles.contentContainer, 'd-flex w-100 h-100 p-3 mx-auto flex-column'].join(' ')}>
        <Header />
        <main role="main" className={['inner', styles.cover].join(' ')}>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  onLoad: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: APP_LOAD })
})

export default connect(null, mapDispatchToProps)(App);
