import { Platform } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL:
    Platform.OS === 'ios'
      ? 'http://localhost:3000'
      : 'https://my-json-server.typicode.com/adamdias/test-serasa',
});

export default api;
