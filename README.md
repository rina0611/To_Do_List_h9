# Javascript, React 스터디 시작. 
  
  오랜만에 Markdown 사용법도 알아봤다. 
  
  --><a>[마크다운 사용법](https://heropy.blog/2017/09/30/markdown/ "마크다운 사용법 총 정리")</a>

  <Strong> 최종 목표는 To do List 만들기 </Strong>
  
  근데 한 일주일만에 완벽한 To do List을 만드는건 무리라서 간단하게 공부용으로 만들어보고자 한다.

  생활 코딩 - (React, Javascript, HTML, WEB) 강의 영상을 보면서 공부했고, 물론 따로 모르는 것이나 더 알고 싶은것은 구글 검색을 병행하면서 진행했다.

  (주의) 그냥 의식의 흐름대로 정리한 것이라 다소 정신이 없을 수 있습니다. (주의)

---
 ### 웹 페이지를 만들기 위한 기본 지식

 사실 웹 페이지를 만들어 본적은 없어서, 그에 따른 기본 지식은 없다.  학교에서 가르쳐 줬으면 얼마나 좋을까. 암튼.

 웹 페이지를 만들기 위해서는 `Html`, `CSS`, `Javascript` 이 3가지를 알고 있다면 만들 수 있다. 
 
 1. Html : 웹 페이지의 큰 뼈대를 구성.

 2. CSS : 색깔, 글씨체, 모양 등 디자인 담당.

 3. JavaScript : 웹 페이지의 동작을 담당.

  
 자세한 설명은 인터넷에 찾아보면 많이 나오니, 대충 설명을 잘 해놓은 곳을 첨부하자면 <a>[여기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript "JavaScript 가 뭔가요? + html,css 간단설명")</a>다.

 아마 장기적으로는 Javascript와 React를 병행으로 공부를 해야할 듯 싶다. 

 #### Node.js
  
  Node.js을 차근차근 공부하면서 좋은 참고가 될 만한 사이트
  1. <a>[구름 에듀](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/21762/node-js-%EB%9E%80, " Node.js란")</a>
  
  `구름IDE `를 사용하여 별도의 설치 과정 없이 바로 실습을 시작할 수 있다는 장점이 있다. 위의 url로 가보면 Javascript로 간단한 실습이 가능하다.  예전에 아이패드 구매를 알아보면서 구름IDE를 알게 되었다. 환경에 상관없이 인터넷만 연결되있다면 간단한 코딩 정도 해 볼 수 있는 곳이다. 

  #### Deno 
  이건 좀 번외 이야기이다. 
  
  Node.js를 만든 Ryan Dahl이 이번에 새로 만든 Node.js 업그레이드 버전(?!) 
 
  2019년도 Node.js 컨퍼런스에서 자기가 만든 Node.js 의 단점에 대해 생각해 보았다고 node module, npm 중앙서버, 보안취약 이라는 단점에 대해 보완해보겠다고 만든 프로젝트이다. 이름은 Deno, 공룡 이미지가 귀엽다.

  그래서 디노는 npm, node modules, packeage.json이 없다고 한다. 
  
 디노에서는 어떤 라이브러리를 import 하고 싶다면 url를 추가하면 된다. 그래서 깃헙, 깃햅, 빗버킷 등에서 코드를 자유롭게 가져올 수 있다는 장점? 이 있다.

  뭐 아직 nodejs 도 잘 모르지만, Deno는 워낙 새로운 기술이라 일단 알아놓으면 좋을 거 같아 언급만 하고 넘어가도록 한다.

  올해 2020년 여름에 Deno 버전 1.0을 release 하는것을 목표라고 한다. 
   
  Deno를 알게 된 경로 -> <a>[Deno간단설명](https://www.youtube.com/watch?v=6MeB-IWq1I4, "Deno는 과연 NodeJS를 대체할 수 있을까?")</a>

  
  ---
 ### 리액트란?? 
  갑분리~ 

  리액트는 페이스북에서 제공하는 프론트엔드 라이브러리이다.

 #### JSX and DOM
  1. JSX는 JavaScript+XML 이 라는 뜻으로 유사 자바스크립트이다. 
  
React 라이브러리에서 UI를 구성할 때 사용하는 구문으로 페이스북에서 제공하는 언어이다.  Javascript의 확장판이라고 생각하면 될듯하다. 자바 스크립트와 비슷하지만 문법이 다르다.
  
 JSX 로 작성한 스크립트는  `;` , `/` 를 굳이 쓰지 않아도 Create-reat-app이 컴파일 할 때 Javascript로 변환해 준다고 한다.  
 
  2. DOM 
   
   우선 DOM은 Document Object Model 의 약자로, 그대로 직역하면 문서객체모델이다. 무슨 말인지는 일단 넘어감. 나중에 알아봐야징

    >  ReactDOM.render(<App />, document.getElementById('root'));
   이런 코드가 있길래 일단 언급하고 넘어감. 


  #### > 리액트의 특징
  1. 컴포넌트 (Component) 

  리액트는 컴포턴트 기반의 라이브러리이다. 

  아주 작은 요소들을 컴포턴트로 만들어놓고, 태그 형식으로 언제든 가져다 쓸수 있다. 재사용할 수 있기 때문에 효율적이다. 

  게다가 코드가 간단해지기 때문에 파악하기가 상대적으로 쉽고, 복잡도를 낮출 수 있다. 

  2. Virtaul DOM 

 가상의 돔. 리액트는 가상의 Dom 을 만들어서 변경 사항이 있으면 전체를 새롭게 만드는것이 아니라 변경된 부분만 진짜 DOM에 반영하는 방식으로 작업을 수행한다. 그럼으로서 앱의 효율성과 속도를 높일 수 있게 된다고 한다. 

---
---
### Language - html, javascript 

### CRUD
    1. Create
    2. Read
    3. Update
    4. Delete

### html 복습

html 에서 항상 기본 틀은 html, head, body로 이루어져 있다.

    <html>
        <head>
            <body>
            ...
            </body>
        </head>
    </html>

그리고 그

    <body>... </body>
 안에서는, 
제목을 나타내는 header, h1, h2 뿐만아니라,
내용이나, 글로 분류하는 article, nav, script 를 쓴다.

    <header></header>
    <body></body>
    <head></head>
    <h1></h1>
    <h2></h2>
    <nav></nav>
    <article></article>
    <script></script>

이렇게 여러 tag로 분류하는 이유는 웹에서 검색엔진에 걸릴 확률을 높게 만들기 위해서이다.

    

## Javacript 기초
 웹 브라우저에서 오른쪽 클릭 - 검사 - console

    alert('') - 경고창을 띄움
    prompt('') - 사용자의 입력값을 받음
    "erere".length - data 글자수 출력
    document.write() - 화면창에 출력, print 같은것이라고 생각
    Math.random()
    Math.max()

등등, 다양한 함수들을 적용 가능하다. 
그리고 javascript는 <script></script>안에서 쓸 수 있다는 것을 알았다.

그리고 javascript에서 tag를 element라고 한다.
검색할 떄, tip -> javacript element


### Data Type
    string - "1"
    number -  1
    variable - var
        var a
        var b

### 변수 사용하기

변수 정의
    var 변수이름;

문자열 안에서 변수 집어넣기
    "문자열 ${변수} 문자열"

    ex)
    var title = "Welcome"
    <header>
        <h1><a href="index.html">${title}</a></h1>
        Open class web! -from egoing
    </header>


    <html>
        <head></head>
        <body>
        

            <script>
                var title = "WEB";
                var headerTag=`
                    <header>
                        <h1><a href="index.html">${title}</a></h1>
                        Open class web! -from egoing
                    </header>`;
                    
                var navTag=`
                    <nav>
                        <ol>
                            <li><a href="1.html">HTML</a></li>
                            <li><a href="2.html">CSS</a></li>
                            <li><a href="3.html">JavaScript</a></li>
                        </ol>
                    </nav>`;
                var articleTag =`
                    <article>
                        <h2>Welcome</h2>
                        Hello, Web
                    </article>`;

                document.write(
                    headerTag+
                    navTag+
                    articleTag
                )

            </script>        

    </body>
    </html>



#### react에서 변수란?
    사용자 정의 tag를 만들 수 있다.
    ex)
    <headerTag></headerTag>
    <navTag></navTag>
    <article></aritcle> 

