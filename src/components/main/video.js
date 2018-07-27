import React, { Component } from 'react';
import css from './main.scss'
import { zoomInDown, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import logo from "../../video/REVES_TECHNOLOGIES.png";
import movie from "../../video/film.mp4";
import code from '../../video/code.png';

const styles = {
  zoomInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  },
  fadeIn: {
    animation: 'x 7.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
}

class Video extends Component {
  render() {
    return (
      <div style={{position:'fixed',width:'100%'}}>
        <div className={css.videoDiv} style={{ backgroundImage: `url(${code})`, backgroundSize: 'cover', position: 'relative',display:'flex',justifyContent:'center',alignItems:'center' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,53,113,0.20)' }}></div>
          <video className={css.videoHome} style={{ marginBottom: '-6px' }} autoPlay loop src={movie}>
          </video>
          <div className={css.homeDiv}>
            <StyleRoot>
              <img src={logo} className={css.logoo} style={styles.fadeIn} />
              <h1 className={css.welcome} style={styles.zoomInDown}>WELCOME TO <span>REVES</span></h1>
            </StyleRoot>
            <p><i>Creativity is intelligence having fun</i></p>
          </div>
        </div>
      </div>
    )
  }
}
export default Video;