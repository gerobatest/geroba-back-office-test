import React, {useState} from 'react';
import '../style/Footer.scss';
import {AiTwotoneHome} from 'react-icons/ai';
import {GiRotaryPhone, GiScales} from 'react-icons/gi'; 
import { HiOutlineX } from "react-icons/hi";
import {MdEmail} from 'react-icons/md';
import {FaGlobe} from 'react-icons/fa';
import { useEffect } from "react";

import Map from "./Map/Map";
import Layers from "./Map/Layers";
import TileLayer from "./Map/TileLayer";
import VectorLayer from "./Map/VectorLayer";
import osm from "./Map/osm";
import vector from "./Map/vector";
import Controls from "./Map/Controls";
import FullScreenControl from "./Map/FullScreenControl";
import { Circle as CircleStyle,Style } from 'ol/style';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import mapConfig from "../config.json";
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon} from 'ol/style';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const iconFeature = new Feature({
  geometry: new Point([1.253639, 44.414870]),
  name: '81 rue du Moulin, 46140 SAUZET, France'
});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/location.avif',
    scale: 1.5
  }),
});
iconFeature.setStyle(iconStyle);
const geojsonObject2 = mapConfig.geojsonObject2;

function Footer() {
  useEffect(() => {
    const margin = getComputedStyle(document.documentElement).getPropertyValue('--contactInfo-marginTop');
}, []);


function setMargin (newMargin){
  document.documentElement.style.setProperty('--contactInfo-marginTop', newMargin);
}


  const [center, setCenter] = useState([1.253327, 44.414888]); //le centre de la carte après chargement
  const [zoom, setZoom] = useState(18)
  const [showLayer2, setShowLayer2] = useState(true);
  const [showCancelButton, setShowCancelButton] = useState(false); //Bouton annuler
  const [showSendButton, setShowSendButton] = useState(false);  //Bouton envoyer 

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


  //Les valeurs depuis la forme
  const [formVal, setFormVal] = useState({
    name:'',
    fname:'',
    email:'',
    message:'',
    mailSent: false, 
    error: null
  });

  const handleChange = (e) => {
    const {name,value} = e.target
    setMargin('120px')
    setFormVal(prevState=>{
      setShowCancelButton(true)
      if (value === '')
        setShowSendButton(false)
      return {
      ...prevState,[name]:value
    }})
    let all_filled = true
    Object.values(formVal).forEach((item)=>{
      if (item === '')
      {
        all_filled = false
      }
    })
    if (all_filled)
    {
      setShowSendButton(true)
    }
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post(`/send`, {
        data: {
          nom: formVal.name, 
          prénom: formVal.fname,
          email: formVal.email,
          message: formVal.message
        }
      });
      toast.success(data.message);
    } catch(err){
      toast.error(
        err.response && err.response.data.message?
        err.response.data.message: 
        err.message
      );
    }
  }


