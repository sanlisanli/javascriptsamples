(function () {
    function debounce(fn,wait=12,immediate=true) {
        let timeout;
        return function (...args) {
            let ctx=this;
            const later=function () {
                timeout=null;
                if (!immediate){
                    fn.apply(ctx,args);
                }
            };
            const callNow=immediate&&!timeout;
            clearTimeout(timeout);
            timeout=setTimeout(later,wait);
            if (!callNow){
                fn.apply(ctx,args);
            }
        }
    }
    const slideImages=document.querySelectorAll('.slide-in');
    function checkSlide() {
        slideImages.forEach(slideImage=>{
            const slideInMiddle = (window.scrollY + window.innerHeight) - (slideImage.height / 2);
            const imageBottom = slideImage.offsetTop + slideImage.height;
            const isHalfShow = slideInMiddle > slideImage.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;
            isHalfShow&&isNotScrolledPast?slideImage.classList.add('active'):slideImage.classList.remove('active');
        });
    }
    window.addEventListener('scroll',debounce(checkSlide));//scroll
}());