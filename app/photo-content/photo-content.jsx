import './photo-content.scss'
import React from 'react';

export default class PhotoContent extends React.Component {

  render() {
    return <div className="container">
      <div className="row waterfall-wrap">
        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_01.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_04.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_03.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_05.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_09.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_06.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_11.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_08.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 photo-wrap">
          <img src={require("../images/blog_10.jpg")} />
          <div className="col-xs-12">
            <h4><a href="#">we're not speaking</a></h4>
            <p>How'd we end up this way? Why are we pretending this is nothing? Looks a lot like a tragedy now </p>
            <a href="#" className="readmore"> > Read More</a>
          </div>
        </div>
      </div>
    </div>;
  }
}