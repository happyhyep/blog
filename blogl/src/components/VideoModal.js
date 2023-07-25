import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const VideoModal = ({setIsVideoModalOpen, video}) => {
    const closeModal = () => {
        setIsVideoModalOpen(false);
    };
    const videoRef= useRef();
    const setPlayBackRate = () => {
      videoRef.current.playbackRate = 1.6;
    };

    return (
        <Box>
            <CloseButton onClick={closeModal} >X</CloseButton>
            <video width='1300' controls="controls" ref={videoRef} onCanPlay={() => setPlayBackRate()}>
                <source src={video} type="video/mp4"/>
            </video>
        </Box>
    )
}

export default VideoModal;

const Box = styled.div`
    position: relative;
    bottom: 300px;
    left: 100px;
    z-index: 999;

`

const CloseButton = styled.button`
    position: fixed;
    z-index: 9999;
    right: 20px;
    top: 10px;
    cursor: pointer;
    
    font-family: applesdgothic;
    font-size: 30px;
`