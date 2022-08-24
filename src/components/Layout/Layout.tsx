import styled from "styled-components";
import Counter from "../Counter/Counter";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Counter />
    </StyledContainer>
  );
};

export default Layout;
