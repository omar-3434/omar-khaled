document.querySelector(".about").onmouseover = function(){
    document.querySelector(".a1").style = "color: #000;"
    document.querySelector(".active_nav").style = " left: 0%; bottom: 0%;"
}
document.querySelector(".about").onmouseout = function(){
    document.querySelector(".a1").style = "color: #ff9500;"
    document.querySelector(".active_nav").style = " left: 0%; bottom: 190%;"
}
// ######################################################
document.querySelector(".work").onmouseover = function(){
    document.querySelector(".a2").style = "color: #000;"
    document.querySelector(".active_nav1").style = " left: 39%; bottom: 0%;"
}
document.querySelector(".work").onmouseout = function(){
    document.querySelector(".a2").style = "color: #ff9500;"
    document.querySelector(".active_nav1").style = " left: 39%; bottom: 190%;"
}
// ######################################################
document.querySelector(".contact").onmouseover = function(){
    document.querySelector(".a3").style = "color: #000;"
    document.querySelector(".active_nav2").style = " left: 78%; bottom: 0%;"
}
document.querySelector(".contact").onmouseout = function(){
    document.querySelector(".a3").style = "color: #ff9500;"
    document.querySelector(".active_nav2").style = " left: 78%; bottom: 190%;"
}
// ######################################################
// ******************************************************
document.querySelector("header button").onmouseover = function(){
    $("header button p").html("learn more &darr;")
    document.querySelector("header button").style = "background-color: #ff9500;"
    document.querySelector("header button p").style = " color: black; transition: 1s;"
}
document.querySelector("header button").onmouseout = function(){
    $("header button p").html("learn more &rarr;")
    
    document.querySelector("header button").style = "background-color: #none;"
    document.querySelector("header button p").style = "  color: #ffeed6; transition: 1s;"
}
// ######################################################
// ******************************************************
let nav = document.querySelector("nav")
let movement = document.querySelector(".movement")
let movement2 = document.querySelector(".movement2")
let movement1 = document.querySelector(".movement1")
let about1 = document.querySelector(".about1")
window.onscroll = function(){
    if(scrollY>=280){
        $("nav").slideUp()
    }
    else{
        $("nav").slideDown()
    }
    if(scrollY>=119){
        document.querySelector(".about1").style = "transform: translateX(0%);"
    }
    if(scrollY>=561){
        document.querySelector(".movement").style = "transform: translateX(-180%);"
        document.querySelector(".movement1").style = "transform: translateX(180%);"
        document.querySelector(".movement2").style = "transform: translateX(-180%);"
    }
    else{
        document.querySelector(".movement").style = "transform: translateX(0%);"
        document.querySelector(".movement1").style = "transform: translateX(0%);"
        document.querySelector(".movement2").style = "transform: translateX(0%);"
    }
    // if(scrollY>=970){
    //     document.querySelector(".about1").style = "transform: translateX(-180%);"
    // }
    if(scrollY>=427){
        let down = 0
        setInterval(function(){
            down++
            if(down==1){
                document.querySelector(".about_cont").style = "transform: translateY(0%);"
            }
            if(down==2){
                document.querySelector(".about_cont1").style = "transform: translateY(0%);"
            }
            if(down==3){
                document.querySelector(".about_cont2").style = "transform: translateY(0%);"
            }
            if(down==4){
                document.querySelector(".about_cont3").style = "transform: translateY(0%);"
            }
        } , 500)
    }
    // else{
    //     document.querySelector(".about_cont").style = "transform: translateY(-180%);"
    //     document.querySelector(".about_cont1").style = "transform: translateY(-180%);"
    //     document.querySelector(".about_cont2").style = "transform: translateY(-180%);"
    //     document.querySelector(".about_cont3").style = "transform: translateY(-180%);"
    // }
    // if(scrollY>=1317){
    //     document.querySelector(".about_cont").style = "transform: translateY(-180%);"
    //     document.querySelector(".about_cont1").style = "transform: translateY(-180%);"
    //     document.querySelector(".about_cont2").style = "transform: translateY(-180%);"
    //     document.querySelector(".about_cont3").style = "transform: translateY(-180%);"  
    // }
    if(scrollY>=940){
        document.querySelector(".head2").style = "transform: translateY(0%);"
    }
    if(scrollY>=992){
        let left = 0
        setInterval(function(){
            left++
            if(left==1){
            document.querySelector(".prag1").style = "transform: translateX(0%);"
            document.querySelector(".load_html").style = "transform: translateX(0%);"
            document.querySelector(".ami").style = "transform: translateX(0%);"
        }
        if(left==2){
            document.querySelector(".prag2").style = "transform: translateX(0%);"
            document.querySelector(".load_css").style = "transform: translateX(0%);"
            document.querySelector(".ami1").style = "transform: translateX(0%);"
            document.querySelector(".bb").style = "transform: translateX(0%);"
        }
        if(left==3){
            document.querySelector(".prag3").style = "transform: translateX(0%);"
            document.querySelector(".load_javascript").style = "transform: translateX(0%);"
            document.querySelector(".ami2").style = "transform: translateX(0%);"
        }
        if(left==4){
            document.querySelector(".prag4").style = "transform: translateX(0%);"
            document.querySelector(".load_1").style = "transform: translateX(0%);"
            document.querySelector(".ami3").style = "transform: translateX(0%);"
        }
        if(left==5){
            document.querySelector(".prag5").style = "transform: translateX(0%);"
            document.querySelector(".load_2").style = "transform: translateX(0%);"
            document.querySelector(".ami4").style = "transform: translateX(0%);"
        }
            if(left==6){
            document.querySelector(".prag6").style = "transform: translateX(0%);"
            document.querySelector(".load_3").style = "transform: translateX(0%);"
            }
            if(left==8){
                document.querySelector(".act1").style = "transform: translateX(0%); width: 95%; "
                document.querySelector(".act2").style = "transform: translateX(0%); width: 90%;"
                document.querySelector(".act3").style = "transform: translateX(0%); width: 70%;"
            }
            if(left==9){
                document.querySelector(".loading1").style = "opacity: 1;"
                document.querySelector(".loading2").style = "opacity: 1;"
                document.querySelector(".loading3").style = "opacity: 1;"
                document.querySelector(".loading4").style = "opacity: 1;"
                document.querySelector(".loading5").style = "opacity: 1;"
                document.querySelector(".loading6").style = "opacity: 1;"
            }
        } , 500)
    }
    if(scrollY>=1464){
        document.querySelector(".work1").style = "transform: translateX(0%);"
    }
    if(scrollY>=1703){
        let wave = 0
        setInterval(function(){
            wave++
            if(wave==1){
                document.querySelector(".w1").style = "transform: translateX(0%);"
            }
            if(wave==2){
                document.querySelector(".w2").style = "transform: translateX(0%);"
            }
            if(wave==3){
                document.querySelector(".w3").style = "transform: translateX(0%);"
            }
            if(wave==4){
                document.querySelector(".w4").style = "transform: translateX(0%);"
            }
            if(wave==5){
                document.querySelector(".w5").style = "transform: translateX(0%);"
            }
            if(wave==6){
                document.querySelector(".w6").style = "transform: translateX(0%);"
            }
        } , 500)
    }
    if(scrollY>=2450){
        document.querySelector(".contacts").style = "transform: translateX(0%);"
        document.querySelector(".call").style = "transform: translateX(0%);"
    }
    if(scrollY>=2600){
        let omar = 0
        setInterval(function(){
            omar++
            if(omar==1){
                document.querySelector(".gmail").style = "transform: translateX(0%);"
            }
            if(omar==2){
                document.querySelector(".insta").style = "transform: translateX(0%);"
            }
            if(omar==3){
                document.querySelector(".face").style = "transform: translateX(0%);"
            }
            if(omar==4){
                document.querySelector(".wats").style = "transform: translateX(0%);"
            }
        } , 500)
    }

}
document.querySelector(".w1").onmouseover = function(){
    $(".hover1").css({"top" : "0%"})
}
document.querySelector(".w1").onmouseout = function(){
    $(".hover1").css({"top" : "100%"})
}
document.querySelector(".w2").onmouseover = function(){
    $(".hover2").css({"top" : "0%"})
}
document.querySelector(".w2").onmouseout = function(){
    $(".hover2").css({"top" : "100%"})
}
document.querySelector(".w3").onmouseover = function(){
    $(".hover3").css({"top" : "0%"})
}
document.querySelector(".w3").onmouseout = function(){
    $(".hover3").css({"top" : "100%"})
}
document.querySelector(".w4").onmouseover = function(){
    $(".hover4").css({"top" : "0%"})
}
document.querySelector(".w4").onmouseout = function(){
    $(".hover4").css({"top" : "100%"})
}
document.querySelector(".w5").onmouseover = function(){
    $(".hover5").css({"top" : "0%"})
}
document.querySelector(".w5").onmouseout = function(){
    $(".hover5").css({"top" : "100%"})
}
document.querySelector(".w6").onmouseover = function(){
    $(".hover6").css({"top" : "0%"})
}
document.querySelector(".w6").onmouseout = function(){
    $(".hover6").css({"top" : "100%"})
}
// ######################################################
// ######################################################
document.querySelector(".but1").onmouseover = function(){
    $(this).css({"background":"#ffeed6" , "color":"#000"})
    $(this).html("see more &darr;")
}
document.querySelector(".but1").onmouseout = function(){
    $(this).css({"background":"none" , "color":"#ffeed6"})
    $(this).html("see more &rarr;")
}
// ###################$$$$$$$$$$$$$$$$$$$$$$$$$#############################
document.querySelector(".but2").onmouseover = function(){
    $(this).css({"background":"#ffeed6" , "color":"#000"})
    $(this).html("see more &darr;")
}
document.querySelector(".but2").onmouseout = function(){
    $(this).css({"background":"none" , "color":"#ffeed6"})
    $(this).html("see more &rarr;")
}
// ###################$$$$$$$$$$$$$$$$$$$$$$$$$#############################
document.querySelector(".but3").onmouseover = function(){
    $(this).css({"background":"#ffeed6" , "color":"#000"})
    $(this).html("see more &darr;")
}
document.querySelector(".but3").onmouseout = function(){
    $(this).css({"background":"none" , "color":"#ffeed6"})
    $(this).html("see more &rarr;")
}
// ###################$$$$$$$$$$$$$$$$$$$$$$$$$#############################
document.querySelector(".but4").onmouseover = function(){
    $(this).css({"background":"#ffeed6" , "color":"#000"})
    $(this).html("see more &darr;")
}
document.querySelector(".but4").onmouseout = function(){
    $(this).css({"background":"none" , "color":"#ffeed6"})
    $(this).html("see more &rarr;")
}
// ###################$$$$$$$$$$$$$$$$$$$$$$$$$#############################
document.querySelector(".but5").onmouseover = function(){
    $(this).css({"background":"#ffeed6" , "color":"#000"})
    $(this).html("see more &darr;")
}
document.querySelector(".but5").onmouseout = function(){
    $(this).css({"background":"none" , "color":"#ffeed6"})
    $(this).html("see more &rarr;")
}
// ###################$$$$$$$$$$$$$$$$$$$$$$$$$#############################
document.querySelector(".but6").onmouseover = function(){
    $(this).css({"background":"#ffeed6" , "color":"#000"})
    $(this).html("see more &darr;")
}
document.querySelector(".but6").onmouseout = function(){
    $(this).css({"background":"none" , "color":"#ffeed6"})
    $(this).html("see more &rarr;")
}
// ###################$$$$$$$$$$$$$$$$$$$$$$$$$#############################