import './style.css'
import { leafletMap, markers } from "./leaflet.js";

leafletMap.addLayer(markers);

// Collapse and expand the element 
document.getElementById("expand").addEventListener("click", () => {
  const content = document.getElementById("content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    expand.innerHTML = '&#9660;';
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
    expand.innerHTML = '&#9650;';
  }
});
