// import styled from "styled-components"; //styled-component 임포트

// // 두 박스의 부모 div
// const Parent = styled.div`
//   display: flex;
// `;

// // div에 적용할 css 지정
// const Box1 = styled.div`
//   background-color: red;
//   width: 300px;
//   height: 300px;
// `;

// // Box1의 css를 그대로 사용하면서 props로 받은 스타일 지정, 추가
// const Box2 = styled(Box)`
//   background-color: ${(props) => props.bgColor};
//   border-radius: 150px;
// `;
// function App() {
//   return (
//     <Parent>
//       <Box1 />
//       <Box2 bgColor="yellowgreen" />
//     </Parent>
//   );
// }

// export default App;

// import styled from "styled-components";

// 버튼에 적용할 스타일
// const Button = styled.button`
// margin-right: 5px;
// padding: 10px 20px;
// background-color: skyblue;
// color: white;
// border: none;
// `;

// function App() {
// return (
//   <>
//     <Button>Button</Button> // 스타일이 지정된 Button
//     <Button as="a" href="https://www.naver.com"> // Button의 스타일을 그대로 사용하지만 a태그
//       A
//     </Button>
//   </>
// );
// }

// export default App;

// import styled from "styled-components";
// const Input = styled.input.attrs({ disabled: true, value: "입력불가" })`
//   height: 30px;
//   color: grey;
// `;

// function App() {
//   return (
//     <>
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//     </>
//   );
// }

// export default App;

// import styled from "styled-components";
// const Input = styled.input.attrs({ disabled: true, value: "입력불가" })`
//   height: 30px;
//   color: grey;
//   &:nth-child(3) {
//     disabled: none;
//     background-color: lightgreen;
//   }
// `;

// function App() {
//   return (
//     <>
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//     </>
//   );
// }

// export default App;

import styled from "styled-components";
const Title = styled.h1`
  font-size: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
  ${Title} {
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
