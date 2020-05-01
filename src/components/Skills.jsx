import React from "react"
import 'bulma/css/bulma.css'
import '../css/App.css';
import Skill from './Skill'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faReact, faPython} from '@fortawesome/free-brands-svg-icons'


const Skills = () => (
    <div class="container skills">
        <div class="columns my-columns">
            <Skill title="C++" logo={faCode}/>
            <Skill title="React" logo={faReact}/>
            <Skill title="Python" logo={faPython}/>
        </div>
        <div class="column wrapper ">
            <p>
                Grace à la diversité de mes expériences et projets, je possède des compétences
                et connaissances plusieurs domaine de l'ingénieurie logiciel,
                du développement mobile au developpement web en passant par l'orienté objet.
                Malgré mon manque d'expertise dans un domaine en particulier, je suis polyvalent et je m'adapte très rapidement.
                J'ai mis en avant les C++, React et le python, car ce sont les technologies que j'ai utilisé le plus recement. 
            </p>
            <br />
            <br />
        </div>
        <div class="columns wrapper">
            <div class="column">
                <h3>Technologies</h3>
                <ul>
                    <li>Développement mobile : Java Android, Swift</li>
                    <li>Développement web : React, HTML, CSS</li>
                    <li>Langage orienté objet : C++, Java</li>
                </ul>
            </div>
            <div class="column">
                <h3>Outils</h3>
                <ul>
                    <li>Git</li>
                    <li>Jira</li>
                    <li>Klockwork</li>
                    <li>Jenkins</li>
                </ul>
            </div>
            <div class="column">
                <h3>Autres</h3>
                <ul>
                    <li>Montage photo (Lightroom, Photoshop)</li>
                    <li>Montage vidéo</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
)
export default Skills