function animationWait(timeout){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve()
            }, timeout)
    })
}

window.addEventListener("load", async()=>{
    let bounce = document.getElementById("bounce")
    bounce.id = "bounceInDown"
    bounce.innerHTML = "I made a thing"

    await animationWait(2000);

    let slide0= document.getElementById("slide0")
    slide0.id="slide1"
    slide0.innerHTML="This is my thing"

    await animationWait(1500);

    let slide2= document.getElementById("slide2")
    slide2.id="slide3"
    slide2.innerHTML="Apprentice Developer Luke de Rijk"

    await animationWait(200);
    
    let info1= document.getElementById("info1")
    info1.id="info2"
    info1.innerHTML="Climber // Kayak Instructor // BJJ enthusiast // Gaming"

    await animationWait(200);
    
    let info3= document.getElementById("info3")
    info3.id="info2"
    info3.innerHTML="Javascript // Html // CSS // Python // AWS"

    await animationWait(200);
    
    let info4= document.getElementById("info4")
    info4.id="info2"
    info4.innerHTML="Example of work 1"

    await animationWait(200);
    
    let info5= document.getElementById("info5")
    info5.id="info2"
    info5.innerHTML="Example of work 2"

    await animationWait(200);
    
    let info6= document.getElementById("info6")
    info6.id="info2"
    info6.innerHTML="Example of work 3"

    await animationWait(200);
    
    let info7= document.getElementById("info7")
    info7.id="info2"
    info7.innerHTML="Example of work 4"

    await animationWait(200);
    
    let info8= document.getElementById("info8")
    info8.id="info2"
    info8.innerHTML="Example of work 5"

    await animationWait(200);
    
    let info9= document.getElementById("info9")
    info9.id="info2"
    info9.innerHTML="Random stuff1"

    await animationWait(200);
    
    let info10= document.getElementById("info10")
    info10.id="info2"
    info10.innerHTML="Random stuff 2"

    await animationWait(200);
    
    let info11= document.getElementById("info11")
    info11.id="info2"
    info11.innerHTML="Random stuff 3"

    await animationWait(200);
    
    let info12= document.getElementById("info12")
    info12.id="info2"
    info12.innerHTML="Random stuff 4"

    await animationWait(200);
    
    let info13= document.getElementById("info13")
    info13.id="info2"
    info13.innerHTML="random stuff 5"

    await animationWait(200);
    
    let info14= document.getElementById("info14")
    info14.id="info2"
    info14.innerHTML="Random stuff 6"

    await animationWait(200);
    
    let info15= document.getElementById("info15")
    info15.id="info2"
    info15.innerHTML="random stuff 7"

    await animationWait(200);
    
    let info16= document.getElementById("info16")
    info16.id="info2"
    info16.innerHTML="extra1"

    await animationWait(200);
    
    let info17= document.getElementById("info17")
    info17.id="info2"
    info17.innerHTML="extra2"

    await animationWait(200);
    
    let info18= document.getElementById("info18")
    info18.id="info2"
    info18.innerHTML="extra3"

    await animationWait(200);
    
    let info19= document.getElementById("info19")
    info19.id="info2"
    info19.innerHTML="extra4"








    await animationWait(1000);

    let slide4 = document.getElementById("slide4")
    slide4.id="slide5"
    slide4.innerHTML="" // put stuff here

    await animationWait(1000)

    let slide7 = document.getElementById("slide7")
    slide7.id = "slide9"
    slide7.innerHTML="" // and here
});



// attempt 1

// function animationWait(timeout){
//     return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 resolve()
//             }, timeout)
//     })
// }

// document.body.addEventListener("load", async()=>{
//     let bounce = document.getElementById("bounce")
//     bounce.id = "bounceInDown"
//     bounce.innerHTML = "Welcome"

//     await animationWait(1500);

//     let slide0= document.getElementById("slide0")
//     slide0.id="slide1"
//     slide0.innerHTML="to my Resume."

//     await animationWait(1500);

//     let slide2= document.getElementById("slide2")
//     slide2.id="slide3"
//     slide2.innerHTML="Apprentice Developer Luke de Rijk"

//     await animationWait(1500);

//     let slide4 = document.getElementById("slide4")
//     slide4.id="slide5"
//     slide4.innerHTML="About me >"
// });

// document.getElementById("slide4").addEventListener("click", async()=>{
//     let slide5 = document.getElementById("slide5")
//     slide5.id = "slide6"
//     slide5.innerHTML="blablablbalbalbalbalbalbalabl balablablabalbal balbalbalbalablablabal balbalbalablabalbalba lbalablba"

//     await animationWait(1000);

//     let slide7 = document.getElementById("slide7")
//         slide7.id="slide8"
//         slide7.innerHTML="< My interests"
// })

// document.getElementById("slide7").addEventListener("click", async()=>{
//     let slide8 = document.getElementById("slide8")
//     slide8.id = "slide9"
//     slide8.innerHTML="jajaj aja ja ja ja jajjajjajajaj jajajjajajaj ajajajajaja"

//     let slide9 = document.getElementById("slide6")
//     slide9.id = "fadeOut1"
//     await animationWait(1000);
//     slide9.innerHTML=""
//     await animationWait(1000);
//     slide9.id="slide10"
//     slide9.innerHTML="Other stuff>"
// })

// document.getElementById("slide10").addEventListener("click", async()=>{
//     let slide11 = document.getElementById("slide11")
//     slide11.id = "slide12"
//     slide11.innerHTML = " uwuwuuuwu wuwuwuuwuwuw uwuwuwuwuwu wuwuwuw"
// })
