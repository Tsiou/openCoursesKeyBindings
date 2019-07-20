// ==UserScript==
// @name         OpenCoursesKeyBinds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adds keybinds to opencourses.uom.gr for easier video playing.
// @author       georgtsiou@gmail.com
// @match        http://opencourses.uom.gr/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const videoContainer = document.getElementById('vjs_video_4');
    const video = videoContainer.querySelector('video');

    const keyPressed = (event) => {
        if (!event.shiftKey) {
            switch (event.key) {
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

        if((event.key === " ") ||
           (event.key === "k"))
        {
            if (video.paused) {
                video.play();
                return;
            }
            video.pause();
            return;
        }

        switch (event.key) {
            case ">":
                video.playbackRate += 0.1;
                break;
            case "<":
                video.playbackRate -= 0.1;
                break;
            default:
                break;
        }
    }

    document.addEventListener('keydown', keyPressed);
})();
