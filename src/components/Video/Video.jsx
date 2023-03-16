import { useState, useRef, useEffect } from 'react';

import {
    PauseIcon,
    ResumeIcon,
    ZoomFullIcon,
    ZoomDefaultIcon,
    ForwardIcon,
    BackIcon,
    NextEpisode,
    VolumeIcon,
    MuteIcon,
    SmallScreenIcon,
} from '../Icons';
import ActionVideo from './ActionVideo';
import SettingSpeed from './SettingSpeed';
import './AnimeVideo.scss';

const MENU_ITEMS = [
    {
        title: 'Speed',
        children: {
            title: 'Speed',
            icon: <BackIcon />,
            data: [
                {
                    title: 'Normal',
                    type: 'normal',
                },
                {
                    title: 'Slow',
                    type: 'slow',
                },
                {
                    title: 'Fast',
                    type: 'fast',
                },
            ],
        },
    },
];

function Video({ src, id }) {
    const [controls, setControls] = useState(true);
    const [play, setPlay] = useState(true);
    const [volume, setVolume] = useState(true);
    const [progressValue, setProgressValue] = useState(0);
    const [screen, setScreen] = useState(false);
    const [time, setTime] = useState('');
    const [timeDuration, setTimeDuration] = useState('');
    const [timeLine, setTimeline] = useState('');

    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const valueRef = useRef(null);
    const timeRef = useRef(null);

    let timer;

    const formMartTime = (time) => {
        let seconds = Math.floor(time % 60);
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600);

        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;

        if (hours == 0) {
            return `${minutes}:${seconds}`;
        }
        return `${hours}:${minutes}:${seconds}`;
    };

    const handlePLay = () => {
        videoRef.current.play();
        setPlay((prev) => !prev);
    };

    const handlePause = () => {
        videoRef.current.pause();
        setPlay((prev) => !prev);
    };

    const handleTogglePlay = () => {
        if (play === true) {
            setPlay(!play);
            videoRef.current.play();
        } else {
            setPlay(!play);
            videoRef.current.pause();
        }
    };

    const handleVolume = () => {
        setVolume(!volume);

        if (volume === true) {
            videoRef.current.muted = true;
        } else {
            videoRef.current.muted = false;
        }
    };

    const handleTimeUpdate = (e) => {
        const videoRefCurrentTime = videoRef.current.currentTime;
        const progress = Math.floor((videoRefCurrentTime / videoRef.current.duration) * 100);
        setProgressValue(progress);

        setTime(videoRefCurrentTime);
        setTimeDuration(videoRef.current.duration);

        let x = progress;
        let colorRange = `background:linear-gradient(90deg, #e53637 ${x}%, rgba(255, 255, 255, 0.6) ${x}%);`;
        valueRef.current.style = colorRange;
    };

    const handleUpdateProgress = (e) => {
        const seekTime = (videoRef.current.duration / 100) * e.target.value;
        videoRef.current.currentTime = seekTime;

        setProgressValue(progressValue);
    };

    const handleShowTime = (e) => {
        let setX = e.nativeEvent.offsetX;
        timeRef.current.style = `left:${setX}px`;

        let videoTimeLine = valueRef.current.clientWidth;
        let percent = (setX / videoTimeLine) * videoRef.current.duration;
        setTimeline(percent);
    };

    useEffect(() => {
        const hideControls = () => {
            timer = setTimeout(() => {
                setControls(false);
            }, 5000);
        };

        hideControls();

        videoContainerRef.current.addEventListener('mousemove', () => {
            setControls(true);
            clearTimeout(timer);
            hideControls();
        });
    }, [controls]);

    const handleForward = () => {
        const forwardTime = videoRef.current.currentTime + 5;

        videoRef.current.currentTime = forwardTime;
    };

    const handleBack = () => {
        const forwardTime = videoRef.current.currentTime - 5;

        videoRef.current.currentTime = forwardTime;
    };

    const handleEnded = () => {
        setPlay(true);
    };

    const handlePicture = () => {
        videoRef.current.requestPictureInPicture();
    };

    const handleZoom = () => {
        setScreen(true);
        if (videoContainerRef.current.requestFullscreen) {
            videoContainerRef.current.requestFullscreen();
        } else if (videoContainerRef.current.webkitRequestFullscreen) {
            /* Safari */
            videoContainerRef.current.webkitRequestFullscreen();
        } else if (videoContainerRef.current.msRequestFullscreen) {
            /* IE11 */
            videoContainerRef.current.msRequestFullscreen();
        }
    };

    const handleZoomDefault = () => {
        setScreen(false);
        if (videoContainerRef.current.requestFullscreen) {
            document.exitFullscreen();
        }
    };

    return (
        <div id="video" className={controls ? 'show-progress' : ''} ref={videoContainerRef} tabIndex="0">
            {/* Video */}
            <video
                className="video"
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                onClick={handleTogglePlay}
                onEnded={handleEnded}
            >
                <source src={src} type="video/mp4" />
            </video>
            {play && (
                <div className="video__wrapper_icon--between">
                    <ActionVideo onClick={handleTogglePlay} icon={<PauseIcon />} />
                </div>
            )}

            <div className="video__wrapper">
                <div className="video__progress">
                    <span ref={timeRef}>{formMartTime(timeLine)}</span>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        ref={valueRef}
                        value={progressValue}
                        onChange={handleUpdateProgress}
                        onMouseMove={handleShowTime}
                    />
                </div>

                <div className="video__action">
                    <div className="video__action_left">
                        {play ? (
                            <ActionVideo onClick={handlePLay} icon={<PauseIcon />} />
                        ) : (
                            <ActionVideo onClick={handlePause} icon={<ResumeIcon />} />
                        )}

                        {volume ? (
                            <ActionVideo onClick={handleVolume} icon={<VolumeIcon />} />
                        ) : (
                            <ActionVideo onClick={handleVolume} icon={<MuteIcon />} />
                        )}

                        <span>{`${formMartTime(time)} / ${formMartTime(timeDuration)}`}</span>
                    </div>

                    <div className="video__action_right">
                        <ActionVideo onClick={handleBack} icon={<BackIcon />} />
                        <ActionVideo onClick={handleForward} icon={<ForwardIcon />} />
                        <ActionVideo icon={<NextEpisode />} />

                        {/* Setting Video */}
                        {/* <Menu items={MENU_ITEMS} /> */}
                        <SettingSpeed getRef={videoRef} />
                        <ActionVideo onClick={handlePicture} icon={<SmallScreenIcon />} />

                        {screen ? (
                            <ActionVideo onClick={handleZoomDefault} icon={<ZoomDefaultIcon />} />
                        ) : (
                            <ActionVideo onClick={handleZoom} icon={<ZoomFullIcon />} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
