import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery"


let appContainerEl = document.querySelector('#app-container')

const AllLegislatorsPage = React.createClass({
  render: function(){
    return (
          <div>
                <div><h1>Know Your Legislators</h1></div>
                <LegislatorObjectsList legislatorInfoList={this.props.legislatorInfoForAll.results}/>
          </div>
        )
  }
})

const LegislatorObjectsList = React.createClass({
    _createLegislatorJSX: function(arrayOfLegislators){
      console.log(arrayOfLegislators)
      let jsxLegislatorObj = arrayOfLegislators.map(function(legislatorObj){

        return <div className="individual-block">

                  <p className="heading-name">{legislatorObj.first_name}  {legislatorObj.last_name} </p>
                  <p className="heading-title">{legislatorObj.title}--{legislatorObj.party}-{legislatorObj.state_name}  </p>
                  <ul>
                  <li> email: {legislatorObj.oc_email}</li>
                  <li> website: {legislatorObj.website}</li>
                  <li> facebook: {legislatorObj.facebook_id}</li>
                  <li> twitter: {legislatorObj.twitter_id}</li>
                  </ul>
                  <p className="footer-term-end">Term Ends: {legislatorObj.term_end}</p>
              </div>
      })
        return jsxLegislatorObj
    },

    render: function(){
      let legislatorInfoList = this.props.legislatorInfoList;
      console.log(legislatorInfoList)
      return (
        <div>
          { this._createLegislatorJSX(legislatorInfoList)  }
        </div>
      )
    }
})

$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
  console.log(serverRes)
  ReactDOM.render(  <AllLegislatorsPage legislatorInfoForAll={serverRes}/> ,
    document.querySelector('#app-container'));
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


  // ReactDOM.render ( <AllLegislatorsPage/> , appContainerEl )
