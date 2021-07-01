import axios from "axios";
import React, { useEffect, useState } from "react";
import coracaoLinha from "./contorno-em-forma-de-coracao.png"
import coracaoCheio from "./silhueta-em-forma-de-coracao.jpg"
import logoTipo from "./logoTipo.png"
import descartar from "./descartar.jpg"
import descartarX from "./descartarX.jpg"

export default function TelaInicial(props) {
  const [perfis, setPerfis] = useState({});
  const [coracao, setCoracao] = useState(coracaoLinha)
  const [descartar, setDescarte] = useState(descartarX)


  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((res) => {
        setPerfis(res.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const chosePerson = (chose) => {
    console.log(chose)
    const body = {
      id: perfis.id,
      choice: chose
    };
    axios.post(
      "hhttps://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
      body
    )
    .then(res => {getProfiles()})
    .catch(err => console.log(err.response))
  };

  const reset = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear")
    .then(res => {getProfiles()})
    .catch(err => console.log(err.response))
  }
 
  return (
    <div>
      {console.log(props.funcao())}
      <img src={logoTipo} width={"200px"} height={"100px"}/> 
       <br/>
      {perfis ? <img src={perfis.photo} width={"300px"} height={"400px"} /> : <button onClick = {reset} > resetar</button>}
      <br/>
      <img onClick={() => chosePerson(false)}/>
      <img src={coracao} width={"30px"} height={"30px"}onClick={() => getProfiles(false)} onMouseLeave ={(()=> setCoracao(coracaoLinha))} onMouseEnter={()=>setCoracao(coracaoCheio)} width={"25px"} onClick={() => getProfiles(true)}/>
      <img src={descartarX} onClick={() => getProfiles(false)} onMouseLeave ={(()=> setDescarte (descartarX))} onMouseEnter={()=>setDescarte(descartar)} width={"25px"} onClick={() => getProfiles(true)}/>
    </div>
  );
}