import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
`;

const Main = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 4;
  background-color: red;
`


function App() {
  return (
    <Container>
      <Topbar />
      <Main>
        <Left>
          <Sidebar />
        </Left>
        <Right>
          hjhjhjjj
          hghgh
        </Right>
      </Main>
    </Container>
  );
}

export default App;
