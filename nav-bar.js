let isClicked = false;
document.querySelector(".toggle-btn").addEventListener("click",function (){
    if(!isClicked) {
        this.style.backgroundColor="#ececec";
        this.style.color="#3a3a3a";
        document.querySelectorAll(".nav-link.mb").forEach(el => {
            el.style.display = "block";
        });
        isClicked = true;
    } else {
        this.style.backgroundColor="#3a3a3a";
        this.style.color="#ececec";
        document.querySelectorAll(".nav-link.mb").forEach(el => {
            el.style.display = "none";
        });
        isClicked = false;
    }
    let element = document.querySelector(".mobile-nav");
    element.style.height = element.style.height === '100%' ? '0' : '100%'; // Toggle side nav width

});