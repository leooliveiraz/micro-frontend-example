Esse é um projeto teste para criação e configuração de MICROFRONTENDS

No caso do REACT rode o comando:
npx create-mf-app

e preencha os dados necessários
---------------------------------------------------------------------
Crie um componente e mapeie-o para exposição no webpackconfig.js
exposes: {
"./Navbar": "./src/Navbar.jsx",
},
---------------------------------------------------------------------
Mapeie o componente importado na aplicação container, no remotes do webpackconfig.js
remotes: {
    navbar: "navbar@http://localhost:3001/remoteEntry.js",
    map: "map@http://localhost:3002/remoteEntry.js",
},

importe no componente


import Navbar from "navbar/Navbar";
import WorldMap from "map/WorldMap";

<div className="container">
    <Navbar />
    <WorldMap></WorldMap>
</div>
---------------------------------------------------------------------

