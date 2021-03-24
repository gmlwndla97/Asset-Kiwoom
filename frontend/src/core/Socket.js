
export default function Socket(url, callback) {
    let socket = new WebSocket('ws://127.0.0.1:8000/ws/' + url + '/');

    socket.onopen = () => {
        // socket.send(JSON.stringify({
        //     'message': "소켓 연결"
        // }));
    }

    socket.onmessage = (e)=> {
        console.log(JSON.parse(e.data));
        if(JSON.parse(e.data) === "소켓 해제")
            socket.close();
        else 
            callback(JSON.parse(e.data));
    }

    socket.onclose = function (e) {
        console.error('Socket closed', e);
    };

    return socket
}