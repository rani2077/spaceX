# 개요

## 1. 프로젝트 정보

- 제목 : spaceX 리뉴얼
- 기술스택 : gsap, swiper, scss
- 기기지원 : 데스크탑

## 2. 프로젝트 중점

- 정적이었던 기존의 홈페이지 개선 하여 더 풍부한 사용자 상호작용 효과를 적용하였습니다.
- gsap의 스크롤 트리거를 이용하여 패럴렉스 등의 여러 동적 효과를 냈습니다.
- 스페이스엑스의 여러 제품군들을 쉽게 비교하여 볼 수 있도록 스와이퍼 메뉴를 적용하였습니다.

## 3. 사이트 전체 모습 비교

<figure>
  <img src="https://github.com/user-attachments/assets/8e935c19-b46a-4b69-ac5e-87e76dcd6bf8">
  <br><figcaption> 좌(spaceX공식 홈페이지의 모습) 우(리뉴얼한 모습)</figcaption>
</figure>


---

# 사용기술

## 1. gsap애니메이션

- 페이지로딩시 빈화면에서 글씨가 올라오는 애니메이션을 gsap로 구현하였다.
- gsap의 timeline 기능을 이용하여 공통으로 들어가는 속성을 하나로 묶은 뒤 애니메이션 각 요소의 애니메이션이 겹치도록 시간을 조절하였다.

![3](https://github.com/user-attachments/assets/92f6d77f-dda3-442e-8af3-964ba2cb2389)


- 사용코드

```jsx
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
```

## 2. 버튼 애니메이션 한번만 작동

- 스크립트로 애니메이션을 만들었을때 마우스가 요소를 벗어났다 다시 들어올때 애니메이션의 작동이 끊기는 문제를 해결하기 위해 hoverFlag 라는 변수를 만들어 활용하였다.
- 애니메이션의 작동조건을 hoverFlag = 0 으로 설정하였고 애니메이션 작동 중에는 hoverFlag의 값을 1이 되고 애니메이션이 끝나면 다시 0이 되도록 만들어 마우스가 여러번 들어갈때 애니메이션이 반복되는 문제를 해결하였다.

![4](https://github.com/user-attachments/assets/e9488b7a-8aab-4478-854c-f3dec7d99c04)


- 사용코드

```jsx
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
```

## 3. 점점 차오르는 글씨 애니메이션

- gsap의 scrollTrigger와 css속성중 clip-path를 이용하여 마우스 스크롤을 내림에 따라 반투명한 글씨를 흰색 글씨가 채워가도록 만들었다.


[클릭시 시연 영상 확인](https://github.com/user-attachments/assets/79d7612d-0a08-4bbb-8264-a49faf9b0b16)
    
- clip-path란 요소의 일부분을 원하는대로 잘라낼 수 있는 css 속성이다. 수동으로 값을 조절하기에는 상당히 어려움이 있기 때문에 도움이 되는 사이트를 참고하며 이용하는것이 좋다.
- [사이트 링크 클릭시 이동](https://bennettfeely.com/clippy/)에서 미리 만들어져 있는 도형을 고르거나 자신이 직접 마우스를 조작하여 조절한 후 밑의 css 값을 사용하면 된다



- 사용코드

```jsx
const videoBgAni2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-vision",
        start:"0% 35%", //트리거기준
        end:"120% 80%", //  ''만나면 종료
        // markers:true,
        scrub:0,
    },
})
.to('.sc-vision .text-front',1,{
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',stagger:1,
})
.to('.sc-vision .vision-area',3,{
    opacity:0,
})
```

## 4. swiper 꾸미기

- swiper의 이전 다음 버튼과 하단 게이지바를 꾸미기 위해 분석해본 결과 버튼의 경우 <div class="swiper-button-prev">의 after에 화살표아이콘이 들어가 있는 것을 알 수 있었다.
- 그중 인상적이엇던것은 화살표의 크기를 font-size로 제어하고 있었다는것이었다. 하단 게이지바는 <div class="swiper-pagination-progressbar"> 로 구성되어 있었다.
- 사용코드

```jsx
.sc-delivery .swiper-button-next,
.sc-delivery .swiper-button-prev{
    width: 110px;
    height: 112px;
    background: transparent;
    border-radius:50%;
    border:1px solid rgba(255,255,255,0.3);
    transition:background 400ms;
    --swiper-theme-color:#fff;
}
.sc-delivery .swiper-pagination-progressbar{
    left: 100px;
    width: calc(100% - 200px);
    height: 1px !important;
    background: rgba(255,255,255,0.2);
    bottom:35px;
}
```

## 5. 패럴렉스 이미지

- 패럴렉스를 적용하기위해 gsap의 scrollTrigger와 yPercent를 이용하였다.
- yPercent의 경우 인라인스타일로 transform이 적용되어 기존의 값이 밀리게 되었다. 이를 해결하기 위해 <div>로 감싸주고 부모요소에 transform을 적용하여 해결하였다

![6](https://github.com/user-attachments/assets/c9a7680f-b4c0-49a8-8e74-976b16bb3cfd)


- 사용코드

```jsx
$('[data-scroll]').each(function(i,element){
 
    y = $(this).data('scroll');
 
    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"0% 100%", 
            end:"100% 0%", 
            scrub:0,
        },
        yPercent:y
    })
 })

```

## 6. checkbox 꾸미기

- `<input type="checkbox">`는 디자인이 적용되지 않아 <label>을 만들어 checkbox와 연결한 후 <label>을 꾸며준 뒤 `<input type="checkbox">`를 숨겨 해결할 수 있다.
- 체크표시된 후를 꾸미기 위해서 css의 의사클래스인 :checked를 사용하여 따로 선택할 수 있다.

[테스트 가능한 codepen링크](https://codepen.io/abllmjdn-the-builder/pen/oNRgwzm)


- 사용코드

```css
.sc-contact .email-area .checkbox{
    display:none;
}
.sc-contact .email-area .checkbox + label{
    position: absolute;
    border-radius:none;
    width: 24px;
    height: 24px;
    background: transparent;
    border:1px solid #1b1b1b;
}
.sc-contact .email-area .checkbox:checked + label{
    background-color: #fff;
}
.sc-contact .email-area .checkbox:checked + label::after{
    background-image: url(../images/check-icon.png);
    background-size:cover;
    content:'';
    position: absolute;
    width: 13px;
    height: 13px;
    z-index:1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

```
