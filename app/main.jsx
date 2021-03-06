import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import routes from './routes.jsx';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), document.getElementById('blog'));


/*function main() {


 class AppComponent extends React.Component{
 render(){
 return <div>
 <HeadKv />
 <CustomNav />
 <PhotoContent />
 <Footer />
 </div>
 }
 }
 ReactDOM.render(<AppComponent />, document.getElementById('blog'));
 }*/


window.onload = function(){
  waterFall($('.waterfall-wrap'));
};



function waterFall(box){
  if(box){
    var $box = box;
    var $boxItem = $box.find('.photo-wrap');
    var w=$boxItem.eq(0).outerWidth();
    var cols=parseInt($box.outerWidth()/w);
    var hArr = [];
    $boxItem.each(function(index, value) {
      var h=$boxItem.eq(index).outerHeight();
      if(index<cols){
        hArr[index]=h;
        $(value).css({
          'position':'relative',
          'top':'0',
          'left':'0'
        });
      }else{
        var minH=Math.min.apply(null,hArr);//JQde方法 找数组最小值
        var minHIndex = $.inArray(minH,hArr);//找数组中 值是这个的索引
        $(value).css({
          'position':'absolute',
          'top':minH+'px',
          'left':minHIndex*w+'px'
        });
        hArr[minHIndex]+=$boxItem.eq(index).outerHeight();

      }
    });

    //set box height
    $box.css({
      'height':Math.max.apply(null,hArr)+'px'
    })
  }

}