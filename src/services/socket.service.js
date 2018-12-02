import io from 'socket.io-client';
import socketConfig from '../config/socket.json';

const socket = io(socketConfig.path);

const socketService = {
	listenSocket : (cbs) => {
		socket.on('top', (data) => {
	        cbs.top(data);
	    });
		socket.on('middle', (data) => {
	        cbs.middle(data);
	    });
		socket.on('bottom', (data) => {
	        cbs.bottom(data);
	    });
	}
}

export default socketService;