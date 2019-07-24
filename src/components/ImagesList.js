import React from 'react';
import { FlatList } from 'react-native';

import ImagesItemView from './ImagesItemView';

const ImagesList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => <ImagesItemView src={item.webformatURL} />}
  />
);

export default ImagesList;
