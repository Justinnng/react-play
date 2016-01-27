import '../scss/components/_head-kv.scss'
import React from 'react';

export default class HeadKv extends React.Component {

  static defaultProps = {height: document.documentElement.clientHeight - 120};


  render() {
    return <div className="cover" style={{height: this.props.height + "px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <h1>Welcome!!!</h1>
            <p>Be yourself</p>
          </div>
        </div>
      </div>
    </div>;
  }
}