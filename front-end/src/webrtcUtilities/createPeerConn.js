import peerConfiguration from './stunServers'
import socketConnection from "./socketConnection";

const createPeerConnection = (userName,typeOfCall)=>{
    //token for example
    const token = 123
    //init socket connection
    const socket = socketConnection(token) 
    try{
        const peerConnection = new RTCPeerConnection(peerConfiguration);
        //RTCPeerConnection is how WebRTC connects to another browser (peer).
        //It takes a config object, which (here) is just stun servers
        //STUN servers get our ICE candidates
        const remoteStream = new MediaStream();

        //peerConnection listeners


        return({
            peerConnection,
            remoteStream,
        })
    }catch(err){
        console.log(err)
    }
}

export default createPeerConnection
