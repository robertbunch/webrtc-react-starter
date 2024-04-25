import { io } from 'socket.io-client';

let socket;
const socketConnection = (userName)=>{
    //check to see if the socket is already connected
    if(socket && socket.connected){
        //if so, then just return it so whoever needs it, can use it
        return socket;
    }else{
        //its not connected... connect!
        console.log("Connecting...")
        // socket = io.connect('https://localhost:8181',{
        socket = io.connect('https://192.168.1.44:8181',{
            auth: {
                // jwt,
                password: "x",
                userName, 
            }
        });
        return socket;
    }
}

export default socketConnection;