import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
  display: flex;
  margin:0 auto;
  border-color: yellow;
  border:solid;
  
`;

function App() {


  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [Loading, setLoading] = useState(false);
  const initialUtl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {


    fetch(url)
      .then(response => response.json())

      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })

      .catch(error => console.log(error))

  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchCharacters(initialUtl);
      setLoading(false)

    }, 4000);
  }, [])

  return (
    <>



      <div className="container mb-5">

      </div>

      {
        Loading ?
          <ClipLoader css={override} size={200} color={"#123abc"} Loading={Loading} />
          :
          <div className="container">
            <NavBar brand="rick y morty app" />
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />

            <Characters characters={characters} />
            
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />


          </div>
      }
    </>

  );
}


export default App;
