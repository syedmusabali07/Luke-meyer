let circle = document.querySelector(".cursor")
let wheelcir=document.querySelector(".rowheel")
let Ecircle=document.querySelector(".blcircle")
let AB=document.querySelector(".AB")
let BC=document.querySelector(".BC")
let CD=document.querySelector(".CD")
let DE=document.querySelector(".DE")
let EF=document.querySelector(".EF")
let FG=document.querySelector(".FG")
let GH=document.querySelector(".GH")
let HI=document.querySelector(".HI")





window.addEventListener("mousemove",function(dets){
    circle.style.top=`${dets.clientY}px`
    circle.style.left=`${dets.clientX}px`
})
document.querySelectorAll(".txt").forEach(element => {
    element.addEventListener("mousemove",function(){
        circle.style.height="60px"
        circle.style.width="60px"
        circle.style.backgroundColor="white"
        circle.style.mixBlendMode="difference"

    })
    element.addEventListener("mouseleave",function(){
        circle.style.height="20px"
        circle.style.width="20px"
        circle.style.backgroundColor="transparent"     
        circle.style.mixBlendMode="initial"



    })
});

let body=document.querySelector("#main")
document.querySelectorAll(".imgEffect").forEach(element => {
    element.addEventListener("mousemove",function(dets){
        wheelcir.style.top=`${dets.clientY}px`
        wheelcir.style.left=`${dets.clientX}px`
        wheelcir.style.display="block"
         circle.style.display="none"
         body.style.backgroundColor=dets.target.dataset.color
         AB.style.color="white"
         BC.style.color="white"
         CD.style.color="white"
         DE.style.color="white"
         EF.style.color="white"
         FG.style.color="white"
         GH.style.color="white"
         HI.style.color="white"





        // function abcd(){
        //   wheelcir.style.top=`${dets.clientY}px`
        //  wheelcir.style.left=`${dets.clientX}px`
        //  window.requestAnimationFrame(abcd)

        // }
        //  window.requestAnimationFrame(abcd)


    })
    element.addEventListener("mouseleave",function(){
        
        wheelcir.style.display="none"
        circle.style.display="initial"
        body.style.backgroundColor="white"
        AB.style.color="initial"
        BC.style.color="initial"
        CD.style.color="initial"
        DE.style.color="initial"
        EF.style.color="initial"
        FG.style.color="initial"
        GH.style.color="initial"
        HI.style.color="initial"


    })
});



// Ecircle.addEventListener("mousemove",function(dets){
//     blcircle.style.transform=`translate(${dets.clientX*.20}px,${dets.clientY*.099}px)`
// })
// Ecircle.addEventListener("mouseleave",function(dets){
//     blcircle.style.transform=`translate(0,0)`
// })
// window.addEventListener("mousemove",function(dets){
//     Ecircle.style.transform=`translate(${dets.clientX*22},${dets.clientY*099})`
// })

// $('#heading .txt').textillate({ in: { effect: 'fadeInUp' } });
// $('#slidetxt').textillate({ in: { effect: 'fadeInUp', } });