### 함수 사용
변수의 중복으로 인한 문제를 해결하기 위하고, 재사용을 편리하게 하고, 커스터마이징 하기 위함이다.


    <script>
            function sum(v1,v2){
                return v1+v2;
            }
            sum(1,2);
    </script>

    <함수 정의>
    function 함수이름(변수){
        alert,return...
    }

함수와 변수 사용

    <script>
            function headerTag(title,subtitle){
                return `<header>
                    <h1><a href="index.html">${title}</a></h1>
                    ${subtitle} -from egoing
                </header>`;
            }
            
            var navTag=`
                <nav>
                    <ol>
                        <li><a href="1.html">HTML</a></li>
                        <li><a href="2.html">CSS</a></li>
                        <li><a href="3.html">JavaScript</a></li>
                    </ol>
                </nav>`;
            function articleTag(title, subtitle){
                return `
                    <article>
                        <h2>${title}</h2>
                        ${subtitle}
                    </article>`;
            }
            
            document.write(

                headerTag('HTML','World Wide Web')+
                headerTag(' Web','Open Class')+
                navTag+
                articleTag('Welcom','Hello Web')
            )
            

    </script>



---


### Event Programming
예전에 java 프로그래밍 할 떄 봤던 event programming 이다.
그 때랑 개념을 비슷한 거 같다. 
    

