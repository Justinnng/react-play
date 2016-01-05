import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import CustomNav from './navbar.jsx';
import HeadKv from './head-kv/head-kv.jsx';
import './custom.scss'
main();




function main() {
  class AppComponent extends React.Component{
    render(){
      return <div>
        <HeadKv />
        <CustomNav />
      </div>
    }
  }
  ReactDOM.render(<AppComponent />, document.getElementById('blog'));
}