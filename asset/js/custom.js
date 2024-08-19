
// common

const siglyHover =  gsap.timeline({
    paused:true,
    onComplete:function(){
        hoverFlag = 0;
    }
})

siglyHover
.to('.link-singly .bar',{width:0})
.set('.link-singly .bar',{right:0,left:'auto'})
.to('.link-singly .bar',{width:'100%'})


let hoverFlag = 0;
$('.link-singly').mouseenter(function(){

    
    setTimeout(function(){
        if(hoverFlag == 0){
            siglyHover.restart()
            hoverFlag = 1;
        }
    },500)
})

// $('.link-singly').mouseout(function(){
//     siglyHover.reset()
// })

// gsap.to('.vision-area',{
//     scrollTrigger:{
//         trigger:".sc-vision",
//         start:"0% 0%", //트리거기준 / 윈도우기준 두지점이 만나면 실행
//         end:"+=120%", //  ''만나면 종료
//         markers:true,
//         scrub:10,//뭉대다
//         pin:true,
//     },
//     scale:2,
// })


// header 언어선택옵션

$(".sc-header .language-btn").click(function(e){
    $(".sc-header .lang-list").toggleClass("on")
    e.preventDefault();
})


// 비디오 페럴렉스 애니메이션

const videoAni = gsap.to(".video-bg-area",{
        scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 0%", //트리거기준 / 윈도우기준 두지점이 만나면 실행
        end:"100% 0", //  ''만나면 종료
        // markers:true,
        scrub:0,//뭉대다
    },
    yPercent:40,

})


// 첫 로딩 영역 애니메이션
box = gsap.timeline({
    defaults:{y:-80, stagger:0.1, duration:1,opacity:1,
    },
}) 

box
.to('.sc-visual .group-title .main-title',{},"0.3")
.to('.sc-visual .order-area .link-pour',{},"-=0.8")
.to('.sc-visual .order-area .link-singly',{},"-=0.8")
.to('.sc-visual .spec-list .spec-item:nth-child(1)',{},"-=0.6")
.to('.sc-visual .spec-list .spec-item:nth-child(2)',{},"-=0.8")
.to('.sc-visual .spec-list .spec-item:nth-child(3)',{},"-=0.8")



// link-singly 애니메이션




$(".link-singly").mouseenter(function(){

    let singlyBtn= $(this).find('.link-singly-underline')
    
    singlyBtn.stop(true,false)
    .animate({left:'-10%',}, 150, 'linear')
    .animate({left:'-20%',}, 100, 'linear')
    .animate({left:'-30%',}, 40, 'linear')
    .animate({left:'-40%',}, 8, 'linear')
    .animate({left:'-100%',}, 70, 'linear')
    .delay('500')
    .animate({left:'100%',},0)
    .animate({left:'90%',},150,'linear')
    .animate({left:'80%',},10,'linear')
    .animate({left:'70%',},10,'linear')
    .animate({left:'60%',},10,'linear')
    .animate({left:'20%',},40,'linear')
    .animate({left:'0%',},100,'linear')
});



// 자동차 리스트 스와이퍼






var swiper = new Swiper(".delivery-swiper", {
    slidesPerView:'auto',
    centeredSlides:'true',
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
});

// 이야기영역 리스트들 스와이퍼
var swiper = new Swiper(".stories-swiper", {
    slidesPerView:'auto' ,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
  });

// 비전 애니메이션


gsap.set('.sc-vision',{'background-position':`center - ${$(window).height()/2}`})
const visionBgAni1 = gsap.to(".sc-vision",{
    scrollTrigger:{
        trigger:".sc-vision",
        start:"0% 100%", //트리거기준 / 윈도우기준 두지점이 만나면 실행
        end:"100% 0", //  ''만나면 종료
        // markers:true,
        scrub:0,//뭉대다
    },
    'background-position':'center -100px',


})

// 비전 페럴렉스



$('[data-scroll]').each(function(i,element){

    y = $(this).data('scroll');
    // child = $(this).find('img');

    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"0% 100%", //트리거기준 / 윈도우기준 두지점이 만나면 실행
            end:"100% 0%", //  ''만나면 종료
            // markers:true,
            scrub:0,//뭉대다
        },
        yPercent:y
    })


 })

// const visionBgAni2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".sc-vision",
//         start:"0% 50%", //트리거기준 / 윈도우기준 두지점이 만나면 실행
//         end:"100% 80%", //  ''만나면 종료
//         markers:true,
//         scrub:0,//뭉대다
//     },
//     'clip-path':'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',stagger:1,

// })

const videoBgAni2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-vision",
        start:"0% 35%", //트리거기준 / 윈도우기준 두지점이 만나면 실행
        end:"120% 80%", //  ''만나면 종료
        // markers:true,
        scrub:0,//뭉대다
    },
})

.to('.sc-vision .text-front',1,{
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',stagger:1,
})
.to('.sc-vision .vision-area',3,{
    opacity:0,
})



// contact us 이메일 포커스 애니메이션

$(".email-box").focus(function(){
    $(".disappear-animate")
    .addClass("appear")
    .stop()
    .animate({
        top: 0,
        opacity:1
    },700,function(){

    })
})

// footer 언어옵션 리스트 열기
$(".lang-area button").click(function(){
    $(".lang-area .lang-box").toggleClass("on");
})


// 사이드바 열기
$(".hamburger-btn").click(function(e){
    e.preventDefault();
    $('.sc-sidemenu').addClass('active');
    $("body").addClass("no-scroll")

})



// 사이드바 닫기
$('.side-close-btn').click(function(){
    $('.sc-sidemenu').removeClass('active');
    $("body").removeClass("no-scroll")
});




// 사이드바 서브메뉴펼치기 애니메이션


let moreView = $(".short-group .more-view-btn")

moreView.click(function(){

    let thisMoreView = $(this).siblings(".short-sub-box");

    thisMoreView.toggleClass("on");
    $(this).toggleClass("on");
    moreView.siblings(".short-sub-box").not(thisMoreView).removeClass("on");
    $('.short-group .more-view-btn').not($(this)).removeClass("on");
})