### event 정의 및 사용
    event

    input< type= " ", value= " ", 속성값="javascript(event)">
    <a href="1.html", onclick="event.preventDefault()"></a>

input 안에 들어가는 매개변수는 다양하고, 많다.
그리고 속성값 안에는 반드시 javascript(event)가 들어간다.

    ex) 
    <body>
    <script>
        var a=1;
        var b=2;
        console.log('hi'); 
        function handler(e){
            console.log(e.target);
        }
        //debugger;
    </script>
    <input 
        type="button" 
        value="hi" 
        onclick="
            //debugger;
            handler(event);"
    >
    <input 
        type="text"
        onchange="alert('changed');"
    >

### javascript 디버깅
디버그는 프로그래밍에 있어 없어서는 안될 존재 같다.
사실 그동안 사용을 잘 안 해왔는데, 그래도 모르면 안되는 개념이다.

    debugger;

코드 중간에 쓰고 웹에 띄우면, 그 위치에서 멈춰서, 상태창을 띄워준다.

그리고 매틀랩 같은 기능을 하나 알아냈다.
'watch'라는 탭에서 변수를 입력하면, 그 변수에 할당된 값을 알 수 있다.

### javascript 비교연산자
    <script>
            consloe.log(true, false)
            console.log("1===1",1===1);
            console.log("1>2", 1>2);    
    </script>

### javascript 조건문
    <script>
        if(boolean){

        }
    </script>

prompt와 조건문을 사용해서 간단한 비밀번호를 물어보는 코드

    <html>
    <body>
        <script>
        var pass='var';
        var user_pwd=prompt('password?');

        if (user_pwd===pass){
            document.write('password 확인')
        }
        else{
            document.write('비밀번호는 var')
        }
        

        </script>
    </body>
    </html>

### javascript 반복문

while문 사용

    var i=0;
    while(i<3){
        console.log(i);
        i=i+1
    }

### javascript 배열

javascript에서 배열과 객체가 느낌이 거의 비슷하다고 한다.

#### 배열 정의
    var junsu_is = ['xia','fairy','tanpopo','leo','genius'];
    var junsu_birth = [1,2,1,5];

변수 type에 상관없이 배열에 집어 넣을 수 있다.

    var junsu = ['xia','fairy','tanpopo','leo','genius',1,2,1,5];

#### 배열의 원소 부르기
    var junsu = ['xia','fairy','tanpopo','leo','genius',1,2,1,5];
    junsu[1]

>> fairy

javascript도 배열 시작은 index은 0 부터이다.

#### 반복문으로 배열의 원소 꺼내기
    var junsu_is = ['xia','fairy','tanpopo','leo','genius'];

    document.write('<ol>');
    var i=0;
    while(i<junsu_is.length){
        document.write(`<li>${junsu_is[i]}</li>`);
        i=i+1
    }        
    document.write('</ol>');

>>1.xia

>>2.fairy

>>3.tanpopo

>>4.leo

>>5.genius

### Javascript 객체

