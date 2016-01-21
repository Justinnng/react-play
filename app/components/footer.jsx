import './../scss/components/_footer.scss'
import React from 'react';

export default class Footer extends React.Component {

  render() {
    return <footer>
      <div className="container text-center">
        <a className="social-icon" href="#"><i className="iconfont">&#xe610;</i></a>
        <a className="social-icon" href="#"><i className="iconfont">&#xe809;</i></a>
        <a className="social-icon" href="#"><i className="iconfont">&#xe61d;</i></a>
        <a className="social-icon" href="#"><i className="iconfont">&#xe772;</i></a>
        <a className="social-icon" href="#"><i className="iconfont">&#xe735;</i></a>
        <p>Copyright © 2016 Justin</p>
      </div>
    </footer>;
  }
}