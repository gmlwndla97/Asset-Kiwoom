
export default function Socket(url, callback) {
    let socket = new WebSocket('ws://127.0.0.1:8000/ws/' + url + '/');

    socket.onopen = () => {
        socket.send(JSON.stringify({
            'message': "소켓 연결"
        }));
    }

    socket.onmessage = (e)=> {
        callback(JSON.parse(e.data));
    }

    socket.onclose = function (e) {
        console.error('Socket closed unexpectedly', e);
    };

    return socket;
}