순서가 있는 데이터는 배열에 저장하고, 순서가 없는 데이터는 객체에 저장한다.
뭔가 javascipt배열과 비슷하다고 하는데, 나는 python의 사전과 비슷하다고 생각한다.

#### 객체 정의
    var role={ sue:cjes, work:sosoksa}

#### 객체 부르기
    role.sue
>>cjes

#### 배열 안에 객체 정의

    var contents = [
                    {id:1, title:'html', decs:'HTML is ...'},
                    {id:2, title:'css', decs:'CSS is ...'},
                    {id:3, title:'javascript', decs:'Javascript is ...'},
                ];

### SPA(Single Page Application)

하나의 페이지 안에서 내용물이 바뀌는 상태이다. 
서버관리가 쉽고, 네트워크가 빨라진다는 장점이 있기 때문에 대세가 되었다고 한다.


#### Convert document.write to innerHTML

document.write를 사용했을 때,

    document.write(

                headerTag(' Web','Open Class')+
                navTag+
                articleTag('Welcome ','Hello Web')
            )
    

id 값이라는 것을 추가하여 target을 추가 하고

    <div id="app"></div>

id 값이 app인 태그 내부에 다음 html 코드를 삽입한다.

    document.querySelector('#app').innerHTML=(
            headerTag(' Web','Open Class')+
            navTag+
            articleTag('Welcome ','Hello Web')
        );

#### render함수를 정의하고, mode에 따라서 application 상태 바꾸기
render 함수

    var mode='welcome';

    var _articleTitle='';
    var _articleDesc='';
    if (mode==='welcome'){
        _articleTitle="Welcome";
        _articleDesc="Hello Web";
    }
    else if (mode==='read'){
        _articleTitle="HTML";
        _articleDesc="HTML is hypertext"
    }
    document.querySelector('#app').innerHTML=(
            headerTag(' Web','Open Class')+
            navTag+
            articleTag('_articleTitle ','_articleDesc')
        )

#### if문을 사용하여 mode를 바꾸어 SPA 구현
        
    <html>
        <head></head>
        <body>
            <div id="app"></div>
            <script>
                function headerTag(title, sub){
                    return `
                    <header>
                        <h1>
                            <a 
                                href="index.html"
                                onclick="
                                    mode = 'welcome';
                                    render();
                                    event.preventDefault();
                                "
                            >${title}</a>
                        </h1>
                        ${sub}
                    </header>`;
                }
                var navTag = `
                <nav>
                    <ol>
                        <li>
                            <a href="1.html"
                                onclick="
                                    mode = 'read';
                                    render();
                                    event.preventDefault();
                                "
                            >HTML</a></li>
                        <li><a href="2.html">CSS</a></li>
                        <li><a href="3.html">JavaScript</a></li>
                    </ol>
                </nav>
                `;
                function articleTag(title, desc){
                    return `
                        <article>
                            <h2>${title}</h2>
                            ${desc}
                        </article>
                    `;
                }
                var mode = 'welcome';
                function render(){
                    var _articleTitle = '';
                    var _articleDesc = '';
                    if(mode === 'welcome'){
                        _articleTitle = 'Welcome';
                        _articleDesc = 'Hello, WEB';
                    } else if(mode === 'read') {
                        _articleTitle = 'HTML';
                        _articleDesc = 'HTML is ....';    
                    } 
                    document.querySelector('#app').innerHTML = (
                        headerTag('WEB', 'World Wide Web!!!')+
                        navTag+
                        articleTag(_articleTitle, _articleDesc)
                    );
                }
                render();
            </script>
            
            
    
            
    
        </body>
    </html>


