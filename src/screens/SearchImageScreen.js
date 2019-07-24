import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

import { ImagesList } from '../components';

import URL from '../utiilites/api/apiConfig';

export default class SearchImageScreen extends Component {
  state = {
    text: 'Enter the DOG or etc...',
    find: false,
    isDataLoaded: false,
    data: [],
  };

  fetchImage = async () => {
    const { text } = this.state;

    this.setState({ isDataLoaded: false });

    try {
      const { data: { hits } } = await axios.get(URL(text));
      this.setState({ data: hits, isDataLoaded: true });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    const { text, find, data, isDataLoaded } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          onFocus={() => this.setState({ find: false, text: '' })}
          onBlur={() => {
            this.fetchImage();
            this.setState({ find: true });
          }}
          value={text}
        />
        {find && isDataLoaded ? <ImagesList data={data} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  }
});
