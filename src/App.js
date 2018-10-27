import React, { Component } from 'react';
import logo from './wolf.jpg';
import sfax from'./sfax.jpg';
import tunis from'./tunis.jpg';
import sousse from'./Sousse.JPG';
import './App.css';
import Box from './components/box'
import Chiffre from './components/chiffre';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>nos programmes</h1>
        <div className="log">
          <Box className="red blockContent" name="un programme intensifde 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise. " />
          <Box className="blue blockContent" name="Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !" />
          <Box className="green blockContent" name="Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux. Un niveau dure 2 mois. À la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique." />
          <Box className="black blockContent" name="Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie." />
        </div>
        <br/>
        <br/>
        <div className="image">
        <strong style={{float:"left"}}>Quelques chiffres</strong> <br/> <br/>
        <Chiffre number="+20.000" content="PASSIONNÉS DU DIGITAL" />
        <Chiffre number="+500" content=" ÉTUDIANTS DEPUIS LE DÉMARRAGE EN AOÛT 2016" />
        <Chiffre number="+300" content=" PRODUITS DÉVELOPPÉS" />
        <Chiffre number="+30" content="INSTRUCTEURS GAME, WEB ET MOBILE" />
        <Chiffre number="+50" content="SPEAKERS" />
        <Chiffre number="400m²" content="DE HACKERSPACE AU COEUR DU LAC 1" />
        </div>
        <h2>ou se passent les sessions?</h2>
        <br></br>
        <p>les sessions se passent dans le hackerspace de go my code dans les villes suiantes</p>

           <div className="im">
       <Box  className="row" name="tunis" image={sfax}/>
       <Box  className="row" name="sfax" image={sfax}/>
       <Box  className="row" name="sousse" image={sfax}/>
      </div>







      </div>
     


    )
  }
}

export default App;
