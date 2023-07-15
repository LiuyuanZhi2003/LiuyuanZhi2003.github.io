let videoIndex = 0;
const videos = document.querySelectorAll('.video');

function switchVideo() {
    videos.forEach((video, index) => {
        if(index === videoIndex) {
            video.classList.add('active');
            video.play();
        } else {
            video.classList.remove('active');
            video.pause();
            video.currentTime = 0;
        }
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    switchVideo();
});

document.querySelector('.next').addEventListener('click', () => {
    videoIndex = (videoIndex + 1) % videos.length;
    switchVideo();
});

// 初始化
switchVideo();
