(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/nyW":function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"\n.viewer[data-v-dc3e79b8] {\n  width: 100%;\n  height: 400px;\n}\n",""])},DVsG:function(s,t,a){"use strict";a.d(t,"a",function(){return v}),a.d(t,"b",function(){return _});var v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[a("h1",[s._v("OpenStreetMap影像图层")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("MapBox影像图层")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("div",{staticStyle:{position:"absolute",left:"1%",top:"1%",width:"150px","z-index":"9999",color:"white"}},[a("span",[s._v("透明度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01,tooltip:"hover"},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),a("span",[s._v("亮度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),a("span",[s._v("对比度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01,tooltip:"hover"},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}}),s._v(" "),a("span",[s._v("切换服务")]),s._v(" "),a("md-select",{attrs:{placeholder:"切换影像"},model:{value:s.url,callback:function(t){s.url=t},expression:"url"}},s._l(s.options,function(t){return a("md-option",{key:t.value,attrs:{value:t.value}},[s._v("\n            "+s._s(t.label)+"\n          ")])}))],1),s._v(" "),a("cesium-viewer",{on:{ready:s.ready}},[a("openstreetmap-imagery-layer",{attrs:{url:s.url,alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}})],1)],1)]],2)]],2)},_=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("openstreetmap-imagery-layer")]),this._v("加载由Mapbox托管的影像。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("url")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("https://a.tile.openstreetmap.org")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("指定OpenStreetMap服务地址。")])]),s._v(" "),a("tr",[a("td",[s._v("fileExtension")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("'png'")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v("指定图片格式。")])]),s._v(" "),a("tr",[a("td",[s._v("rectangle")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层的矩形范围，此矩形限制了影像可见范围。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("最小层级。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("最大层级。")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("参考椭球体，没指定的话默认WGS84。")])]),s._v(" "),a("tr",[a("td",[s._v("credit")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("服务描述信息。")])]),s._v(" "),a("tr",[a("td",[s._v("alpha")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层透明度值，取值范围为0.0~1.0。")])]),s._v(" "),a("tr",[a("td",[s._v("brightness")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层亮度值。值为1.0表示使用原图；值大于1.0时图像将变亮；值小于1.0时图像将变暗。")])]),s._v(" "),a("tr",[a("td",[s._v("contrast")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层对比度。值为1.0表示使用原图；值大于1.0表示增加对比度；值小于1.0表示降低对比度。")])]),s._v(" "),a("tr",[a("td",[s._v("hue")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("0.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层色调。值为0.0表示使用原图。")])]),s._v(" "),a("tr",[a("td",[s._v("saturation")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层饱和度。值为1.0表示使用原图；值大于1.0表示增加饱和度；值小于1.0表示降低饱和度。")])]),s._v(" "),a("tr",[a("td",[s._v("gamma")]),s._v(" "),a("td",[s._v("Number|function")]),s._v(" "),a("td",[s._v("1.0")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("图层伽马校正。值为1.0表示使用原图。")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("指定图层是否显示，true表示显示此图层，false表示不显示。")])]),s._v(" "),a("tr",[a("td",[s._v("splitDirection")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("指定影像图层分割方向。0始终显示影像图层，-1在Scene#imagerySplitPosition的左侧显示影像图层，1在Scene#imagerySplitPosition右侧显示影像图层。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumTerrainLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("最小地形细节层次。level 0是最小细节层次。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumTerrainLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("最大地形细节层次。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),s._v(" "),a("tr",[a("td",[s._v("errorEvent")]),s._v(" "),a("td",[s._v("TileProviderError")]),s._v(" "),a("td",[s._v("当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("透明度"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("亮度"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("对比度"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tooltip")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hover"')]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("切换服务"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"切换影像"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("openstreetmap-imagery-layer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" />")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://a.tile.openstreetmap.org'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://a.tile.openstreetmap.org'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'openstreetmap1'")]),s._v("\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://stamen-tiles.a.ssl.fastly.net/toner/'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'openstreetmap2'")]),s._v("\n        }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".viewer")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])}];v._withStripped=!0},OBvp:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"\n.viewer[data-v-dc3e79b8] {\n  width: 100%;\n  height: 400px;\n}\n",""])},Ozbz:function(s,t,a){var v,_,n;_=[t],void 0===(n="function"==typeof(v=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{url:"https://a.tile.openstreetmap.org",options:[{value:"https://a.tile.openstreetmap.org",label:"openstreetmap1"},{value:"https://stamen-tiles.a.ssl.fastly.net/toner/",label:"openstreetmap2"}],alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},s.exports=t.default})?v.apply(t,_):v)||(s.exports=n)},PIJ1:function(s,t,a){s.exports=a("azh4")},azh4:function(s,t,a){"use strict";a.r(t);var v=a("Ozbz"),_=a.n(v);for(var n in v)"default"!==n&&function(s){a.d(t,s,function(){return v[s]})}(n);var r=a("DVsG"),l=a("JFUb"),e=!1;var p=function(s){e||(a("zotM"),a("mzvz"))},c=Object(l.a)(_.a,r.a,r.b,!1,p,"data-v-dc3e79b8",null);c.options.__file="docs/md/zh/openstreetmap-imagery-layer.md",t.default=c.exports},mzvz:function(s,t,a){var v=a("/nyW");"string"==typeof v&&(v=[[s.i,v,""]]),v.locals&&(s.exports=v.locals);(0,a("SZ7m").default)("842b116c",v,!1,{})},zotM:function(s,t,a){var v=a("OBvp");"string"==typeof v&&(v=[[s.i,v,""]]),v.locals&&(s.exports=v.locals);(0,a("SZ7m").default)("30698b6e",v,!1,{})}}]);