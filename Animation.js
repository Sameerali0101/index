// gsap.from(".page1 .box",{
//     // scale:0,
//     color:"yellow",
//     duration:2,
//     delay:1,
//     rotate:460,
// })

// gsap.to(".page1 .box",{
//     y:500,
//     x:600,
//     backgroundColor:"#f08080",
//     duration:2,
//     delay:1,
//     rotate:460,
//     // x:600
// })

// let tl = gsap.timeline();
// tl.from(".nav h1",{
//     opacity:0,
//     y:40,
//     duration:1,
//     delay:0.6
// })

// tl.from(".navitems h4",{
//     opacity:0,
//     y:40,
//     duration:1,
//     delay:0.2,
//     stagger:0.5,
// })

// let div = document.querySelector(".nav");
// let changingid = div.setAttribute("class","mynav");
// console.log(changingid);

// let heading = document.querySelector("h1");

let tl = gsap.timeline();

tl.from(".nav h1",{
    opacity:0,
    duration:1,
    delay:1,
    y:40
})

tl.from(".navitems h4",{
    opacity:0,
    duration:1,
    delay:1,
    y:40,
    stagger:0.5,
    backgroundColor:"fff"
})





