
const HangupButton = ({remoteFeedEl, localFeedEl,peerConnection, callStatus, setCallStatus})=>{

    const hangupCall = ()=>{
        
    }

    if(callStatus.current === "complete"){
        return <></>
    }

    return(
        <button 
            onClick={hangupCall} 
            className="btn btn-danger hang-up"
        >Hang Up</button>
    )
}

export default HangupButton