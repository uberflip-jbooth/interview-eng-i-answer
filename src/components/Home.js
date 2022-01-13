import React from 'react';
import ImageCarousel from './ImageCarousel';

import '../less/home.less';

export default function Home() {
  return (
    <div id='home'>
      <div className='carousel-wrapper'>
        <ImageCarousel showThumbs={false} showIndicators={true} />
      </div>
    </div>
  );
}