/* Version PHP marche 
   const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const {info} = await axios({
        method: 'post',
        url: `http://localhost/sendmail/sendmail.php`,
        headers: { 'content-type': 'application/json' },
        data: {
          nom: formVal.name, 
          prénom: formVal.fname,
          email: formVal.email,
          message: formVal.message
        }
      })
        .then(result => {
          this.setState({
            mailSent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
      toast.success(info.message);
    } catch(err){
      toast.error(
        err.response && err.response.data.message?
        err.response.data.message: 
        err.message
      );
    }
  } */


  //Efface tous les champs 
  const cancelForm = () =>{
    setMargin('0px')
    setShowCancelButton(false)
    setShowSendButton(false)
    setFormVal({
      name:'',
      fname:'',
      email:'',
      message:''
    })
    document.getElementById("contact-form").reset();
  };


  //mois actuel
  const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  const currentMonthNum = new Date().getMonth();
  const currentMonth = MONTHS[currentMonthNum];

  //année actuelle 
  const currentYear =  new Date().getUTCFullYear();

  return (
      <div className="footer" id="contact">
        <div className="footerRow1">
          {/*La carte*/}
          <div className="map" id="map">
            <Map center={fromLonLat(center)} zoom={zoom}>
              <Layers>
                <TileLayer
                  source={osm()}
                  zIndex={0}
                />
                {showLayer2 && (
                  <VectorLayer
                    source={vector({ features: new GeoJSON().readFeatures(geojsonObject2, { featureProjection: get('EPSG:3857') }) })}
                    style={iconStyle}
                  />
                )}
              </Layers>
              <Controls>
                <FullScreenControl />
              </Controls>
            </Map>
            <div>
              <input
                className="mapLocation"
                type="checkbox"
                checked={showLayer2}
                onChange={event => setShowLayer2(event.target.checked)}
                /> 
              {/*81 rue du Moulin, 46140 SAUZET, France*/}
          </div>
          </div>
          <div className="contact-container">
            <ToastContainer position="bottom-center" limit={1}/>
            <h1 className="title" > 
              Contactez-nous
            </h1> 
            <form id="contact-form" onSubmit={submitHandler}>
              {/* Nom */}
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  defaultValue={formVal.name} 
                  onChange={handleChange} 
                  required="required"
                />
                <span className="floating-label">Nom<span className="star">*</span></span>
              </div>
              {/* Prénom */}
              <div>
                <input 
                  type="text" 
                  id="fname" 
                  name="fname" 
                  defaultValue={formVal.fname} 
                  onChange={handleChange} 
                  required="required"
                  />
                <span className="floating-label">Prénom<span className="star">*</span></span>
              </div>
              {/* Email */}
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  defaultValue={formVal.email} 
                  onChange= {handleChange} 
                  required="required"
                  />
                <span className="floating-label">Email<span className="star">*</span></span>
              </div>
              {/* Message */}
              <div>
                <textarea
                  name='message' 
                  placeholder=" " 
                  onChange={handleChange} 
                  required="required"
                  />
                <span className="floating-label message" >Message</span>
              </div>
              <div className="form-btn">
                {showCancelButton && (
                  <button onClick={cancelForm} type="button">
                    ANNULER
                  </button>
                )}
                {showSendButton && (
                <button
                  type="submit">
                  ENVOYER
                </button>
                )}
              </div>
            </form>
            <div className="contact-info">
              <p><AiTwotoneHome color="#F15a22"/> : 81 rue du Moulin, 46140 SAUZET, France.</p>
              <p><GiRotaryPhone color="#F15a22"/> : <a href="tel:+33 (0) 6 31 89 80 34">+33 (0) 6 31 89 80 34</a></p>
              <p><MdEmail color="#F15a22"/> : <a href="mailto:contact@gerobamaster.fr">contact@gerobamaster.fr</a></p>
              <p><FaGlobe color="#F15a22"/> : <a href="https://www.gerobamaster.fr/login" target="_blank"  rel="noreferrer">www.geroba.fr</a></p>
            </div>
          </div>
        </div>
        <div className='mention'>
            <p onClick={toggleModal} className="openFonction"><GiScales />  <i>Les mentions légales-Politique de Sécurisation des Données</i></p>
            <div>
              {modal && (
                 <div className='modalment'>
                      <div onClick={toggleModal} className="overlay"></div>
                         <div className='PopUp'>
                         <h1 className="title">
                          <img className='logoMent' src="/logo-geroba.avif" alt="Mode existant"/> Les mentions légales</h1>
                         <p className="lightTitle">1. Définition des mentions légales</p>
                         <div className="mentionContet">
                                    <p className='mentcont'>
                                    Les mentions légales désignent un ensemble d’informations que tout éditeur 
                                    de site internet est tenu de faire apparaitre à la connaissance des internautes. 
                                    C’est la loi n°2004-575 du 21 juin 2004 qui impose aux éditeurs cette obligation.
                                    </p>
                                    <p className='mentcont'>
                                    Les mentions légales regroupent des informations variées.
                                     Certaines sont relatives à l’identité de l’éditeur du site, d’autres à ses coordonnées et les 
                                     moyens d’entrer en contact avec le créateur du site, ou encore des informations relatives aux conditions 
                                     générales de vente ou aux conditions dans lesquelles les données personnelles de l’internaute peuvent être collectées.
                                    </p>
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                    </div>
               </div>)}
              </div> 
          </div>

        <div className="footerRow2">
            <p><i>Conçu et développé par  &nbsp;&nbsp; <img className="footerLogo" src="gerobaFooter.jpg" alt="gds group"></img> &nbsp;&nbsp; Tous droits réservés &copy; {} {currentMonth} {currentYear}</i></p>
        </div>
      </div>   
)}
export default Footer;