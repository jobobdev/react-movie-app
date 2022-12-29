import { useState, useEffect } from "react";

function App() {
  const [count, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []); // empty array => 리액트가 변화를 감지할 것이 없으므로 한번만 실행하게 됨.
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]); // === if keyword changes, run this code
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [count]);
  useEffect(() => {
    console.log("i run when 'keyword' & 'counter' changes");
  }, [keyword, count]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{count}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
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
