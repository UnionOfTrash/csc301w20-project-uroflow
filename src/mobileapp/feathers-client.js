import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
const auth = require('@feathersjs/authentication-client')
import { AsyncStorage } from 'react-native'

const socket = io('http://192.168.1.20:3010', { // Change to API_BASE_URL
  transports: ['websocket'],
  forceNew: true
})

const app = feathers();

app.configure(socketio(socket));
app.configure(auth({
  storage: AsyncStorage,
  storageKey: 'auth'
}));

export default app;
