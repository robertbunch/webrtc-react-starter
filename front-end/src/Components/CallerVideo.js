import { useEffect, useRef, useState } from "react";
import './VideoPage.css'
import { useSearchParams, useNavigate } from 'react-router-dom';
import socketConnection from '../webrtcUtilities/socketConnection'
import ActionButtons from './ActionButtons/ActionButtons'
import VideoMessageBox from "./VideoMessageBox";

const CallerVideo = ({remoteStream, localStream,peerConnection,callStatus,updateCallStatus,userName})=>{
    const remoteFeedEl = useRef(null); //this is a React ref to a dom element, so we can interact with it the React way
    const localFeedEl = useRef(null); //this is a React ref to a dom element, so we can interact with it the React way
    const navigate = useNavigate();
    const [ videoMessage, setVideoMessage ] = useState("Please enable video to start!")
    const [ offerCreated, setOfferCreated ] = useState(false)

    //send back to home if no localStream
    useEffect(()=>{

    },[])
    
    //set video tags
    useEffect(()=>{

    },[])

    //if we have tracks, disable the video message
    useEffect(()=>{
        if(peerConnection){

        }
    },[peerConnection])

    //once the user has shared video, start WebRTC'ing :)
    useEffect(()=>{
        
    },[callStatus.videoEnabled,offerCreated])
    

    useEffect(()=>{
        console.log(callStatus)
        const addAnswerAsync = async()=>{
            console.log(callStatus)
            await peerConnection.setRemoteDescription(callStatus.answer);
            console.log(peerConnection.signalingState)
            console.log("Answer added!")
        }
        if(callStatus.answer){
            addAnswerAsync()
        }
    },[callStatus])

    return (
        <div>
            <div className="videos">
                <VideoMessageBox message={videoMessage} />
                <video id="local-feed" ref={localFeedEl} autoPlay controls playsInline></video>
                <video id="remote-feed" ref={remoteFeedEl} autoPlay controls playsInline></video> 
            </div>
            <ActionButtons 
                localFeedEl={localFeedEl}
                remoteFeedEl={remoteFeedEl}
                callStatus={callStatus}
                localStream={localStream}
                updateCallStatus={updateCallStatus}
                peerConnection={peerConnection}
            />
        </div>
    )
}

export default CallerVideo
