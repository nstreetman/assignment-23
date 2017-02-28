import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery"

let appContainerEl = document.querySelector('#app-container')

// $.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
//   console.log(serverRes)
// })
// // console.log ("Howdy!")

const AllLegislatorsPage = React.createClass({
  render: function(){
    return (
          <div>
              <h1>Know Your Legislators</h1>
          </div>
        )
  }
})

  ReactDOM.render(<AllLegislatorsPage/> , appContainerEl)
