import React, { useEffect, useState } from "react";
import './Introduction.css'
import { Button } from "@mui/material";

export default function YoutubeVideos() {

    // const API_KEY = 'AIzaSyDcAcppEsOl93-2kpT7T5yYWN_hI08E_V8';
    const API_KEY = ''

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const fetchVideos = async () => {
            const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=vssm-mittal&maxResults=1&key=${API_KEY}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setVideos(data.items);
            console.log(videos);

        }
        fetchVideos();
    }, []);


    return <>
        <div className="video-container">
            {
                !videos ? (
                    <Button variant="outlined" color="yellow">
                        <a
                            href="https://www.youtube.com/user/NomadDenomads"
                            style={{ textDecoration: 'none' }}
                        >
                            Voice of the Voiceless YT Channel
                        </a>
                    </Button>
                ) :
                    (videos.map((video, index) => (
                        <div key={video.id.videoId} className="video-item">
                            <img
                                src={video.snippet.thumbnails.medium.url}
                                alt={video.snippet.title}
                                width="300"
                            />
                            <p>
                                <Button><a
                                    href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Visit Channel  </a></Button>
                            </p>

                        </div>
                    )))
            }
        </div>
    </>



}