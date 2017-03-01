import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery"


let appContainerEl = document.querySelector('#app-container')


$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
  console.log(serverRes)
})


// const IteratedLegislatorObj = React.createClass({
//   _createLegislatorJSX: function(serverRes) {
//     let jsxLegislatorObj = serverRes.map(function(legislatorObj){
//       return jsxLegislatorObj
//     })
//   }
// )}
// forEach (LegislatorObjectsList, function(legislatorObj) {
// console.log(legislatorObj)
//   })
//   })
//
// // const IteratedLegislatorObj = React.createClass({
// //   forEach (LegislatorObjectsList, function(legislatorObj) {
// //     console.log(legislatorObj)
// //   })  })
//
const AllLegislatorsPage = React.createClass({
  render: function(){
    return (
          <div>
                <div>
                  <h1>Know Your Legislators</h1>
                </div>
                <div><p>dammit</p></div>
              

          </div>
        )
  }
})



  ReactDOM.render ( <AllLegislatorsPage/> , appContainerEl )
