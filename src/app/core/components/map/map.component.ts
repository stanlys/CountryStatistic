import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { Map } from 'ol';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import * as olExtent from 'ol/extent';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import { getCenter } from 'ol/extent';
import ZoomToExtent from 'ol/control/ZoomToExtent.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  map: Map;

  @Input() lat!: number;

  @Input() lng!: number;

  @Input() zoom: number = 10;

  @Input() countryAbbr = '';

  constructor(private el: ElementRef) {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: el.nativeElement,
    });
  }

  ngAfterViewInit() {
    // this.map.addLayer();
    const style = new Style({
      stroke: new Stroke({
        color: 'red',
        width: 3,
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 255, 0.1)',
      }),
    });
    let vectorLayerJSON = new VectorLayer({
      source: new VectorSource({
        url: `assets/geojson/${this.countryAbbr}.geo.json`,
        format: new GeoJSON(),
      }),
      style,
    });
    const e: olExtent.Extent = vectorLayerJSON.getExtent() as olExtent.Extent;
    const view = new View({
      center: [this.lng, this.lat],
      zoom: 5,
      projection: 'EPSG:4326',
    });
    this.map.setView(view);
    this.map.addLayer(vectorLayerJSON);
  }
}
