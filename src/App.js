import logo from './logo.svg';
import './App.css'; // 페이지의 디자인이 담겨 있음
import { useState } from 'react';//리액트 제공 기본 함수
//이 부분에서 내용을 설정

//사용자 정의 태그를 만들기 위해서는 함수를 생성..반드시 대문자로 시작
function Header(props){//<컴포넌트> == 흔히 말하는 사용자 정의 태그!
  console.log('props',props,props.title)

  return <header> 
    <h1><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1> 
  </header>
}

function Nav(props){
  const lis = []
  for( let i = 0 ; i < props.topics.length; i++){
    let t = props.topics[i]
    lis.push(<li key = {t.id}>

      <a id = {t.id} href={'/read/' + t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}> {t.title} </a>

    </li>)

  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {//다음 함수가 화면을 구성하는 것임 
 // const _mode = useState('WELCOME'); // 지역변수인 mode를 usestate를 통해서 상태로 만듦
 // const mode = _mode[0];
 // const setMode = _mode[1];

  const [mode, setMode] = useState('WELCOME');//축약형
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]

  let content = null;

  if(mode === 'WELCOME'){
    content = <Article title = "Welcome" body = "Hello, Web"></Article>
  }else if(mode === 'READ'){
    let title, body = null;

    for(let i = 0 ; i < topics.length ; i++){
      if(topics[i].id == id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Article title = {title} body = {body}></Article>
  }

  return (
    <div className="App">
      <Header title = "REACT" onChangeMode = {()=>{
        setMode('WELCOME');
      }}></Header>
      
      <Nav topics = {topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id)
      }} ></Nav>

      {content}
    </div>

  );//nav는 이동하는 영역 article은 본문 표시 영역
}

export default App;