#### 배열,객체를 사용하여 함수 navTag()를 재정의 후 SPA 구현
    <html>
    <head></head>
    <body>
        <div id="app"></div>
        <script>
            function headerTag(title, sub){
                return `
                <header>
                    <h1>
                        <a 
                            href="index.html"
                            onclick="
                                mode = 'welcome';
                                render();
                                event.preventDefault();
                            "
                        >${title}</a>
                    </h1>
                    ${sub}
                </header>`;
            }
            function navTag(data){
                var liTag = '';
                var i = 0;
                while(i < data.length) {
                    liTag = liTag + `
                            <li>
                                <a href="1.html"
                                    onclick="
                                        mode = 'read';
                                        render();
                                        event.preventDefault();
                                    "
                                >HTML</a>
                            </li>
                    `
                    i = i + 1;
                }
                return `
                    <nav>
                        <ol>${liTag}</ol>
                    </nav>
                    `;
            }
            function articleTag(title, desc){
                return `
                    <article>
                        <h2>${title}</h2>
                        ${desc}
                    </article>
                `;
            }
            var mode = 'welcome';
            var contents = [
                {id:1, title:'html', desc:'HTML is ...'},
                {id:2, title:'css', desc:'CSS is ...'},
                {id:3, title:'javascript', desc:'JavaScript is ...'}
            ];
            function render(){
                var _articleTitle = '';
                var _articleDesc = '';
                if(mode === 'welcome'){
                    _articleTitle = 'Welcome';
                    _articleDesc = 'Hello, WEB';
                } else if(mode === 'read') {
                    _articleTitle = 'HTML';
                    _articleDesc = 'HTML is ....';    
                } 
                document.querySelector('#app').innerHTML = (
                    headerTag('WEB', 'World Wide Web!!!')+
                    navTag(contents)+
                    articleTag(_articleTitle, _articleDesc)
                );
            }
            render();
        </script>
    </body>
</html>


#### id값을 이용하여 최종SPA 구현
        
    <html>
        <head></head>
        <body>
            <div id="app"></div>
            <script>
                function headerTag(title, sub){
                    return `
                    <header>
                        <h1>
                            <a 
                                href="index.html"
                                onclick="
                                    mode = 'welcome';
                                    render();
                                    event.preventDefault();
                                "
                            >${title}</a>
                        </h1>
                        ${sub}
                    </header>`;
                }
                function navTag(data){
                    var liTag='';
                    var i=0;
                    while(i<data.length){
                        liTag = liTag+`<li>
                                            <a href="${data[i].id}.html"
                                                onclick="
                                                    mode = 'read';
                                                    selected_id=${data[i].id};
                                                    render();
                                                    event.preventDefault();
                                                "
                                            >${data[i].title}</a>
                                        </li>`
                        i=i+1
                            
                    }
                    return `
                            <nav>
                                <ol>
                                   ${liTag} 
                                </ol>
                            </nav>
                            `;
                }
                
                function articleTag(title, desc){
                    return `
                        <article>
                            <h2>${title}</h2>
                            ${desc}
                        </article>
                    `;
                }
                var mode = 'welcome';
                var contents = [
                    {id:1, title:'html', decs:'HTML is ...'},
                    {id:2, title:'css', decs:'CSS is ...'},
                    {id:3, title:'javascript', decs:'Javascript is ...'},
                ];
                var selected_id=1;

                function render(){
                    var _articleTitle = '';
                    var _articleDesc = '';
                    if(mode === 'welcome'){
                        _articleTitle = 'Welcome';
                        _articleDesc = 'Hello, WEB';
                    } else if(mode === 'read') {
                        var i=0;
                        while(i<contents.length){
                            if(selected_id==contents[i].id){
                                _articleTitle = contents[i].title;
                                _articleDesc = contents[i].decs; 
                                break;
                            }
                            i=i+1
                        }
                          
                    } 
                    document.querySelector('#app').innerHTML = (
                        headerTag('WEB', 'World Wide Web!!!')+
                        navTag(contents)+
                        articleTag(_articleTitle, _articleDesc)
                    );
                }
                render();
            </script>
            
            
    
            
    
        </body>
    </html>



---


## Javascript 객체지향 프로그래밍
### 객체지향 프로그래밍이란?

산만한 코드를 정리정돈해주기 ,Grouping

즉 연관된 함수, 변수들을 같이 묶어서 객체로 정리해주는 것이다.

전역변수는 최소한으로 만들어주는 프로그래밍

### Javascript에서 객체

javascript는 객체 안에 함수도 들어갈 수 있다.

    var role={ 1:정수, 2:변수, 3: 함수()}

객체는 마치 독립적인 존재이다. 그렇기 때문에, 객체 안에, 또 다시 자기자신을 부르는 것은 지양한다.
그러나, 'this'를 쓴다면 가능.
이건 java배울 때 생각난다.

    var role={1:정수, 2:변수, 3.함수(){return this.1}}

