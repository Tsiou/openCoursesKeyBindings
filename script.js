// ==UserScript==
// @name         OpenCoursesKeyBinds
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  adds keybinds to opencourses.uom.gr for easier video playing.
// @author       georgtsiou@gmail.com
// @match        http://opencourses.uom.gr/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const videoContainer = document.getElementById('vjs_video_4');
    const video = videoContainer.querySelector('video');

    const isShiftCombination = (key) => {
        switch (key) {
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

    const noCombination = (key) => {
        switch (key) {
            case "ArrowRight":
                video.currentTime += 5;
                break;
            case "ArrowLeft":
                video.currentTime -= 5;
                break;
            case "ArrowUp":
                video.volume += 0.05;
                break;
            case "ArrowDown":
                video.volume -= 0.05;
                break;
            case " ":
            case "k":
                if (video.paused) {
                    video.play();
                    break;
                }
                video.pause();
                break;
            default:
                break;
        }
    }

    const keyPressed = (event) => {
        const pressedKey = event.key;
        if (event.shiftKey) {
            isShiftCombination(pressedKey);
        }
        else {
            noCombination(pressedKey);
        }
    }

    document.addEventListener('keydown', keyPressed);
})();
