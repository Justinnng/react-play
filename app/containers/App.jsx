import React, { PropTypes } from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/HeadKv.jsx';
import Nav from '../components/Navbar.jsx';
import '../scss/main.scss';

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
