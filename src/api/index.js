var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
    console.log("connecting");
    
    socket.onopen = () => {
        console.log("Connect Success");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("Socket closed: ", event);
    };

    socket.onerror = error => {
        console.log("ERROR: ", error);
    };
};

let sendMsg = msg => {
    console.log("Sending message: ", msg);
};

export{connect, sendMsg};