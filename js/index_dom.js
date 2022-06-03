import hamburguerMenu from "./dom/menu_hamburguesa.js";

import {relojDigital, alarma} from "./dom/reloj_digital.js";

import {shortcuts, moveBall} from "./dom/teclado.js";

import countdown from "./dom/cuentaRegresiva.js";

import {scrollTopBotton} from "./dom/boton_scroll.js";

import {darkTheme} from "./dom/tema_oscuro.js";

import responsiveMedia from "./dom/objetto_responsive.js";

import {responsiveTester} from "./dom/responsive_tester.js";

import userAgent from "./dom/deteccion_dispositivos.js";

import networkStatus from "./dom/deteccion_red.js";

import webCam from "./dom/deteccion_cam.js";

import {getGeoLocation} from "./dom/geolocalizacion.js";

import findSearch from "./dom/bucador_filtro.js";

import ruleta from "./dom/sorteo.js";

import slider from "./dom/carrusel.js";

import smartVideo from "./dom/video_inteligente.js";

import validationForm from "./dom/validaciones_from.js";

import speechReader from "./dom/narrador.js";



//import scrollSpy from "./dom/scroll_espia.js"



const d = document;
const form= d.getElementById('form')///////////////////


d.addEventListener("DOMContentLoaded", (e) =>{

hamburguerMenu(".panel-btn", ".panel", ".menu a");

relojDigital("#display","#iniciar-reloj","#parar-reloj")

alarma("assets/step.mp3","#iniciar-alarma","#parar-alarma")

countdown("contar", "may, 23, 2021 03:23:19","lo que sea")

scrollTopBotton(".scroll-top-btn")


 responsiveMedia("youtube","(min-width: 1024px)", "contenido movil", "contenido desktop")
  responsiveMedia("gmaps","(min-width: 1024px)", "contenido movil", "contenido desktop")



  responsiveTester("responsive")


  userAgent("user-divice")

  webCam("#btncam","cam")


  getGeoLocation("#btngeo","geolocation")

  ///filter("foca")

	findSearch(".card-filter",".card")

	ruleta("#go","#todys")

	slider()

	//scrollSpy()

	smartVideo()

	validationForm()


})




d.addEventListener("keydown",(e)=>{

	//shortcuts(e)
	

	moveBall(e,".ball",".stage")

})

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();

speechReader()
