// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://opencourses.uom.gr/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const videoContainer = document.getElementById('vjs_video_4');
    console.log(videoContainer);
    const video = videoContainer.querySelector('video');
    console.log(video);

    const keyPressed = (event) => {
        console.log(event);
        if (!event.shiftKey) {
            switch (event.code) {
                case "ArrowRight":
                    video.currentTime += 5;
                    break;
                case "ArrowLeft":
                    video.currentTime -= 5;
                    break;
                default:
                    break;
            }
        }
        
        if((event.code === "Space") || 
           (event.code === "k"))
        {
            if (video.paused) {
                console.log("is Paused");
                video.play();
                return;
            }
            console.log('Playing');
            video.pause();
            return;
        }

        switch (event.code) {
            case "Period":
                video.playbackRate = video.playbackRate += 0.1;
                break;
            case "Comma":
                video.playbackRate = video.playbackRate -= 0.1;
                break;
            default:
                break;
        }
    }

    document.addEventListener('keydown', keyPressed);
})();

