import React from 'react';
import {WebView} from 'react-native-webview';
// import { Container } from './styles';

export default function Repo() {
  return <WebView source={{uri: repository.html_url}} style={{flex: 1}} />;
}