this는 특히 함수나, class 안에서, 그 안에 있는 변수나 함수를 호출 할 때 쓴다.
나는 'this.'를 변수 중복을 막기 위해 쓴다고 이해했었다.

## Node.JS - React 시작하기

javascript가 nodejs를 이용하여 컴퓨터를 제어.

    ctrl+j -> terminal 

npm으로 package를 다운로드
앱 create-react-app를 다운로드.

    >npm install -g create-react-app

-g는 내 컴퓨터에 깔린다는 뜻이다.

react 개발환경 세팅
    
    >create-react-app react-app

'react-app'이라는 폴더가 생기고, react개발환경이 생겼다.

그러react-app으로 들어가 terminal에서 react-app directory로 변경한 다음

    >cd react-app
    >npm run start

그렇다면 웹서버가 새롭게 시작된다.
create react app을 통해서, 샘플 어플리케이션 웹서버가 실행되는 것이다. 
내 주소를 할당해주는데, 내가 어디로 접속하면 되는지를 알 수 있다.

## React 사용하기
jsx를 사용하여 코드를 짤 예정인데 jsx라는 것은 유사 javascript다.
그래서 grave accent를 쓰지 않거나 여러 다른 부분에서 조금 다른부분이 있다. 

react-app 안에 public이라는 폴더로 가서, 코드를 수정하며 샘플 어플리케이션 웹서버에 적용할 수 있다.

src 폴더에 index.js 

    ReactDOM.render(<App />, document.getElementById('root'));
    //ReactDOM.render(<App />, document.querySelector('#root')); 위와 같은 역할이다.

src 폴더에 App.js

    function App() {
        return (
            <div className="App">
            Hello react
            </div>
        );
    }

## tip

crtl+마우스를 올려놓기 -> 그 파일로 이동할 수 있다.

## 온라인 online 에서 React 사용하기

codesandbox 검색 후, 제일 처음 나오는 곳에서 사용할 수 있다고 한다.


## React 컴포넌트 만들기, 사용자 정의 Tag 생성

App.js 의 내용을 바꾸어 준다.

    import React,{Component} from 'react';
    import logo from './logo.svg';
    import './App.css';

컴포넌트를 만들때는 CLASS를 쓴다.

    class Subject extends Component{
        render(){
            return(
            <header>
                <h1>World wide Web</h1>
            </header>
            )

        }
    }

App도 클래스로 만들어서, 내가 만든 Subject클래스 적용한다.
이를 사용자 정의 tag를 만들었고, 적용했다고 한다.

    class App extends Component{
    render(){
            return (
            <div className="App">
                <Subject></Subject>
            </div>
            );
        }
    }

## 컴포넌트에 props 부여하기 - (react를 사용하는 이유)

<a></a> 를 살펴보면

    <a href="1grj.html">
이런식으로 href라는 함수의 매개변수 처럼 보이는 것이 있다. 
이것을 props라고 한다. 

우리가 만들 사용자 정의 tag에서 props를 만들어 보자

해당 컴포넌트 class 안에

    {this.props.이름}
을 넣어주면 된다.

    ex)
    class Contents extends Component{
        render(){
            return (
            <article>
            <h2>{this.props.title}</h2>
                {this.props.subtitle}
            </article>
            )
        }
    }


그리고 사용할 때는

    <Contents title="React" subtitle="React is..."><Contents>
이렇게 사용자 정의 tag를 사용해준다.


## React 객체
React에서 객체는 어떤 역할을 할까.
객체는 서로 다른 컴포넌트를 이어 주는 역할을 한다. 

중개자 역할.
-전역변수 같은 느낌?

그래서 전역변수처럼 정의한다.
여기서 state가 그 역할을 한다.
crome react에서 state 값을 바꿔보면, 무슨 느낌인지 올 수 있다.

    class App extends Component{

        state={
            contents:[{id:1, title:'HTML', desc:'HTML is...'},
                    {id:2, title:'CSS', desc:'CSS is...'}] 
            }
        
        render(){
            
            return (
            <div className="App">
                <Subject title="World wide Web" subtitle="Welcome"></Subject>
                <TOC data={this.state.contents}></TOC>
                <TOC data={this.state.contents}></TOC>
                <TOC data={this.state.contents}></TOC>
                <TOC data={this.state.contents}></TOC>
                <Contents title="React" subtitle="React is..."></Contents>
            </div>
            );
        }
    }



