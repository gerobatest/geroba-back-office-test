import React, {useEffect, useState} from 'react'
import '../style/Section.scss'
import Doc from "./Doc";

import axios from 'axios';
import  GetTelechargment from './get/GetTelechargement';

function SectionTelechargement() {

    const url_api = "http://localhost:9000/telechargement/";

    //notes sera l'état des donées reçues depuis la base de donnée
    const [notes, getNotes] = useState('');

    //Cette fonction extrait les données depuis la base de données en utilisant axios
    const getAllNotes = () => {
        axios.get(`${url_api}`)
        .then((response) => {
            const allNotes = response.data; //les données reçu depuis l'api sont gardées ici
            getNotes(allNotes); //react state est mise à jour avec les données reçues
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    //la fonction getAllNotes() est executée quand la page est rendue (rendered)
    useEffect(() => {
        getAllNotes();
    })

  return( 
        <>
            <div className="container-telechargement" id="téléchargement">     
                <h1 className="title titleTelechargement" >Téléchargements</h1>
                

                   
                    < GetTelechargment notes={notes}/>

                    {/* <div className="sm-container"> 
                    <p className="sm-paragraph">
                        Les documents importants à télécharger...
                        consectetur adipisclning elit. Suspendisse ert
                        iololl eras pellentesque elementum lobortis. Sed
                        ac rtef nunc auctor, molestie turpis vitae,
                        dapibus magna.
                    </p>
                    <p className="sm-paragraph">
                        Integer ut odio vitae ex posuere sollicitudin.
                        Aliquam lobortis tincidunt lorem sed aliquet.
                        Donec libero erat, pulvinar id nunc id, volutpat
                        laoreet tortor. Praesent dapibus lacus molestie
                        dapibus auctor.
                    </p> 
                    </div> */}
                                
                <Doc/>
            </div>
            
        </>
  )
}

export default SectionTelechargement