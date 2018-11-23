(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"75eC":function(t,s,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.viewer[data-v-704fd649] {\n  width: 100%;\n  height: 400px;\n}\n",""])},"7im2":function(t,s,a){"use strict";a.d(s,"a",function(){return e}),a.d(s,"b",function(){return r});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("OpenStreetMapImageryLayer")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("MapboxImageryLayer")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("div",{staticStyle:{position:"absolute",left:"1%",top:"1%",width:"150px","z-index":"9999",color:"white"}},[a("span",[t._v("alpha")]),t._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01,tooltip:"hover"},model:{value:t.alpha,callback:function(s){t.alpha=s},expression:"alpha"}}),t._v(" "),a("span",[t._v("brightness")]),t._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:t.brightness,callback:function(s){t.brightness=s},expression:"brightness"}}),t._v(" "),a("span",[t._v("contrast")]),t._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:t.contrast,callback:function(s){t.contrast=s},expression:"contrast"}}),t._v(" "),a("span",[t._v("switch url")]),t._v(" "),a("md-select",{attrs:{placeholder:"切换影像"},model:{value:t.url,callback:function(s){t.url=s},expression:"url"}},t._l(t.options,function(s){return a("md-option",{key:s.value,attrs:{value:s.value}},[t._v("\n            "+t._s(s.label)+"\n          ")])}))],1),t._v(" "),a("cesium-viewer",{on:{ready:t.ready}},[a("openstreetmap-imagery-layer",{attrs:{url:t.url,alpha:t.alpha,brightness:t.brightness,contrast:t.contrast}})],1)],1)]],2)]],2)},r=[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("openstreetmap-imagery-layer")]),this._v("Provides tiled imagery hosted by Mapbox.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("https://a.tile.openstreetmap.org")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The OpenStreetMap server url.")])]),t._v(" "),a("tr",[a("td",[t._v("fileExtension")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'png'")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("required")]),t._v("The file extension for images on the server.")])]),t._v(" "),a("tr",[a("td",[t._v("rectangle")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The rectangle of the layer.")])]),t._v(" "),a("tr",[a("td",[t._v("minimumLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The minimum level-of-detail supported by the imagery provider.")])]),t._v(" "),a("tr",[a("td",[t._v("maximumLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.")])]),t._v(" "),a("tr",[a("td",[t._v("ellipsoid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The ellipsoid. If not specified, the WGS84 ellipsoid is used.")])]),t._v(" "),a("tr",[a("td",[t._v("credit")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'MapQuest, Open Street Map and contributors, CC-BY-SA'")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("A credit for the data source, which is displayed on the canvas.")])]),t._v(" "),a("tr",[a("td",[t._v("alpha")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[t._v("1.0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.")])]),t._v(" "),a("tr",[a("td",[t._v("brightness")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[t._v("1.0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("contrast")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[t._v("1.0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("hue")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[t._v("0.0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("saturation")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[t._v("1.0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("gamma")]),t._v(" "),a("td",[t._v("Number|function")]),t._v(" "),a("td",[t._v("1.0")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.")])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("True if the layer is shown; otherwise, false.")])]),t._v(" "),a("tr",[a("td",[t._v("splitDirection")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The ImagerySplitDirection split to apply to this layer.")])]),t._v(" "),a("tr",[a("td",[t._v("minimumTerrainLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.")])]),t._v(" "),a("tr",[a("td",[t._v("maximumTerrainLevel")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer}")]),t._v(" "),a("td",[t._v("Triggers when OpenStreetMapImageryLayer is ready. It returns a core class of Cesium, a viewer instance.")])]),t._v(" "),a("tr",[a("td",[t._v("errorEvent")]),t._v(" "),a("td",[t._v("TileProviderError")]),t._v(" "),a("td",[t._v("Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("alpha"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"alpha"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":interval")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0.01"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("tooltip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"hover"')]),t._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("brightness"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"brightness"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"3"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":interval")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0.01"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("tooltip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"hover"')]),t._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("contrast"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"contrast"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"3"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":interval")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"0.01"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("tooltip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"hover"')]),t._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("vue-slider")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("switch url"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"切换影像"')]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item in options"')]),t._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(">")]),t._v("\n          {{item.label}}\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("openstreetmap-imagery-layer")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":alpha")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"alpha"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":brightness")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"brightness"')]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":contrast")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"contrast"')]),t._v(" />")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'https://a.tile.openstreetmap.org'")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": [{\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'https://a.tile.openstreetmap.org'")]),t._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'openstreetmap1'")]),t._v("\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'https://stamen-tiles.a.ssl.fastly.net/toner/'")]),t._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'openstreetmap2'")]),t._v("\n        }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("alpha")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("brightness")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("contrast")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" {Cesium, viewer} = cesiumInstance\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("scoped")]),t._v(">")]),a("span",{attrs:{class:"css"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-selector-class"}},[t._v(".viewer")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[t._v("width")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("100%")]),t._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[t._v("height")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("400px")]),t._v(";\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n")])])}];e._withStripped=!0},NsLW:function(t,s,a){var e=a("75eC");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("SZ7m").default)("7c91f8c8",e,!1,{})},VDMx:function(t,s,a){var e,r,n;r=[s],void 0===(n="function"==typeof(e=function(s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{url:"https://a.tile.openstreetmap.org",options:[{value:"https://a.tile.openstreetmap.org",label:"openstreetmap1"},{value:"https://stamen-tiles.a.ssl.fastly.net/toner/",label:"openstreetmap2"}],alpha:1,brightness:1,contrast:1}},methods:{ready:function(t){t.Cesium,t.viewer}}},t.exports=s.default})?e.apply(s,r):e)||(t.exports=n)},VyEB:function(t,s,a){t.exports=a("cDcY")},cDcY:function(t,s,a){"use strict";a.r(s);var e=a("VDMx"),r=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var l=a("7im2"),v=a("JFUb"),i=!1;var _=function(t){i||(a("z7FL"),a("NsLW"))},o=Object(v.a)(r.a,l.a,l.b,!1,_,"data-v-704fd649",null);o.options.__file="docs/md/en/openstreetmap-imagery-layer.md",s.default=o.exports},jJlS:function(t,s,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.viewer[data-v-704fd649] {\n  width: 100%;\n  height: 400px;\n}\n",""])},z7FL:function(t,s,a){var e=a("jJlS");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("SZ7m").default)("b31a8872",e,!1,{})}}]);