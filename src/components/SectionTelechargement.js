import React, {useEffect, useState} from 'react'
import '../style/Section.scss'
import Doc from "./Doc";
import axios from 'axios';

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

    //Cette fonction extrait les données a mettre sur la page
    function NoteTimeline(props){

        const displayNotes = (props) => {

            const {notes} = props;

            if (notes.length > 0) {
                return(
                    notes.map((note, index) => {
                        //console.log(notes);
                        //La partie qu'on veut montrer dans la page depuis la base de données
                        return(
                            <>
                                <p className="sm-paragraph">
                                    {note.para1}
                                </p>
                                <p className="sm-paragraph">
                                    {note.para2}
                                </p>
                            </> 
                        )
                    })
                )   
            }
        }

        return(
            <>
                {displayNotes(props)}
            </>
        )
    }


  return( 
        <>
            <div className="container-telechargement" id="téléchargement">     
                <h1 className="title titleTelechargement" >Téléchargements</h1>
                <div className="sm-container">

                   
                    <NoteTimeline notes={notes}/>

                    {/* <p className="sm-paragraph">
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
                    </p>  */}
                </div>
                                
                <Doc/>
            </div>
            
        </>
  )
}

export default SectionTelechargement