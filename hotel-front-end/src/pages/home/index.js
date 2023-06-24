import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
export function Home() {
  const [hotelsArray, setHotelsArray] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_DATABASE}/tst`);
    promise.then((res) => {
      console.log(res);
      setHotelsArray(res.data);
    });
    promise.catch((err) => console.log(err));
  }, []);

  if (hotelsArray[0] === undefined) return <>loading</>;
  return (
    <Container>
      <Header>
        <h1>Reserving</h1>

        <div>
          <span>hotels</span>
          <span>rooms</span>
          <span>about</span>
          <span onClick={() => navigate("/sign-in")}>sign-in</span>
        </div>
      </Header>

      <Search>
        <h1>Escolha seu proximo destino</h1>
        <SearchForm>
          <input placeholder="Para onde vamos?" type="text" required></input>
          <input
            placeholder="Checkin"
            type="date"
            name="checkin"
            required
          ></input>
          <input
            placeholder="Checkout"
            type="date"
            name="checkout"
            required
          ></input>
          <button type="submit">Reservar</button>
        </SearchForm>
      </Search>

      <Hotels>
        <h1>Alguns de nossos hoteis parceiros</h1>

        <Hotel>
          <img src={hotelsArray[0].image} alt=""></img>
          <Infos>
            <h2>{hotelsArray[0].name}</h2>
            <p>
              {hotelsArray[0].Rooms.map((a) => (
                <> - {a.name} </>
              ))}
            </p>
            <button>Consulte a Disponibilidade</button>
          </Infos>
        </Hotel>
        <Hotel>
          <Infos>
            <h2>{hotelsArray[1].name}</h2>
            <p>
              {hotelsArray[1].Rooms.map((a) => (
                <>- {a.name}</>
              ))}
            </p>
            <button>Consulte a Disponibilidade</button>
          </Infos>
          <img src={hotelsArray[1].image} alt=""></img>
        </Hotel>
      </Hotels>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Geologica&display=swap");

  background-color: rgba(115, 10, 253, 1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;

  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto";

  div {
    display: flex;
    gap: 25px;
  }
  span:hover {
    cursor: pointer;
    background-color: white;
    padding: 10px;
    color: rgba(115, 10, 253, 1);
    transition: 0.8s;
  }
`;
const Search = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-bottom: 25px;
  }
`;
const SearchForm = styled.form`
  margin: auto;

  display: flex;
  gap: 20px;
  justify-content: center;

  input {
    border: none;
    border-radius: 6px;
    width: 300px;
    text-align: center;
    height: 50px;
  }

  button {
    border: none;
    border-radius: 6px;
    width: 100px;
    :hover {
      background-color: #a799b7;
      color: white;
      font-weight: bold;
      font-size: medium;
      cursor: pointer;
    }
  }
`;

const Hotels = styled.div`
  h1 {
    color: white;
    font-size: 35px;
    margin-bottom: 70px;
  }

  text-align: center;
  font-family: "Geologica", sans-serif;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  img,
  div {
    width: 300px;
    transition: transform 0.5s ease;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

const Hotel = styled.section`
  margin: auto;
  height: 200px;
  width: 700px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
  overflow: hidden;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h2 {
    font-size: 25px;
  }
  button {
    font-family: "Geologica", sans-serif;
    border: none;
    height: 40px;
    width: 180px;
    font-size: 15px;
    text-decoration: underline;
    :hover {
      background-color: rgba(115, 10, 253, 1);
      cursor: pointer;
      border-radius: 10px;
      color: white;
      transition: 1s;
    }
  }
`;
