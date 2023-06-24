import React from "react";
import styled from "styled-components";

export default function UserPage() {
  const [user, setUser] = React.useState(true);

  return (
    <Container>
      {user ? (
        <form>
          <h1>Reserving</h1>
          <Inputs placeholder="email" type="text" required></Inputs>
          <Inputs placeholder="password" type="password" required></Inputs>
          <button type="submit">Login</button>
          <p onClick={() => setUser(false)}>
            Não tem cadastro ainda? <span>Clique aqui</span>
          </p>
        </form>
      ) : (
        <form>
          <h1>Reserving</h1>
          <Inputs placeholder="name" type="password" required></Inputs>
          <Inputs placeholder="email" type="text" required></Inputs>
          <Inputs placeholder="password" type="password" required></Inputs>
          <button type="submit">Cadastre-se!</button>
          <p onClick={() => setUser(true)}>
            ja possui uma conta?<span> Clique aqui</span>
          </p>
        </form>
      )}
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Geologica&display=swap");
  font-family: "Geologica";
  background-color: rgba(115, 10, 253, 1);
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    padding: 20px;
    margin: auto;
    width: 400px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 6px;
    gap: 10px;
    h1 {
      font-size: 30px;
    }
    p {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
    button {
      margin: auto;
      width: 180px;
      border: none;
      height: 50px;
      font-size: 18px;
      font-family: "Geologica";
      color: white;
      background-color: rgba(115, 10, 253, 1);
      :hover {
        cursor: pointer;
        background-color: white;
        color: rgba(115, 10, 253, 1);
        border-radius: 6px;
        transition: 0.5s;
      }
    }
  }
`;
const Inputs = styled.input`
  margin: auto;
  border: none;
  border-radius: 6px;
  height: 50px;
  width: 300px;
`;
