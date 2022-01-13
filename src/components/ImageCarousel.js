import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ImageCarousel extends React.Component {

  // Add a constructor class to handle props and state
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  // When the component mounts execute the API call.
  componentDidMount() {
    this.loadImages();
  }

  // Load the images and update the state
  async loadImages() {
    const url = 'https://apodapi.herokuapp.com/search/?search_query=pluto&number=5';
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Cannot get images from ${url}`);
    }

    const images = [];
    for (let entry of response.data) {
      images.push({
        url: entry.url
      });
    }

    this.setState({images});
  }

  // Render the component. Before the component's state has any images
  // loaded, render the LoadingSpinner component instead.
  render() {
    return <Carousel showThumbs={false} showIndicators={false}>
      {
        this.state.images.map((image, i) => {
          return (
            <div key={'image-carousel-' + i}>
              <img src={image.url} alt={image.url} />
            </div>
          );
        })
      }
    </Carousel>;
  }
} 