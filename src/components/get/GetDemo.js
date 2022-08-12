import React from 'react'

//Cette fonction extrait les données a mettre sur la page
export default function GetDemo(props){

    const displayNotes = (props) => {

        const {notes} = props;

        if (notes.length > 0) {
            return(
                notes.map((note, index) => {
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div className="sm-container" key={index}>
                            <p className="sm-paragraph">
                                {note.para1}
                            </p>
                            <p className="sm-paragraph">
                                {note.para2}
                            </p>
                        </div> 
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