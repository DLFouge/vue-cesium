import { version } from '../package.json'
import CesiumViewer from './viewer/CesiumViewer.vue'
import SuperMapImageryLayer from './layers/SuperMapImageryLayer.vue'
import ArcGisMapServerImageryLayer from './layers/ArcGisMapServerImageryLayer.vue'
import BingMapsImageryLayer from './layers/BingMapsImageryLayer.vue'
import WebMapTileServiceImageryLayer from './layers/WebMapTileServiceImageryLayer.vue'
import UrlTemplateImageryLayer from './layers/UrlTemplateImageryLayer.vue'
import SingleTileImageryLayer from './layers/SingleTileImageryLayer.vue'
import MapboxImageryLayer from './layers/MapboxImageryLayer.vue'
import OpenStreetMapImageryLayer from './layers/OpenStreetMapImageryLayer.vue'
import Cesium3DTileset from './models/Cesium3DTileset.vue'
import PolylineGraphics from './entities/PolylineGraphics.vue'

export default {
  install (Vue, options) {
    let cesiumPath
    if (options) {
      cesiumPath = options.cesiumPath
    } else {
      cesiumPath = 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    }
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component('supermap-imagery-layer', SuperMapImageryLayer)
    Vue.component('arcgis-imagery-layer', ArcGisMapServerImageryLayer)
    Vue.component('bingmaps-imagery-layer', BingMapsImageryLayer)
    Vue.component('wmts-imagery-layer', WebMapTileServiceImageryLayer)
    Vue.component('urltemplate-imagery-layer', UrlTemplateImageryLayer)
    Vue.component('singletile-imagery-layer', SingleTileImageryLayer)
    Vue.component('mapbox-imagery-layer', MapboxImageryLayer)
    Vue.component('openstreetmap-imagery-layer', OpenStreetMapImageryLayer)
    Vue.component('cesium-3dtileset', Cesium3DTileset)
    Vue.component('polyline-graphics', PolylineGraphics)
  },
  version
}

export {
  CesiumViewer, SuperMapImageryLayer, ArcGisMapServerImageryLayer, BingMapsImageryLayer, WebMapTileServiceImageryLayer, UrlTemplateImageryLayer,
  SingleTileImageryLayer, MapboxImageryLayer, OpenStreetMapImageryLayer, Cesium3DTileset, PolylineGraphics
}
