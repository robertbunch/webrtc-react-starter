import { useEffect, useRef, useState } from "react";
import './VideoPage.css'
import { useSearchParams, useNavigate } from 'react-router-dom';
import socketConnection from '../webrtcUtilities/socketConnection'
import ActionButtons from './ActionButtons/ActionButtons'
import VideoMessageBox from "./VideoMessageBox";

const AnswerVideo = ({remoteStream, localStream,peerConnection,
    callStatus,updateCallStatus,offerData,userName})=>{
    const remoteFeedEl = useRef(null); //this is a React ref to a dom element, so we can interact with it the React way
    const localFeedEl = useRef(null); //this is a React ref to a dom element, so we can interact with it the React way
    const navigate = useNavigate();
    const [ videoMessage, setVideoMessage ] = useState("Please enable video to start!")
    const [ answerCreated, setAnswerCreated ] = useState(false)
    
    //send back to home if no localStream
    useEffect(()=>{
        

    })

    //set video tags
    useEffect(()=>{

    },[])

    //if we have tracks, disable the video message
    useEffect(()=>{

    },[peerConnection])

    //User has enabled video, but not made answer
    useEffect(()=>{

    },[callStatus.videoEnabled,answerCreated])
    

    //
    const shareVideo = async()=>{

    }

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

export default AnswerVideo
