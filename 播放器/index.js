(function () {
    // All DOM element.const
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const next = player.querySelector('.next');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');

    function togglePlay() {
        const method=video.paused?'play':'pause';
        video[method]();
    }

    function updateButton() {
        toggle.textContent=this.paused ? '►' : '❚ ❚';
    }
    function skip() {
        const skip=this.dataset.skip;
        video.currentTime+=parseFloat(skip);
    }
    function handleRange() {
        video[this.name]=this.value;
        this.title=this.value;
        if (this.name==='volume'){
            const volume=this.value*100;
            this.title=Number.parseInt(volume);
        }
    }
    function handleProgress() {
        const percent=(video.currentTime/video.duration)*100;
        progressBar.style.flexBasis=`${percent}%`;
    }
    function controlBar(e) {
        video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
    }
    function handleNext() {
        video.src=`video/2.mp4`;
    }
    //Event listener
    video.addEventListener('click',togglePlay);
    toggle.addEventListener('click',togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);
    progress.addEventListener('mousedown', controlBar);
    next.addEventListener('click', handleNext);
    skipButtons.forEach(button => button.addEventListener('click', skip));
    ranges.forEach(range => range.addEventListener('change', handleRange));
}());