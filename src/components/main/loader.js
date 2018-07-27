import React, { Component } from 'react';
import css from './main.scss'
// import { Loader } from 'semantic-ui-react';
// import Loader from 'react-loaders';
import { BubbleLoader } from 'react-css-loaders';


class LoaderCom extends Component {

  render(){
    return(
      <div>
        <div style={{height:'100vh',background:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
          {/* <Loader size='huge' active inline='centered' /> */}
          {/* <Loader type="ball-rotate" active={true} /> */}
          <BubbleLoader size={7} style={{color: '#003571'}} />
        </div>
      </div>
    )
    
  }
}
export default LoaderCom;