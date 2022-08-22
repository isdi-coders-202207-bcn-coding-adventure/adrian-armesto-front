import styled from "styled-components";

const CounterStyle = styled.section`
  background-color: #243444;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;

  .counter__counter {
    margin: 10px;
    width: 300px;
    height: 300px;
    border-radius: 25px;
    background-color: #fac204;
    color: #243444;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
  }
  .counter__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .counter__text {
    color: white;
    justify-self: center;
    font-size: 3em;
  }
`;

export default CounterStyle;
