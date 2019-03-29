import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CarouselBackground from "../Components/Carousel/CarouselBackground";
import Gallery from "../Components/Gallery/Gallery";
import config from '../assets/config';
import AWS from 'aws-sdk';


const mappedPageRoutes = (props) => {

  let title;
  let currentPage = window.location.href;
  let path = currentPage.substring(22, currentPage.length);
  const [imageLength, setImageLength] = useState();

  const retrieveImages = async (path) => {

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
    const length = response.Contents.length;
    setImageLength(length - 1);
  };

  ((currPage) => {
    retrieveImages(path);
    title = path.substring(0, 1).toUpperCase() + path.substring(1, path.length);
  })();

  return (
    <Switch>
        <Route
          exact
          path={`/`}
          render={() => <CarouselBackground sidebar={props.sidebar}/>}
        />
        <Route
          path={`/${path}`}
          render={(properties) => <Gallery mappedImages={properties} title={title} imageLength={imageLength}/>}
        />
    </Switch>
  )
}

export default mappedPageRoutes;