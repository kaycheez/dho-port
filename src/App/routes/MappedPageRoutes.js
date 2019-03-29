import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CarouselBackground from "../Components/Carousel/CarouselBackground";
import Gallery from "../Components/Gallery/Gallery";
import config from '../assets/config';
import AWS from 'aws-sdk';

const mappedPageRoutes = (props) => {

  let title;
  let currentPage = window.location.href;
  let amazonUrl = 'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/';
  let path = currentPage.substring(22, currentPage.length);
  const mappedImages = [];

  const retrieveImages = async (path) => {

    try {

      AWS.config.update({
        accessKeyId: config.access,
        secretAccessKey: config.secret,
        region: 'us-west-1'
      })

      const s3 = new AWS.S3();
      const response = await s3.listObjectsV2({
        Bucket: 'visualsbydavidhophotos',
        Prefix: path,
      }).promise();

      for (let i = 1; i <= response.Contents.length; i++) {
        mappedImages.push({image: amazonUrl + response.Contents[i].Key})
      }

    } catch(e) {
      console.log('Error', e)
    }
  };

  ((currPage) => {
    retrieveImages(path);
    title = path.substring(0, 1).toUpperCase() + path.substring(1, path.length);
  })();

  console.log('hello', mappedImages);

  return (
    <Switch>
        <Route
          exact
          path={`/`}
          render={() => <CarouselBackground sidebar={props.sidebar}/>}
        />
        <Route
          path={`/${path}`}
          render={(properties) => <Gallery {...properties} mappedImages={mappedImages} title={title} />}
        />
    </Switch>
  )
}

export default mappedPageRoutes;