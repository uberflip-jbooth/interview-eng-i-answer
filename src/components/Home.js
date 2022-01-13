import React from 'react';
import ImageCarousel from './ImageCarousel';

export default function Home() {
  return (
    <div>
      <ImageCarousel showThumbs={false} showIndicators={true} />
    </div>
  );
}