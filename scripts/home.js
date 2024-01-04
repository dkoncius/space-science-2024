var heading = document.querySelector(".heading")

window.addEventListener("mousemove", function(event){
    var positionX = event.clientX / 50
    var positionY = event.clientY / 50

    heading.style.transform = `translate(${positionX}px, ${positionY}px)`
})