import React from 'react';
import ImageCarousel from './ImageCarousel';

import '../less/home.less';

export default function Home() {
  return (
    <div id='home'>
      <ImageCarousel showThumbs={false} showIndicators={true} />
    </div>
  );
}