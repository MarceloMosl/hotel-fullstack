import React from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserPage() {
  const [user, setUser] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function submitForm(event) {
    event.preventDefault();

    if (user === true) {
      try {
        const promise = await axios.post(
          `${process.env.REACT_APP_DATABASE}/sign-in`,
          {
            email,
            password,
          }
        );

        console.log(promise);
        toast("Bem-vindo de volta!");
      } catch (error) {
        toast("Não foi possivel completar a ação");
      }
    } else {
      try {
        const promise = await axios.post(`${process.env.REACT_APP_DATABASE}/`, {
          email,
          password,
        });
        console.log(promise);
        toast("usuario cadastrado com sucesso");
        setUser(true);
      } catch (error) {
        toast("Não foi possivel realizar o cadastro");
      }
    }
  }

  return (
    <Container>
      {user ? (
        <form onSubmit={submitForm}>
          <h1>Reserving</h1>
          <Inputs
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          ></Inputs>
          <Inputs
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          ></Inputs>
          <button type="submit">Login</button>
          <p onClick={() => setUser(false)}>
            Não tem cadastro ainda? <span>Clique aqui</span>
          </p>
        </form>
      ) : (
        <form onSubmit={submitForm}>
          <h1>Reserving</h1>
          <Inputs
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          ></Inputs>
          <Inputs
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          ></Inputs>

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
