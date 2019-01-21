(function () {
    const panels=document.querySelectorAll('.panel');
    panels.forEach(panel=>panel.addEventListener('click',toggleOpen));
    panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive));
    function toggleOpen() {
        this.classList.toggle('open');//toggle()
    }
    function toggleActive(e) {
        if (e.propertyName.includes('flex')){
            this.classList.toggle('open-active');
        }
    }
}());