---
## Start Create react app

    npx create-react-app react-app2
    cd react-app2
    npm start

npx는 프로그림을 일회성으로 깔고, 실행시키고, 다시 삭제시킨다는 뜻이다.

기존에 react 앱이 3000 서버에 실행시켰던 것에 충돌이 일어나기 때문에, 다른 서버를 할당시켜준다.

react-app2/App.js를 수정하여서, reload하기. 

## React로 만든 웹을 배포하기
    
    ctrl+c// 서버 종료
    
### Build 후 배포하기

    npm run build 
    npm install -g serve 
    serve -s build

### 서버 닫고, 다시 시작

    ctrl+c
    npm start


### 시작

    import React,{Component} from 'react';

        class App extends Component{
        render(){
            return (
            <div className="App">
                Hello React
            </div>
            );
        }
        
        }

        export default App;


### State

props는 component 외부에서 사용하여, component를 사용하는 것에 노출되어 있음. 
state는 component 내부에서 사용하는 data, 외부에서 변경할 수 없음 
props를 이용하여, state를 변경하려고 하면 error가 난다.

### Component

Component 안에 Component가 있을 수 있고, 그 관계를 부모 Component 자식 Component라고 한다.
부모가 자식 Component를 조작하려면, 자식 Component의 props를 사용하여 조작한다.


### 주석

    ctrl+'/'

### event programming

    onClick={함수} // 약속임. 함수가 들어간다.

함수 뒤에 .bind(this) -> 함수 안에 this를 쓸 수 있다는 뜻이다.

this state값을 읽는/변경하는 방법

    this.state.mode='welcome' //값을 읽을 때,
    this.setState({mode:'welcome'})//값을 변경할 떄


## Javascript OOP(Object Oriented Programming)

java와 다른 점!! 
가장 큰 다른 점 java에서 class가 하는 역할, 객체를 찍어내는 붕어빵 틀을, javascript에서는 function이 할 수 있다.
Javascript에서의 객체를 찍어내는 함수는 '생성자 함수'라고 부른다.

    function Person(_name,_first,_second){
                this.name=_name;
                this.first=_first;
                this.second=_second;
                this.sum = function(){
                    return this.first+this.second;
                }
            }
    var p1 = new Person("heagu",12,13);
    var p2 = new Person("jinmo",45,65);

### Javascript는 이 방법을 고수하면서도, 주류 객체지향언어에서 표현하는 Class가 객체를 만들어내는 방법도 수용한다.

Javascript의 생성자 함수를 주류 Class로 변환해서 사용해보자

    class Person{
        constructor(_name,_first,_second){
            this.name=_name;
            this.first=_first;
            this.second=_second;
            this.sum = function(){
                return this.first+this.second;}
        }
    }
    var p1 = new Person("heagu",12,13);
    var p2 = new Person("jinmo",45,65);
    console.log(p1.sum(),p2.sum())

class로 객체를 찍어낼 때, class안에 constructor함수가 있는지 확인한다.
있다면, 그안의 내용으로 객체를 이룬다.

### Javascript는 복잡하지만, 유연하다.

왜 생성자 함수를 사용해서 필요할까?? 
객체마다 꼭 필요하지 않은 메서드가 있을 수 있다. sum()같은 

그렇다면, 생성자 함수에 포함하지 않고 싶고, 따로 빼낼 수 있다.
바로 prototype()으로 
Person()함수는 그 자체가 객체가 될 수 있고, 또 다른 객체를 만들 수도 있다.
헷갈리지 않기 위해 Person()의 property에 prototype()이 있는데, Person이 만든 객체를 가르킨다.
Person()에 만들어진 새로운 객체 또한, __proto__를 가지고, 자신을 만든 생성자 함수의 프로토타입함수를 가르킨다.
만약, 생성된 객체에 가지고 있느 않은 property를 호출한다면, __proto__로 찾아가서 찾도록 되어있따.

생성자함수의 prototype 정의

    function Person(_name,_first,_second){
                this.name=_name;
                this.first=_first;
                this.second=_second;
            }
    Person.prototype.sum = function(){
            return this.first+this.second;
    }

