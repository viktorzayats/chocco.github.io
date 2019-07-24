let player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player-yt', {
    height: '330',
    width: '590',
    videoId: 'YFZ1fWGEK7A',
    playerVars: {
        controls: 0,
        disablekb: 0,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        modestbranding: 0
    },
    events: {
        'onReady': onPlayerReady,
    // 'onStateChange': onPlayerStateChange
    }
});
}

const playPause = document.querySelector('.player__playpause');
const playerLine = document.querySelector('.player__line');
const playerProgress = document.querySelector('.player__progress');
const muted = document.querySelector('.player__muted');
const lineVolume = document.querySelector('.player__volume-line');
const volumeHeight = document.querySelector('.player__volume-height');


function onPlayerReady() {
    let interval;
    clearInterval(interval);
    const duration = player.getDuration();
    interval = setInterval(() => {
        const compleatedSeconds = player.getCurrentTime();
        const percent = (compleatedSeconds / duration) * 100;

        playerProgress.style.left = `${percent}%`;
    },1000);
};

playPause.addEventListener('click', () => {
    if (playPause.classList.contains('play')) {
        player.pauseVideo();
        playPause.classList.remove('play');
    } else {
        player.playVideo();
        playPause.classList.add('play');
    }
});

playerLine.addEventListener('click', e => {
    const x = Math.floor((e.offsetX / playerLine.clientWidth) * 100);
    playerProgress.style.left = `${x}%`;

    const newPlayerTime = (player.getDuration() / 100) * x;
    player.seekTo(newPlayerTime);
});

muted.addEventListener('click', e => {
    e.currentTarget.classList.toggle('muted');
    if (player.isMuted()) {
        player.unMute()
    }else {
        player.mute()
    }
});

lineVolume.addEventListener('click', e => {
    const x = Math.floor((e.offsetX / lineVolume.clientWidth) * 100);
    volumeHeight.style.left = `${x}%`;
    player.setVolume(x);
});