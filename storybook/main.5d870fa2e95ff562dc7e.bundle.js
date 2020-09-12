(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1039:function(module,exports){},1126:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(161);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1307)],module)}.call(this,__webpack_require__(270)(module))},1307:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":1308};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1307},1308:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_guitar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),react_guitar__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_guitar__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(161),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),_tonaljs_midi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(56),lodash__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(954),_storybook_addons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(52),react_guitar_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(955),react_guitar_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_guitar_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7__),react_guitar_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(956),react_guitar_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_guitar_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8__),react_guitar_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(957),react_guitar_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_guitar_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9__),react_guitar_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(958),react_guitar_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_guitar_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10__),react_guitar_theme_coco__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(959),react_guitar_theme_coco__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_guitar_theme_coco__WEBPACK_IMPORTED_MODULE_11__),react_guitar_theme_dark__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(960),react_guitar_theme_dark__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_guitar_theme_dark__WEBPACK_IMPORTED_MODULE_12__),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},withSourceLoader=__webpack_require__(332).withSource,__STORY__=(__webpack_require__(332).addSource,"import React from 'react'\nimport Guitar, {\n  useSound,\n  tunings,\n  getRenderFingerRelative,\n  getRenderFingerSpn,\n  spanishTheme\n} from 'react-guitar'\nimport { storiesOf } from '@storybook/react'\nimport {\n  withKnobs,\n  number,\n  boolean,\n  select,\n  color\n} from '@storybook/addon-knobs'\nimport { midiToNoteName } from '@tonaljs/midi'\nimport { range } from 'lodash'\nimport { useState } from '@storybook/addons'\nimport E2 from 'react-guitar/resources/E2.mp3'\nimport D3 from 'react-guitar/resources/D3.mp3'\nimport G3 from 'react-guitar/resources/G3.mp3'\nimport E4 from 'react-guitar/resources/E4.mp3'\nimport coco from 'react-guitar-theme-coco'\nimport dark from 'react-guitar-theme-dark'\n\nconst samples = { E2, D3, G3, E4 }\nconst themes = { spanish: spanishTheme, dark, coco }\n\nstoriesOf('Guitar', module)\n  .addDecorator(withKnobs)\n  .add('advanced', () => {\n    const notes = range(12)\n      .map(note => note + 12)\n      .reduce(\n        (acc, note) => ({\n          ...acc,\n          [midiToNoteName(note, { pitchClass: true, sharps: true })]: note\n        }),\n        {} as {\n          [K: string]: number\n        }\n      )\n    const root = select('Root', notes, notes['C'])\n    const renderFingerFunctions = {\n      'Scientific Pitch Notation': getRenderFingerSpn(tunings.standard),\n      'Relative to Root': getRenderFingerRelative(tunings.standard, root)\n    }\n    const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0])\n    const { play } = useSound(samples, strings)\n    return (\n      <Guitar\n        lefty={boolean('Lefty', false)}\n        frets={{\n          from: number('From fret', 0),\n          amount: number('Frets', 22)\n        }}\n        strings={strings}\n        renderFinger={\n          renderFingerFunctions[\n            select<keyof typeof renderFingerFunctions>(\n              'Notes',\n              ['Scientific Pitch Notation', 'Relative to Root'],\n              'Scientific Pitch Notation'\n            )\n          ]\n        }\n        theme={(themes as any)[select('Theme', Object.keys(themes), 'spanish')]}\n        onChange={setStrings}\n        onPlay={play}\n      />\n    )\n  })\n  .add('with fixed A minor', () => <Guitar strings={[0, 1, 2, 2, 0, -1]} />)\n  .add('with fixed and centered A bar chord', () => (\n    <Guitar\n      strings={[5, 5, 6, 7, 7, 5]}\n      lefty={boolean('Lefty', false)}\n      center\n    />\n  ))\n  .add('with fixed A minor and sound', () => {\n    const fretting = [0, 1, 2, 2, 0, -1]\n    const { play } = useSound(samples, fretting)\n    return <Guitar strings={fretting} onPlay={play} />\n  })\n  .add('editable', () => {\n    const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0])\n    return <Guitar strings={strings} onChange={setStrings} />\n  })\n  .add('without strings', () => <Guitar />)\n  .add('ukelele', () => {\n    const [strings, setStrings] = useState([0, 0, 0, 0])\n    const { play } = useSound(samples, strings, tunings.ukelele)\n    return (\n      <Guitar\n        strings={strings}\n        onPlay={play}\n        renderFinger={getRenderFingerSpn(tunings.ukelele)}\n        onChange={setStrings}\n      />\n    )\n  })\n  .add('dark', () => (\n    <Guitar theme={themes.dark} strings={[0, 0, 0, 0, 0, 0]} />\n  ))\n  .add('coco', () => (\n    <Guitar theme={themes.coco} strings={[0, 0, 0, 0, 0, 0]} />\n  ))\n  .add('theming', () => (\n    <Guitar\n      theme={{\n        description: 'A guitar with user defined colors',\n        color: color('color', spanishTheme.color),\n        nut: { color: color('Nut color', spanishTheme.nut.color) },\n        fret: {\n          color: color('Fret color', spanishTheme.fret.color),\n          separator: {\n            color: color(\n              'Fret separator color',\n              spanishTheme.fret.separator.color\n            ),\n            radius: boolean('Fret separator radius', false),\n            shadow: boolean('Fret separator shadow', true),\n            width: select('Fret separator width', ['sm', 'md'], 'sm')\n          },\n          counter: {\n            color: color('Counter color', spanishTheme.fret.counter.color)\n          }\n        },\n        string: {\n          color: string =>\n            color(`String color ${string}`, spanishTheme.string.color(string))\n        },\n        finger: {\n          text: {\n            color: color('Finger text color', spanishTheme.finger.text.color)\n          },\n          color: color('Finger color', spanishTheme.finger.color)\n        }\n      }}\n      renderFinger={getRenderFingerSpn(tunings.standard)}\n      strings={[0, 0, 0, 0, 0, 0]}\n    />\n  ))\n  .add('smaller', () => (\n    <div style={{ fontSize: '.5em' }}>\n      <Guitar strings={[0, 1, 2, 2, 0, -1]} />\n    </div>\n  ))\n"),__ADDS_MAP__={"guitar--smaller":{startLoc:{col:7,line:146},endLoc:{col:3,line:150},startBody:{col:18,line:146},endBody:{col:3,line:150}},"guitar--theming":{startLoc:{col:7,line:110},endLoc:{col:3,line:145},startBody:{col:18,line:110},endBody:{col:3,line:145}},"guitar--coco":{startLoc:{col:7,line:107},endLoc:{col:3,line:109},startBody:{col:15,line:107},endBody:{col:3,line:109}},"guitar--dark":{startLoc:{col:7,line:104},endLoc:{col:3,line:106},startBody:{col:15,line:104},endBody:{col:3,line:106}},"guitar--ukelele":{startLoc:{col:7,line:92},endLoc:{col:3,line:103},startBody:{col:18,line:92},endBody:{col:3,line:103}},"guitar--without-strings":{startLoc:{col:7,line:91},endLoc:{col:42,line:91},startBody:{col:26,line:91},endBody:{col:42,line:91}},"guitar--editable":{startLoc:{col:7,line:87},endLoc:{col:3,line:90},startBody:{col:19,line:87},endBody:{col:3,line:90}},"guitar--with-fixed-a-minor-and-sound":{startLoc:{col:7,line:82},endLoc:{col:3,line:86},startBody:{col:39,line:82},endBody:{col:3,line:86}},"guitar--with-fixed-and-centered-a-bar-chord":{startLoc:{col:7,line:75},endLoc:{col:3,line:81},startBody:{col:46,line:75},endBody:{col:3,line:81}},"guitar--with-fixed-a-minor":{startLoc:{col:7,line:74},endLoc:{col:75,line:74},startBody:{col:29,line:74},endBody:{col:75,line:74}},"guitar--advanced":{startLoc:{col:7,line:32},endLoc:{col:3,line:73},startBody:{col:19,line:32},endBody:{col:3,line:73}}},samples={E2:react_guitar_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7___default.a,D3:react_guitar_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8___default.a,G3:react_guitar_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9___default.a,E4:react_guitar_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10___default.a},themes={spanish:react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme,dark:react_guitar_theme_dark__WEBPACK_IMPORTED_MODULE_12___default.a,coco:react_guitar_theme_coco__WEBPACK_IMPORTED_MODULE_11___default.a};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Guitar",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",[],{},"/home/runner/work/react-guitar/react-guitar/packages/react-guitar-storybook",{})).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("advanced",(function(){var notes=Object(lodash__WEBPACK_IMPORTED_MODULE_5__.range)(12).map((function(note){return note+12})).reduce((function(acc,note){var _a;return __assign(__assign({},acc),((_a={})[Object(_tonaljs_midi__WEBPACK_IMPORTED_MODULE_4__.b)(note,{pitchClass:!0,sharps:!0})]=note,_a))}),{}),root=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Root",notes,notes.C),renderFingerFunctions={"Scientific Pitch Notation":Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.getRenderFingerSpn)(react_guitar__WEBPACK_IMPORTED_MODULE_1__.tunings.standard),"Relative to Root":Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.getRenderFingerRelative)(react_guitar__WEBPACK_IMPORTED_MODULE_1__.tunings.standard,root)},_a=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.useState)([0,0,0,0,0,0]),strings=_a[0],setStrings=_a[1],play=Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.useSound)(samples,strings).play;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{lefty:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Lefty",!1),frets:{from:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("From fret",0),amount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Frets",22)},strings:strings,renderFinger:renderFingerFunctions[Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Notes",["Scientific Pitch Notation","Relative to Root"],"Scientific Pitch Notation")],theme:themes[Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Theme",Object.keys(themes),"spanish")],onChange:setStrings,onPlay:play})})).add("with fixed A minor",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{strings:[0,1,2,2,0,-1]})})).add("with fixed and centered A bar chord",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{strings:[5,5,6,7,7,5],lefty:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Lefty",!1),center:!0})})).add("with fixed A minor and sound",(function(){var fretting=[0,1,2,2,0,-1],play=Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.useSound)(samples,fretting).play;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{strings:fretting,onPlay:play})})).add("editable",(function(){var _a=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.useState)([0,0,0,0,0,0]),strings=_a[0],setStrings=_a[1];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{strings:strings,onChange:setStrings})})).add("without strings",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,null)})).add("ukelele",(function(){var _a=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.useState)([0,0,0,0]),strings=_a[0],setStrings=_a[1],play=Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.useSound)(samples,strings,react_guitar__WEBPACK_IMPORTED_MODULE_1__.tunings.ukelele).play;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{strings:strings,onPlay:play,renderFinger:Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.getRenderFingerSpn)(react_guitar__WEBPACK_IMPORTED_MODULE_1__.tunings.ukelele),onChange:setStrings})})).add("dark",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{theme:themes.dark,strings:[0,0,0,0,0,0]})})).add("coco",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{theme:themes.coco,strings:[0,0,0,0,0,0]})})).add("theming",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{theme:{description:"A guitar with user defined colors",color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.color),nut:{color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Nut color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.nut.color)},fret:{color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Fret color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.fret.color),separator:{color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Fret separator color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.fret.separator.color),radius:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Fret separator radius",!1),shadow:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Fret separator shadow",!0),width:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Fret separator width",["sm","md"],"sm")},counter:{color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Counter color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.fret.counter.color)}},string:{color:function(string){return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("String color "+string,react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.string.color(string))}},finger:{text:{color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Finger text color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.finger.text.color)},color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color)("Finger color",react_guitar__WEBPACK_IMPORTED_MODULE_1__.spanishTheme.finger.color)}},renderFinger:Object(react_guitar__WEBPACK_IMPORTED_MODULE_1__.getRenderFingerSpn)(react_guitar__WEBPACK_IMPORTED_MODULE_1__.tunings.standard),strings:[0,0,0,0,0,0]})})).add("smaller",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{fontSize:".5em"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_guitar__WEBPACK_IMPORTED_MODULE_1___default.a,{strings:[0,1,2,2,0,-1]}))}))}.call(this,__webpack_require__(270)(module))},1311:function(module,exports,__webpack_require__){"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=__webpack_require__(1344),r=__webpack_require__(1343),n=__webpack_require__(5),o=e(__webpack_require__(1320)),i=__webpack_require__(1321),a=e(__webpack_require__(1322)),s=__webpack_require__(1323),l=e(__webpack_require__(1324));function u(e,t,r){var n=e.slice(0);return n[t]=r,n}var c=function(e){return e.split(" ").map((function(e){var t;return null!==(t=i.midi(e))&&void 0!==t?t:0})).reverse()},d={standard:c("E2 A2 D3 G3 B3 E4"),"rondeña":c("D2 A2 D3 F#3 B3 E4"),dadgad:c("D2 A2 D3 G3 A3 D4"),ukelele:c("G4 C4 E4 A4"),lute:c("E2 A2 D3 F#3 B3 E4")},f="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,p={description:"A typical Spanish guitar with a brown fretboard and golden details",color:"#333333",nut:{color:"#fffacd"},fret:{color:"#9e6429",separator:{color:"#daa520",shadow:!0},counter:{color:"#606c76"}},string:{color:function(){return"#eeeeee"}},finger:{text:{color:"#606c76"},color:"white"}},g=function(e){return"md"===e.fret.separator.width?.7:.3},m=function(e,t){return(t+e%t)%t};function v(e){var r,n=e.frets,i=n.from,s=n.amount;return t.jsx("div",{className:a(e.className,"frets"),onMouseEnter:e.onMouseEnter},void 0!==e.currentFret&&t.jsx("div",{className:"fret mute",style:{zIndex:-1===e.currentFret?1:void 0}},null===(r=e.children)||void 0===r?void 0:r.call(e,-1)),o(i,i+s+1).map((function(r){var n;return t.jsx("div",{className:a("fret",{nut:0===r}),key:r},null===(n=e.children)||void 0===n?void 0:n.call(e,r))})))}exports.default=function(e){var r=e.strings,o=void 0===r?[]:r,i=e.frets,s=void 0===i?{from:0,amount:22}:i,c=e.lefty,d=void 0!==c&&c,h=e.center,y=void 0!==h&&h,b=e.renderFinger,x=e.theme,j=void 0===x?p:x,k=e.playOnHover,w=n.useMemo((function(){return function(e){return t.css({fontFamily:"'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",position:"relative",boxSizing:"border-box",maxWidth:"100%",overflowY:"auto",borderTopColor:e.color,borderTopStyle:"solid",borderTopWidth:"0.5em","&.lefty":{direction:"rtl",".marker":{transform:"scale(-1, 1)"}},"*, *::before, *::after":{boxSizing:"border-box"},".frets":{display:"flex",position:"relative",".fret":{width:"10em",flexShrink:0,position:"relative","&.nut,&.mute":{width:"7em"},"&.mute":{position:"absolute",top:0,left:0}}},".frame":{height:"2em",".counter":{fontWeight:"bold",color:e.fret.counter.color},".fret":{display:"flex",alignItems:"center",justifyContent:"center",background:e.color}},".strings":{display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",minHeight:3.33125*3+"em",".string":{margin:0,padding:0,border:"none",".fret":{display:"flex",alignItems:"center",".actual-string":{transition:"opacity ease-in-out 0.1s",content:'""',width:"100%",height:"0.65em",position:"absolute",left:"0"},label:{fontSize:"1em",width:"100%",height:"3.33125em",display:"flex",alignItems:"center",justifyContent:"center",margin:0},"&:hover input:not(:disabled):not(:checked) ~ .finger":{opacity:.5},"input:not(:disabled)":{height:"100%",width:"100%"},"input:not(:disabled),input:not(:disabled) ~ .finger":{cursor:"pointer"},input:{position:"absolute",margin:0,opacity:0,"&:checked ~ .finger":{opacity:1},"&:focus:not(:disabled) ~ .finger":{boxShadow:"0 0 0 0.2em rgba(66, 153, 225, 0.5)"}},"&.mute":{"input:checked ~ .finger":{opacity:0},"input:focus ~ .finger,&:hover input:checked ~ .finger":{opacity:.5}}}}},".fretboard":{position:"absolute",left:"0",right:"0",top:"0",bottom:"0",".fret":{display:"flex",flexDirection:"row-reverse",alignItems:"center",justifyContent:"end",backgroundColor:e.fret.color,"&.nut":{backgroundColor:e.nut.color},"&:not(.nut)::before":{content:'""',position:"absolute",top:"0",bottom:"0",width:g(e)+"em",backgroundColor:e.fret.separator.color,borderRight:e.fret.separator.shadow?"solid "+g(e)/2+"em "+l(e.fret.separator.color).darken(.1):0,borderRadius:e.fret.separator.radius?"3px":0,display:"inline-block"},".marker":{position:"absolute",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center"}}},".finger":{color:e.finger.text.color,transition:"opacity ease-in-out 0.1s",background:e.finger.color,width:"5em",padding:"0",height:3.5/1.5+"em",borderRadius:"20px",borderBottom:"solid 0.2em "+l(e.finger.color).darken(.35),boxShadow:"0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23)",fontWeight:"bold",opacity:0,display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative"},".sr-only":{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:0}})}(j)}),[j]),C=n.useRef(null),S=function(e,t){var r,n,i;return void 0===t&&(t=o[e]),null===(r=C.current)||void 0===r||null===(n=r.querySelector)||void 0===n||null===(i=n.call(r,'input[name="string-'+e+'"][value="'+t+'"]'))||void 0===i?void 0:i.focus()},N=function(t){var r,n=0===o[t]?-1:0;S(t,n),null===(r=e.onChange)||void 0===r||r.call(e,u(o,t,n))};f((function(){var e=C.current;if(y&&e){var t=e.querySelectorAll(".fret"),r=o.filter((function(e){return e>0})),n=Math.min.apply(Math,r),i=Math.max.apply(Math,r),a=t[n+Math.floor((i-n)/2)];a&&(e.scrollLeft=a.offsetLeft-e.offsetWidth/2+a.offsetWidth/2)}}),[C,o,y,d]);var D=n.useState(0),E=D[0],F=D[1];return t.jsx("div",{ref:C,css:w,className:a("guitar",{lefty:d},e.className),onKeyDown:function(e){38!==e.keyCode&&40!==e.keyCode||(S(m(E+(38===e.keyCode?-1:1),o.length)),e.preventDefault())}},t.jsx("div",{className:"sr-only"},"This is a guitar with ",o.length," strings and ",s.amount," frets, starting from ",s.from,". Its theme describes it as:"," ",j.description,".",e.onChange&&t.jsx("span",null,"Once you focus on a string you will be able to navigate strings and frets using the arrow keys."),e.onPlay&&t.jsx("span",null,"When a specific string is focused you can play it by pressing 'p'.")),t.jsx("div",{className:"sr-only",role:"status"},"Current fretting: ",o.join(", "),"."),t.jsx("div",{className:"strings"},t.jsx(v,{className:"fretboard",frets:s},j.fret.marker?function(e){var r,n;return t.jsx("div",{className:"marker"},null===(r=(n=j.fret).marker)||void 0===r?void 0:r.call(n,e))}:void 0),o.map((function(r,n){return t.jsx("fieldset",{key:n,className:"string"},t.jsx("legend",{className:"sr-only"},"String ",n+1,"."),t.jsx(v,{currentFret:r,frets:s,onMouseEnter:function(){var t;return k&&(null===(t=e.onPlay)||void 0===t?void 0:t.call(e,n))}},(function(i){return t.jsx("label",null,t.jsx("span",{className:"sr-only"},"String ",n+1,", fret ",i,"."," ",-1===r&&"This string is muted."),i>=0&&t.jsx("span",{className:"actual-string",style:{opacity:-1===r?.2:1,borderBottom:"solid 0.2em "+l(j.string.color(n)).darken(.35),backgroundColor:j.string.color(n)}}),t.jsx("input",{disabled:!e.onChange,type:"radio",name:"string-"+n,value:i,checked:r===i,onChange:function(t){var r;null===(r=e.onChange)||void 0===r||r.call(e,u(o,n,i)),t.target.focus()},onClick:function(){return i===r&&N(n)},onKeyDown:function(t){var r;switch(t.keyCode){case 80:null===(r=e.onPlay)||void 0===r||r.call(e,n);break;case 13:N(n),t.preventDefault()}},onFocus:function(){return F(n)}}),t.jsx("span",{className:"finger"},null==b?void 0:b(n,-1===i?0:i)))})))}))),t.jsx(v,{className:"frame",frets:s},(function(e){return 0!==e?t.jsx("span",{className:"counter"},e):null})))},exports.getRenderFingerRelative=function(e,r){return function(i,a){return t.jsx(n.Fragment,null,o(12).map(s.fromSemitones)[m(e[i]+a-r,12)])}},exports.getRenderFingerSpn=function(e){return function(r,n){var o=i.get(i.fromMidiSharps(e[r]+n)),a=o.acc,s=o.oct;return t.jsx("span",null,o.letter,"#"===a?"♯":"b"===a?"♭":"",t.jsx("sub",{"aria-label":"octave "+s},s))}},exports.spanishTheme=p,exports.tunings=d,exports.useSound=function(e,t,i,a){void 0===i&&(i=d.standard);var s=n.useState(!1),l=s[0],c=s[1],f=n.useState(),p=f[0],g=f[1],m=n.useState(i.map((function(){return!1}))),v=m[0],h=m[1];n.useEffect((function(){if(!a){var t=new r.Sampler(e,(function(){return c(!0)})).toDestination();return g(t),function(){t.dispose()}}}),[a,e]);var y=n.useCallback((function(e,n){var o;void 0===n&&(n=0);var s=null!==(o=t[e])&&void 0!==o?o:0;l&&!a&&p&&s>=0&&(setTimeout((function(){return h((function(t){return u(t,e,!0)}))}),0),setTimeout((function(){return h((function(t){return u(t,e,!1)}))}),3e3),p.triggerAttackRelease(r.Frequency(i[e]+s,"midi").toFrequency(),4,r.now()+n))}),[l,a,p,t,i]),b=n.useCallback((function(e){o(i.length).forEach((function(t){y(e?t:i.length-t-1,.05*t)}))}),[i.length,y]);return{play:y,strum:b,playing:v}}},1341:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=(e=__webpack_require__(5))&&"object"==typeof e&&"default"in e?e.default:e,r=function(){return t.createElement("svg",{fill:"#feb756",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 131.62 144.09"},t.createElement("path",{d:"M41,102.9,43,93.72l4.22.89L45,104.79a41,41,0,0,0,11.9,2.91l-.1-9.51,4.3,0,.1,9.69a42.3,42.3,0,0,0,10.68-1.65L69.85,95.65l4.22-.83,2,10A55.37,55.37,0,0,0,85,100.3L83,90.49l4.23-.83,1.58,8.06c.79-.56,1.59-1.16,2.39-1.78,0-.12,0-.23,0-.34h0c1.82-3.81,3.2-12.22,4.1-16.35,8.07-1.37,17.13-1.59,24-6.58,5-3.6,8.25-9,10.13-14.76C133.24,46.46,132.21,32,125,22.05A54.11,54.11,0,0,0,96.53,1.93C83.88-1.7,70.69.71,57.86,1.76,39.45,3.26,21.61,7.92,9.52,22.85-.55,35.28-3.17,51.82,4.28,66.24A24.65,24.65,0,0,0,15.81,77.15c1.43.68,16.79,4.72,16.75,4q.51,7.92,1,15.83M104.5,27.49a3.73,3.73,0,1,1-3.29,4.13A3.72,3.72,0,0,1,104.5,27.49ZM91.25,24.43A3.73,3.73,0,1,1,88,28.56,3.75,3.75,0,0,1,91.25,24.43Zm-13,5.8A3.73,3.73,0,1,1,75,34.36,3.72,3.72,0,0,1,78.25,30.23ZM57.82,43.73a3.73,3.73,0,1,1-4.13-3.28A3.72,3.72,0,0,1,57.82,43.73ZM48.07,27.36a3.73,3.73,0,1,1-3.29,4.13A3.73,3.73,0,0,1,48.07,27.36ZM34.82,24.3a3.73,3.73,0,1,1-3.28,4.13A3.73,3.73,0,0,1,34.82,24.3Zm-13,5.79a3.73,3.73,0,1,1-3.29,4.14A3.74,3.74,0,0,1,21.82,30.09ZM15.67,47.86a3.73,3.73,0,1,1,4.13,3.29A3.72,3.72,0,0,1,15.67,47.86Zm10,15.91A3.73,3.73,0,1,1,29,59.64,3.72,3.72,0,0,1,25.67,63.77Zm13.2,3.4A3.73,3.73,0,1,1,42.15,63,3.75,3.75,0,0,1,38.87,67.17Zm-.72-9.31A12.49,12.49,0,1,1,49.13,44,12.48,12.48,0,0,1,38.15,57.86Zm10-.46a3.73,3.73,0,1,1,4.14,3.28A3.73,3.73,0,0,1,48.19,57.4ZM73.81,87.21c-2.89,1.16-4.94.83-6.22-.48s-3.41-5.8-3.41-5.8S62.27,85.4,61,86.71s-3.34,1.64-6.23.48S52,81.3,53,78.87c1.18-3,3.52-5.29,5.43-7.77s3.87-4.94,5.85-7.37V63.6l0,.06,0-.07v.14c1.77,2.19,3.51,4.4,5.24,6.62,2.16,2.8,5.07,5.41,6.21,8.84C76.61,81.59,76.64,86.08,73.81,87.21ZM72.1,48a3.73,3.73,0,1,1,4.13,3.28A3.74,3.74,0,0,1,72.1,48Zm10,15.91a3.73,3.73,0,1,1,3.28-4.14A3.75,3.75,0,0,1,82.11,63.91ZM95.3,67.3a3.73,3.73,0,1,1,3.28-4.13A3.73,3.73,0,0,1,95.3,67.3ZM94.58,58a12.49,12.49,0,1,1,11-13.83A12.48,12.48,0,0,1,94.58,58Zm14.18,2.83A3.73,3.73,0,1,1,112,56.68,3.73,3.73,0,0,1,108.76,60.82ZM111,48a3.73,3.73,0,1,1,3.29-4.14A3.73,3.73,0,0,1,111,48Z"}),t.createElement("path",{d:"M91.2,109.5l-4.22.83-1-5.23a57.09,57.09,0,0,1-9,4.25L78,114.66l-4.23.83-.94-4.82a46.33,46.33,0,0,1-7,1.38c-1.53.17-3,.25-4.46.28l.06,6.17-4.3,0L57,112.18a46.38,46.38,0,0,1-12.87-3L43,114.88,38.75,114l1.39-6.55A48.28,48.28,0,0,1,32.79,103l-2,14.13c-.63,9,2.43,18.33,10.62,22.88,6.63,3.69,14.73,4.39,22.17,4,1.56-.07,3.12-.2,4.67-.39a27.49,27.49,0,0,0,19.59-12.15c4-6,4.43-13.07,4-20.05-.19-3.23-.52-6.45-.67-9.69-.44.31-.89.64-1.33.93Z"}))};exports.default={description:"The guitar from the Pixar's film Coco with a white fretboard and golden details including a typical Mexican skull on the third fret",color:"#333333",nut:{color:"#FEB756"},fret:{color:"#fefaf2",separator:{color:"#FEB756",radius:!0,shadow:!0,width:"md"},counter:{color:"#606c76"},marker:function(e){return 3===e?t.createElement("div",{style:{width:"7em",transform:"rotate(-90deg)"}},t.createElement(r,null)):[3,5,7,9,12,15,17,19,21].includes(e)?t.createElement("div",{style:{backgroundColor:"#FEB756",height:"3em",width:"3em",transform:[7,12].includes(e)?"rotate(45deg) skew(15deg, 15deg)":void 0,borderRadius:[3,7,12].includes(e)?void 0:"100%"}}):null}},string:{color:function(){return"#f3f3f3"}},finger:{color:"white",text:{color:"#606c76"}}}},1342:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=(e=__webpack_require__(5))&&"object"==typeof e&&"default"in e?e.default:e;exports.default={description:"Jimi Hendrix's Fender Stratocaster with a black fretboard and silver details",color:"#222831",nut:{color:"#222831"},fret:{color:"#393e46",separator:{color:"#eeeeee",shadow:!0},marker:function(e){return[3,5,7,9,12,15,17,19,21].includes(e)?r.createElement("span",{style:{width:"1em",height:"1em",borderRadius:"100%",backgroundColor:"#eeeeee"}}):null},counter:{color:"#606c76"}},string:{color:function(){return"#f3f3f3"}},finger:{color:"white",text:{color:"#606c76"}}}},6:function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(1311)},955:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/E2.60d1bd4d.mp3"},956:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/D3.a01e799c.mp3"},957:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/G3.1fe79ca6.mp3"},958:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/E4.ac1dc3ab.mp3"},959:function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(1341)},960:function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(1342)},972:function(module,exports,__webpack_require__){__webpack_require__(973),__webpack_require__(1125),module.exports=__webpack_require__(1126)}},[[972,1,2]]]);
//# sourceMappingURL=main.5d870fa2e95ff562dc7e.bundle.js.map