Class에서 prototype

    class Person{
        constructor(_name,_first,_second){
            this.name=_name;
            this.first=_first;
            this.second=_second;
            
        }
        sum(){
            return this.first+this.second;
        }
    }

비서같다.

Javascript는 서로 속함이 자유롭다. "this"

    kim = {name:'Kim'};
    lee = {name:'Lee'};
    function hi(){
        console.log('hi '+this.name);
    }
    hi.call(kim);
    hi.call(lee);

hi함수를 호출하는데, hi 함수의 this의 객체를 hi() 인자로 넣어준다.
hi Kim
hi Lee

    hi.bind(kim);
bind는 hi를 복사해준다. 
복사할 때 hi가 가르키는 this가 kim인 hi함수를 복사하는것이다.

    var KimsHi = hi.bind(kim);
    KimsHi();
hi Kim


### constructor

    p1.constructor

p1을 생성한 객체를 알려준다.

### 객체를 이용해서 구현한 코드.

    class Subject extends Component{
        render(){
            return (
            <header>
                <h1><a href="" 
                        onClick={
                            function(_event){
                            _event.preventDefault();
                            {this.props.onChangePage()}
                            }.bind(this)
                        }>{this.props.title}</a></h1>
                {this.props.subtitle}
            </header>
            )
            }
    }
    
    <Subject title="World wide Web" subtitle="Welcome"
            onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}></Subject>
    
여기서 보면, App 컴포넌트에서 Subject 태그의 props에서 onChange를 추가하여, 이벤트가 발생하였을 때, 상황을 추가하였다. 

그리고 Subject라는 사용자정의 컴포넌트로 가서, 이벤트가 발생할 때, 외부에서의 props를 받아, onChangePage함수를 실행시켰다.-> onChangePage();

props로 받아오는 것은, Subject의 맥락을 보다 App의 맥락 안에서, 새롭게 만든 fucntion(_event){}으로 인해, Subject을 외부에서  handling 했다.


### 컴포넌트 이름 지을때, 첫 글자는 항상 대문자 (주의)

    class Subject extends Components{}
    class App extends Components{}
    ...

---

## 완성본


    import React,{Component} from 'react';

    class Subject extends Component{
    render(){
        return (
        <header>
            <h1><a href="" 
                    onClick={
                        function(_event){
                        _event.preventDefault();
                        this.props.onChangePage()
                        }.bind(this)
                    }>{this.props.title}</a></h1>
            {this.props.subtitle}
        </header>
        )
        }
    }

    class TOC extends Component{
    render(){
        var tags=[];
        var con= this.props.data;
        var i=0;
        while(i<con.length){
        tags.push(<li key={con[i].id}><a href="" 
                                onClick={
                                    function(id,_event){
                                    _event.preventDefault();
                                    this.props.onChangePage(id);
                                    }.bind(this,con[i].id)
                                } >{con[i].title}</a></li>)
        i=i+1
        }
        return (
        <nav>
            <ol>
            {tags}  
            </ol>
        </nav>
        )
    }
    }


    class Contents extends Component{
    render(){
        return (
        <article>
        <h2>{this.props.title}</h2>
            {this.props.subtitle}
        </article>
        )
    }
    }


    class App extends Component{

    state={
        contents:[{id:1, title:'HTML', desc:'HTML is...'},
                {id:2, title:'CSS', desc:'CSS is...'},
                {id:3, title:'Javascript', desc:'Javascript is...'}],
        mode:'welcome',
        selected_id:2
        }
    
    render(){
        var _atitle,_adesc=''
        if (this.state.mode==='welcome'){
            _atitle="Web"
            _adesc='Welcome'
        }else if(this.state.mode==='read'){
            var j=0;
            while(j<this.state.contents.length){
            if(this.state.selected_id===this.state.contents[j].id){
                _atitle=this.state.contents[j].title;
                _adesc=this.state.contents[j].desc;
                break;
            }
            j=j+1;
            }
        }
        
        return (
        <div className="App">
            <Subject title="World wide Web" subtitle="Welcome"
                onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}></Subject>
            
            <TOC data={this.state.contents} 
            onChangePage={function(id){
                            this.setState({mode:'read',
                                        selected_id:id});
                            }.bind(this)}></TOC>
            <Contents title={_atitle} subtitle={_adesc}></Contents>
        </div>
        );
    }
    }


    export default App;






   