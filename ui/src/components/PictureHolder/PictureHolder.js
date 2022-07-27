import React, { Component } from 'react';
import './PictureHolder.css';

import cats from '../../../static/cats.jpg'
import himars from '../../../static/himars.jpg'
import gerasim from '../../../static/gerasim.jpg'
import jinka from '../../../static/jinka.jpg'
import karenina from '../../../static/karenina.jpg'
import bavovna from '../../../static/bavovna.jpg'
import vidbiy from '../../../static/vidbiy.jpg'
import years from '../../../static/years.jpg'


class PictureHolder extends Component {
  render() {
    return (
      <div className='pictureHolder'>
        <div className='pictureContainer'>
          <img src={cats} alt='cats'></img>
        </div>
        <div className='pictureContainer'>
          <img src={himars} alt='himars'></img>
        </div>
        <div className='pictureContainer'>
          <img src={gerasim} alt='gerasim'></img>
        </div>
        <div className='pictureContainer'>
          <img src={jinka} alt='jinka'></img>
        </div>
        <div className='pictureContainer'>
          <img src={karenina} alt='karenina'></img>
        </div>
        <div className='pictureContainer'>
          <img src={bavovna} alt='bavovna'></img>
        </div>
        <div className='pictureContainer'>
          <img src={vidbiy} alt='vidbiy'></img>
        </div>
        <div className='pictureContainer'>
          <img src={years} alt='years'></img>
        </div>
      </div>
    );
  }
}

export default PictureHolder;
