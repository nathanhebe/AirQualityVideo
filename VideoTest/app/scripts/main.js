/* jshint undef: true, unused: true */
/* global $, videojs */

var app = (function () {

    var $wrapper,
        $video1,
        $video2,
        video1,
        video2,
        $btnPlay,
        $btnVideo,
        isPlaying = null;

    function setupDOM() {
        document.createElement('video');
        document.createElement('audio');
        document.createElement('track');

        $wrapper = $('#MainWrapper');
        $video1 = $('#example_video_1');
        $video2 = $('#example_video_2');
        video1 = videojs('example_video_1');
        video2 = videojs('example_video_2');
        $btnPlay = $('.js-btn-play');
        $btnVideo = $('.js-btn-video');
    }

    function setupEvents() {
        $wrapper.on('click', '.js-btn-play', playVideos);
        $wrapper.on('click', '.js-btn-video', switchVideo);
    }

    function setup() {
        setupDOM();
        setupEvents();
    }

    function playVideos() {
        isPlaying = $(this).hasClass('-playing');
        if (!isPlaying) {
            video1.play();
            video2.play();
            $(this).text('Pause');
        } else {
            video1.pause();
            video2.pause();
            $(this).text('Play');
        }
        $(this).toggleClass('-playing');
    }

    function switchVideo() {
        var target = $(this).attr('data-video-target');
        console.log('switchVideo = ' + target);
        $('.video__video-js').parent().removeClass('-active');
        $('#example_video_' + target).parent().addClass('-active');
    }

    return {
        init: function () {
            setup();
        }
    };
})();

$(document).ready(app.init);