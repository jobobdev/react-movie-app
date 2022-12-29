import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// API를 사용한다고 가정하자.
// 첫 번째 component render에서 API를 call하고
// 이후에 state이 변할 때 그 API에서 데이터를 또 가져오고 싶지 않을 것.
// 그러기 위해서는 API 같은 것들을 오직 첫 번째 render에서만 작용하도록 해야 한다.
// 그렇지 않으면 모든 코드가 전부 다시 렌더링 된다. API포함.
// 그럴 때 useEffect를 사용한다.
// function useEffect(오직 한 번 실행할 함수, [] )

// 이런 상황도 있을 수 있다.
// 예를 들어, 검색을 할 땐 검색창에 입력할 순간마다 state change가 발생하므로 re-rendering이 될 텐데,
// click me 버튼을 누를 때도 마찬가지로 re-rendering이 된다.
// 그렇게 되면, 검색을 하고 나서 click을 누를 때마다 검색이 새로 되는 말도 안되는 상황이 발생한다.
// 그 때 useEffect의 두번 째 인자를 사용한다. [] 안에 update되는지를 감지할 변수를 넣는다.

// useEffect를 컴포넌트를 create할 때 사용한다면,
// react는 컴포넌트를 destroy할 때에도 함수를 실행 하게 해준다.
// useEffect의 첫 인자인 함수 내에 함수F를 리턴해주면 그 F는 컴포넌트가 destroy가 될 때 실행된다.
// 언제 쓰느냐? 분석결과 API 요청허거나, 어떤 컴포넌트가 사라졌을 때 특정한 event listner를 사라지게 하는 등 사용 가능하다.

//.map(함수)은 모든 item에대해 함수를 적용한다
//[].map((item) => item.toUpperCase) 처럼 map 안에 있는 첫 인자는 []안의 item을 가리킨다

//react-router-dom은 항상 공식 웹사이트에서 최신 버전을 확인하고 그 안내를 따르자. 사용법이 강의와 달랐음.
