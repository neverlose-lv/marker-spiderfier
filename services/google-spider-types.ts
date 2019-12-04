import { Marker } from '@agm/core';
import { LegColorOptions, SpiderOptions } from 'ts-overlapping-marker-spiderfier';

export interface MarkerSpiderInstance extends SpiderOptions {
  legColors: LegColorOptions;
  trackMarker(marker: Marker, listener?: Function): MarkerSpiderInstance;
  addMarker(marker: Marker, listener?: Function): MarkerSpiderInstance;
  forgetMarker(marker: Marker): MarkerSpiderInstance;
  removeMarker(marker: Marker): MarkerSpiderInstance;
  forgetAllMarkers(): MarkerSpiderInstance;
  removeAllMarkers(): MarkerSpiderInstance;
  getMarkers(): Marker[];
  addListener(event: 'click' | 'format' | 'spiderfy' | 'unspiderfy', listener: Function): MarkerSpiderInstance;
  removeListener(event: 'click' | 'format' | 'spiderfy' | 'unspiderfy', listener: Function): MarkerSpiderInstance;
  clearListeners(event: 'click' | 'format' | 'spiderfy' | 'unspiderfy'): MarkerSpiderInstance;
  unspiderfy(): MarkerSpiderInstance;
  markersNearMarker(marker: Marker, firstOnly?: boolean): Marker[];
  markersNearAnyOtherMarker(): Marker[];
}

export interface FormatEvent {
  spiderfier: MarkerSpiderInstance;
  marker: Marker;
  status: string;
}

export interface SpiderfyEvent {
  spiderfier: MarkerSpiderInstance;
  changedMarkers: Marker[];
  unchangedMarkers: Marker[];
}

export { SpiderOptions, LegColorOptions } from 'ts-overlapping-marker-spiderfier';
