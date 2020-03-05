import { Platform } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL:
    Platform.OS === 'ios'
      ? 'http://localhost:3000'
      : 'http://192.168.15.5:3000',
});

export default api;
