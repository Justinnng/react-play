import React from 'react';

export default class CustomNav extends React.Component {
  render() {
    return <nav className="navbar navbar-customize">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React</a>
        </div>


        <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-9" aria-expanded="false" style={{height: 1 +'px'}}>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
    </nav>;
  }
}

