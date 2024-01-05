window.addEventListener("scroll", function(){
    var header = document.querySelector("nav")
    header.classList.toggle("abajo", this.window.scrollY>0)
})