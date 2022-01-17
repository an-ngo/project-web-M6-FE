import { Component, OnInit } from '@angular/core';
import {MapsService} from "../../service/map/maps.service";
import {Browser, icon, latLng, marker, polyline, tileLayer, Map, point} from "leaflet";
import win = Browser.win;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  lat:number = Number(window.sessionStorage.getItem("lat"));
  lon:number = Number(window.sessionStorage.getItem("lon"));


  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  currentPosition = marker([ this.lat, this.lon ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  paradise = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      iconRetinaUrl: 'leaflet/marker-icon-2x.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });





  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [ this.streetMaps, this.currentPosition ],
    zoom: 16,
    center: latLng([ this.lat, this.lon ])
  };


  constructor(private mapService: MapsService) {
    this.mapService.getLocation();
    // console.log(this.lat + " : " + this.lon);
    // console.log(this.options);
  }

  ngOnInit(): void {

  }









}
