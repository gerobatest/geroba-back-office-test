import React, {useState} from 'react';
import '../style/Section.scss';
import '../style/Modal.scss';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineX } from "react-icons/hi";


function SectionFonc(props) {
//texte limit
const Existant  = ({ content,limit}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    };
    if(modal){
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    
    return (
        <>
            <div> 
                {toShow} 
                <a onClick={toggleModal}  className="openFonc"  href={"/"}>En savoir plus &#62;</a>
                {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-1.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 1</h1>
                                <p className="lightTitle">Mode Existant</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                        C’est ce qui existe sur le terrain, l’état « 0 ».
                                        Suspendisse potenti. Proin elementum erat vitae
                                        dictum aliquet. Aenean porta posuere mi, ut
                                        hendrerit arcu malesuada a. Etiam et porttitor
                                        turpis. Aenean efficitur id nisl sed ultrices.
                                        Suspendisse porttitor mollis ornare.      
                                    </p>
                                    <p className="sm-paragraph">
                                        Mauris pharetra porttitor ipsum ac lobortis.
                                        Donec sed condimentum erat. Nullam pretium
                                        rutrum finibus. Pellentesque dui urna, luctus at
                                        rutrum a, condimentum sit amet orci. Nulla
                                        facilisi.
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
            </div>
        </>
        )
    }

  const Etude = ({ content,limit}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-2.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 2</h1>
                                <p className="lightTitle">Mode Etude</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                        Il s’agit du fruit de l’expertise de l’existant et la 
                                        définition de ce qu’il devrait y avoir. Dictum 
                                        aliquet. Aenean porta posuere mi, ut hendrerit 
                                        arcu malesuada a. Etiam et porttitor turpis. 
                                        Aenean efficitur id nisl sed ultrices. Suspendisse 
                                        porttitor mollis ornare.       
                                    </p>
                                    <p className="sm-paragraph">
                                        Mauris pharetra porttitor ipsum ac lobortis. 
                                        Donec sed condimentum erat. Nullam pretium 
                                        rutrum finibus. Pellentesque dui urna, luctus at 
                                        rutrum a, condimentum sit amet orci. Nulla 
                                        facilisi
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
    </div>
  }
  const Depots = ({ content,limit}) => {

     const [modal, setModal] = useState(false);
     const toggleModal = (event) => {
         event.preventDefault();
         setModal(!modal);
     };
     if(modal) {
       document.body.classList.add('active-modal')
     } else {
       document.body.classList.remove('active-modal')
     }

    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-3.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 3</h1>
                                <p className="lightTitle">Mode Dépôts</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                      Pour les objets qui le nécessitent, c’est la gestion 
                                      des équipements qui sont dans des dépôts 
                                      localisés et qui serviront à des travaux de 
                                      maintenance.  
                                    </p>
                                    <p className="sm-paragraph">
                                      Mauris pharetra porttitor ipsum ac lobortis. 
                                      Donec sed condimentum erat. Nullam pretium 
                                      rutrum finibus. Pellentesque dui urna, luctus at 
                                      condimentum sit amet orci. Nulla facilisi.
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
    </div>
  }

  const Travaux = ({ content,limit}) => {
     //eto
     const [modal, setModal] = useState(false);
     const toggleModal = (event) => {
         event.preventDefault();
         setModal(!modal);
     };
     if(modal) {
       document.body.classList.add('active-modal')
     } else {
       document.body.classList.remove('active-modal')
     }
     //atreto
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-4.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 4</h1>
                                <p className="lightTitle">Mode Travaux</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                      La maîtrise d’ouvrage décide d’engager des 
                                      travaux de changement ou de maintenance ; elle 
                                      confie une mission à une entreprise ou en régie 
                                      et le maître d’œuvre va suivre les actions, pas à 
                                      pas suivant le détail, modulable, défini en amont. 
                                    </p>
                                    <p className="sm-paragraph">
                                      Mauris pharetra porttitor ipsum ac lobortis. 
                                      Donec sed condimentum erat. Nullam pretium 
                                      rutrum finibus. Pellentesque dui urna, luctus at 
                                      rutrum a, condimentum sit amet orci. Nulla 
                                      facilisi.
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
    </div>
  }

  const Gestion = ({ content,limit}) => {
     //eto
     const [modal, setModal] = useState(false);
     const toggleModal = (event) => {
         event.preventDefault();
         setModal(!modal);
     };
     if(modal) {
       document.body.classList.add('active-modal')
     } else {
       document.body.classList.remove('active-modal')
     }
     //atreto
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-5.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 5</h1>
                                <p className="lightTitle">Mode Gestion</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                        Le patrimoine doit être surveillé à la fois sur le 
                                        plan physique et fonctionnel. Des actions de 
                                        surveillances sont définies sur tout ou une partie 
                                        du patrimoine et les éventuels besoins 
                                        d’intervention identifiés puis suivis.
                                    </p>
                                    <p className="sm-paragraph">
                                      Mauris pharetra porttitor ipsum ac lobortis. 
                                      Donec sed condimentum erat. Nullam pretium 
                                      rutrum finibus. Pellentesque dui urna, luctus at 
                                      rutrum a, condimentum sit amet orci. Nulla 
                                      facilisi.
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
    </div>
  }

  const Batiment = ({ content,limit}) => {
     //eto
     const [modal, setModal] = useState(false);
     const toggleModal = (event) => {
         event.preventDefault();
         setModal(!modal);
     };
     if(modal) {
       document.body.classList.add('active-modal')
     } else {
       document.body.classList.remove('active-modal')
     }
     //atreto
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-6.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 6</h1>
                                <p className="lightTitle">Mode Route et Bâtiment</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                      C’est ce qui existe sur le terrain, l’état « 0 ». 
                                      Suspendisse potenti. Proin elementum erat vitae 
                                      dictum aliquet. Aenean porta posuere mi, ut 
                                      hendrerit arcu malesuada a. Etiam et porttitor 
                                      turpis. Aenean efficitur id nisl sed ultrices. 
                                      Suspendisse porttitor mollis ornare.
                                    </p>
                                    <p className="sm-paragraph">
                                      Mauris pharetra porttitor ipsum ac lobortis. 
                                      Donec sed condimentum erat. Nullam pretium 
                                      rutrum finibus. Pellentesque dui urna, luctus at 
                                      rutrum a, condimentum sit amet orci. Nulla 
                                      facilisi.
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
    </div>
  }
  
  //fin texte limit 
    return (
        <>
             <div className="sectionContainer" id="fonctions">
                <div className="sectionImage">
                    <Parallax translateX={['-200px', '100px']}>    
                        <img src="engineer.avif" alt="Construction worker"/>
                    </Parallax>  
                </div>
                <div className="sectionText">
                    <h1 className="title" >
                        {props.title}
                    </h1>
                    <p className="paragraph">
                        La solution permet de gérer les équipements dans
                        ses différentes étapes de vie : l'Existant, les Etudes,
                        les Dépôts, les Travaux de remplacement, la Gestion
                        du patrimoine dans le temps et les thématiques
                        Routes / Bâtiments.
                    </p>
                    <ol>
                        <li>
                            <div className='modeLong'>
                                    <b>Mode « Existant » :</b>
                                    <Existant content = " C'est ce qui existe sur le terrain, l'état « 0 ». La solution permet de gérer les équipements dans ses différentes étapes de vie : l'Existant, les Etudes,les Dépôts, les Travaux de remplacement, la Gestion du patrimoine dans le temps et les thématiquesRoutes / Bâtiments. "
                                     limit = {135} /> 
                            </div>  
                        </li>
                        <li>
                            <b className='bB'>Mode « Etude » :</b> 
                            <div className='modeLong'>
                            <Etude content=" Il s'agit du fruit de l'expertise
                            de l'existant et la définition de ce qu'il devrait y
                            avoir. blablababla" limit={135}/>
                            </div> 
                        </li>
                        <li>
                            <b>Mode « Dépôts » :</b> 
                            <div>
                                <Depots content=" Pour les objets qui le
                            nécessitent, c'est la gestion des équipements qui
                            sont dans des dépôts localisés et qui serviront à
                            des travaux de maintenance. blablabla" limit={135}/>
                            </div>
                        </li>
                        <li>
                          <b>Mode « Travaux » :</b>
                            <div>
                                <Travaux content=" La maîtrise d'ouvrage
                                décide d'engager des travaux de changement
                                ou de maintenance ; elle confie une mission à
                                une entreprise ou en régie et le maître d'oeuvre
                                va suivre les actions, pas à pas suivant le détail,
                                modulable, défini en amont. " limit={135} />
                            </div>
                        </li>
                        <li>
                            <b>Mode « Gestion » :</b> 
                            <div>
                                <Gestion content=" Le patrimoine doit être
                            surveillé à la fois sur le plan physique et
                            fonctionnel. Des actions de surveillances sont
                            définies sur tout ou une partie du patrimoine et
                            les éventuels besoins d'intervention identifiés
                            puis suivis. balabalab" limit={135}/>
                            </div>
                        </li>
                        <li>
                            <b>Mode « Route et Bâtiment » :</b> 
                            <div>
                               <Batiment content= "Integer ut odio vitae ex posuere sollicitudin. Aliquam lobortis tincidunt aliquet. Donec libero erat, pulvinar id nunc id, volutpat laoreet tortor. Praesent dapibus lacus molestie. blabalaba" 
                               limit={135}/> 
                            </div>
                        </li>
                    </ol>
                    <p className="paragraph">
                        Chacun des acteurs peut alimenter la base, définir
                        des missions, échanger des informations et/ou des
                        photos en fonction des droits qui lui sont ouverts.
                    </p>
                </div>
            </div>
        </>   
  )
}
export default SectionFonc;