# To_Do_List_h9
  Javascript, React 스터디 시작. 
  
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

    



   