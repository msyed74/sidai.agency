
    var nav = document.querySelector("#nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "25vh"
        })
        tl.to("#navpart2 h5", {
            display: "block"
        })
        tl.to("#navpart2 h5 span", {
            y: 0,
            //duration:0:3
            stagger: {
                amount: 0.1
            }
        })

    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to("#navpart2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to("#navpart2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })

    })


    
        

    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
                
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x -40,
                y: dets.y - elem.getBoundingClientRect().y -100
            })
        })
    })

    
    


    /*
    var page3Center =document.querySelector(".page3-center")
    var video = document.querySelector(" #page3 video")

    page3Center.addEventListener("click",function(){
     video.play()
     gsap.to(video,{
        Transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
     })
     
    })
    
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
*/
    
     
     var page3Center = document.querySelector(".page3-center")
     var video = document.querySelector("#page3 video")
 
     page3Center.addEventListener("click", function () {
         video.play()
         gsap.to(video, {
             Transform: "scaleX(1) scaleY(1)",
             opacity: 1,
             borderRadius: 0
         })
     })
     video.addEventListener("click", function () {
         video.pause()
         gsap.to(video, {
             transform: "scaleX(0.7) scaleY(0)",
             opacity: 0,
             borderRadius: "30px"
         })
     })
     var sections = document.querySelectorAll(".sec-right")

     sections.forEach(function (elem) {
         elem.addEventListener("mouseenter", function () {
             elem.childNodes[3].style.opacity = 1
             elem.childNodes[3].play()
         })
         elem.addEventListener("mouseleave", function () {
             elem.childNodes[3].style.opacity = 0
             elem.childNodes[3].load()
         })
     })

     function hideButton(){
        document.getElementById("notifl").style.display ="none";
     }

     