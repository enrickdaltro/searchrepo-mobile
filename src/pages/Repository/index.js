import React from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native-webview';
// import { Container } from './styles';

export default function Repository({navigation}) {
  const repos = navigation.getParam('repository');

  return <WebView source={{uri: repos.html_url}} style={{flex: 1}} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('repository').name,
});
