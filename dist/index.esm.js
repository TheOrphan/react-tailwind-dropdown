import { createPortal } from 'react-dom';
import { forwardRef, createElement, useState, useRef, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-2{left:.5rem}.top-2{top:.5rem}.z-50{z-index:50}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.inline-block{display:inline-block}.flex{display:flex}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.max-h-60{max-height:15rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-full{width:100%}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[300px\\]{min-width:300px}.flex-1{flex:1 1 0%}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.overflow-auto{overflow:auto}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity,1))}.border-transparent{border-color:transparent}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity,1))}.bg-blue-100\\/0{background-color:rgba(219,234,254,0)}.bg-blue-100\\/10{background-color:rgba(219,234,254,.1)}.bg-blue-100\\/100{background-color:#dbeafe}.bg-blue-100\\/15{background-color:rgba(219,234,254,.15)}.bg-blue-100\\/20{background-color:rgba(219,234,254,.2)}.bg-blue-100\\/25{background-color:rgba(219,234,254,.25)}.bg-blue-100\\/30{background-color:rgba(219,234,254,.3)}.bg-blue-100\\/35{background-color:rgba(219,234,254,.35)}.bg-blue-100\\/40{background-color:rgba(219,234,254,.4)}.bg-blue-100\\/45{background-color:rgba(219,234,254,.45)}.bg-blue-100\\/5{background-color:rgba(219,234,254,.05)}.bg-blue-100\\/50{background-color:rgba(219,234,254,.5)}.bg-blue-100\\/55{background-color:rgba(219,234,254,.55)}.bg-blue-100\\/60{background-color:rgba(219,234,254,.6)}.bg-blue-100\\/65{background-color:rgba(219,234,254,.65)}.bg-blue-100\\/70{background-color:rgba(219,234,254,.7)}.bg-blue-100\\/75{background-color:rgba(219,234,254,.75)}.bg-blue-100\\/80{background-color:rgba(219,234,254,.8)}.bg-blue-100\\/85{background-color:rgba(219,234,254,.85)}.bg-blue-100\\/90{background-color:rgba(219,234,254,.9)}.bg-blue-100\\/95{background-color:rgba(219,234,254,.95)}.bg-blue-200{--tw-bg-opacity:1;background-color:rgb(191 219 254/var(--tw-bg-opacity,1))}.bg-blue-200\\/0{background-color:rgba(191,219,254,0)}.bg-blue-200\\/10{background-color:rgba(191,219,254,.1)}.bg-blue-200\\/100{background-color:#bfdbfe}.bg-blue-200\\/15{background-color:rgba(191,219,254,.15)}.bg-blue-200\\/20{background-color:rgba(191,219,254,.2)}.bg-blue-200\\/25{background-color:rgba(191,219,254,.25)}.bg-blue-200\\/30{background-color:rgba(191,219,254,.3)}.bg-blue-200\\/35{background-color:rgba(191,219,254,.35)}.bg-blue-200\\/40{background-color:rgba(191,219,254,.4)}.bg-blue-200\\/45{background-color:rgba(191,219,254,.45)}.bg-blue-200\\/5{background-color:rgba(191,219,254,.05)}.bg-blue-200\\/50{background-color:rgba(191,219,254,.5)}.bg-blue-200\\/55{background-color:rgba(191,219,254,.55)}.bg-blue-200\\/60{background-color:rgba(191,219,254,.6)}.bg-blue-200\\/65{background-color:rgba(191,219,254,.65)}.bg-blue-200\\/70{background-color:rgba(191,219,254,.7)}.bg-blue-200\\/75{background-color:rgba(191,219,254,.75)}.bg-blue-200\\/80{background-color:rgba(191,219,254,.8)}.bg-blue-200\\/85{background-color:rgba(191,219,254,.85)}.bg-blue-200\\/90{background-color:rgba(191,219,254,.9)}.bg-blue-200\\/95{background-color:rgba(191,219,254,.95)}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255/var(--tw-bg-opacity,1))}.bg-blue-50\\/0{background-color:rgba(239,246,255,0)}.bg-blue-50\\/10{background-color:rgba(239,246,255,.1)}.bg-blue-50\\/100{background-color:#eff6ff}.bg-blue-50\\/15{background-color:rgba(239,246,255,.15)}.bg-blue-50\\/20{background-color:rgba(239,246,255,.2)}.bg-blue-50\\/25{background-color:rgba(239,246,255,.25)}.bg-blue-50\\/30{background-color:rgba(239,246,255,.3)}.bg-blue-50\\/35{background-color:rgba(239,246,255,.35)}.bg-blue-50\\/40{background-color:rgba(239,246,255,.4)}.bg-blue-50\\/45{background-color:rgba(239,246,255,.45)}.bg-blue-50\\/5{background-color:rgba(239,246,255,.05)}.bg-blue-50\\/50{background-color:rgba(239,246,255,.5)}.bg-blue-50\\/55{background-color:rgba(239,246,255,.55)}.bg-blue-50\\/60{background-color:rgba(239,246,255,.6)}.bg-blue-50\\/65{background-color:rgba(239,246,255,.65)}.bg-blue-50\\/70{background-color:rgba(239,246,255,.7)}.bg-blue-50\\/75{background-color:rgba(239,246,255,.75)}.bg-blue-50\\/80{background-color:rgba(239,246,255,.8)}.bg-blue-50\\/85{background-color:rgba(239,246,255,.85)}.bg-blue-50\\/90{background-color:rgba(239,246,255,.9)}.bg-blue-50\\/95{background-color:rgba(239,246,255,.95)}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.bg-blue-500\\/0{background-color:rgba(59,130,246,0)}.bg-blue-500\\/10{background-color:rgba(59,130,246,.1)}.bg-blue-500\\/100{background-color:#3b82f6}.bg-blue-500\\/15{background-color:rgba(59,130,246,.15)}.bg-blue-500\\/20{background-color:rgba(59,130,246,.2)}.bg-blue-500\\/25{background-color:rgba(59,130,246,.25)}.bg-blue-500\\/30{background-color:rgba(59,130,246,.3)}.bg-blue-500\\/35{background-color:rgba(59,130,246,.35)}.bg-blue-500\\/40{background-color:rgba(59,130,246,.4)}.bg-blue-500\\/45{background-color:rgba(59,130,246,.45)}.bg-blue-500\\/5{background-color:rgba(59,130,246,.05)}.bg-blue-500\\/50{background-color:rgba(59,130,246,.5)}.bg-blue-500\\/55{background-color:rgba(59,130,246,.55)}.bg-blue-500\\/60{background-color:rgba(59,130,246,.6)}.bg-blue-500\\/65{background-color:rgba(59,130,246,.65)}.bg-blue-500\\/70{background-color:rgba(59,130,246,.7)}.bg-blue-500\\/75{background-color:rgba(59,130,246,.75)}.bg-blue-500\\/80{background-color:rgba(59,130,246,.8)}.bg-blue-500\\/85{background-color:rgba(59,130,246,.85)}.bg-blue-500\\/90{background-color:rgba(59,130,246,.9)}.bg-blue-500\\/95{background-color:rgba(59,130,246,.95)}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.bg-blue-600\\/0{background-color:rgba(37,99,235,0)}.bg-blue-600\\/10{background-color:rgba(37,99,235,.1)}.bg-blue-600\\/100{background-color:#2563eb}.bg-blue-600\\/15{background-color:rgba(37,99,235,.15)}.bg-blue-600\\/20{background-color:rgba(37,99,235,.2)}.bg-blue-600\\/25{background-color:rgba(37,99,235,.25)}.bg-blue-600\\/30{background-color:rgba(37,99,235,.3)}.bg-blue-600\\/35{background-color:rgba(37,99,235,.35)}.bg-blue-600\\/40{background-color:rgba(37,99,235,.4)}.bg-blue-600\\/45{background-color:rgba(37,99,235,.45)}.bg-blue-600\\/5{background-color:rgba(37,99,235,.05)}.bg-blue-600\\/50{background-color:rgba(37,99,235,.5)}.bg-blue-600\\/55{background-color:rgba(37,99,235,.55)}.bg-blue-600\\/60{background-color:rgba(37,99,235,.6)}.bg-blue-600\\/65{background-color:rgba(37,99,235,.65)}.bg-blue-600\\/70{background-color:rgba(37,99,235,.7)}.bg-blue-600\\/75{background-color:rgba(37,99,235,.75)}.bg-blue-600\\/80{background-color:rgba(37,99,235,.8)}.bg-blue-600\\/85{background-color:rgba(37,99,235,.85)}.bg-blue-600\\/90{background-color:rgba(37,99,235,.9)}.bg-blue-600\\/95{background-color:rgba(37,99,235,.95)}.bg-blue-700{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity,1))}.bg-blue-700\\/0{background-color:rgba(29,78,216,0)}.bg-blue-700\\/10{background-color:rgba(29,78,216,.1)}.bg-blue-700\\/100{background-color:#1d4ed8}.bg-blue-700\\/15{background-color:rgba(29,78,216,.15)}.bg-blue-700\\/20{background-color:rgba(29,78,216,.2)}.bg-blue-700\\/25{background-color:rgba(29,78,216,.25)}.bg-blue-700\\/30{background-color:rgba(29,78,216,.3)}.bg-blue-700\\/35{background-color:rgba(29,78,216,.35)}.bg-blue-700\\/40{background-color:rgba(29,78,216,.4)}.bg-blue-700\\/45{background-color:rgba(29,78,216,.45)}.bg-blue-700\\/5{background-color:rgba(29,78,216,.05)}.bg-blue-700\\/50{background-color:rgba(29,78,216,.5)}.bg-blue-700\\/55{background-color:rgba(29,78,216,.55)}.bg-blue-700\\/60{background-color:rgba(29,78,216,.6)}.bg-blue-700\\/65{background-color:rgba(29,78,216,.65)}.bg-blue-700\\/70{background-color:rgba(29,78,216,.7)}.bg-blue-700\\/75{background-color:rgba(29,78,216,.75)}.bg-blue-700\\/80{background-color:rgba(29,78,216,.8)}.bg-blue-700\\/85{background-color:rgba(29,78,216,.85)}.bg-blue-700\\/90{background-color:rgba(29,78,216,.9)}.bg-blue-700\\/95{background-color:rgba(29,78,216,.95)}.bg-blue-800{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity,1))}.bg-blue-800\\/0{background-color:rgba(30,64,175,0)}.bg-blue-800\\/10{background-color:rgba(30,64,175,.1)}.bg-blue-800\\/100{background-color:#1e40af}.bg-blue-800\\/15{background-color:rgba(30,64,175,.15)}.bg-blue-800\\/20{background-color:rgba(30,64,175,.2)}.bg-blue-800\\/25{background-color:rgba(30,64,175,.25)}.bg-blue-800\\/30{background-color:rgba(30,64,175,.3)}.bg-blue-800\\/35{background-color:rgba(30,64,175,.35)}.bg-blue-800\\/40{background-color:rgba(30,64,175,.4)}.bg-blue-800\\/45{background-color:rgba(30,64,175,.45)}.bg-blue-800\\/5{background-color:rgba(30,64,175,.05)}.bg-blue-800\\/50{background-color:rgba(30,64,175,.5)}.bg-blue-800\\/55{background-color:rgba(30,64,175,.55)}.bg-blue-800\\/60{background-color:rgba(30,64,175,.6)}.bg-blue-800\\/65{background-color:rgba(30,64,175,.65)}.bg-blue-800\\/70{background-color:rgba(30,64,175,.7)}.bg-blue-800\\/75{background-color:rgba(30,64,175,.75)}.bg-blue-800\\/80{background-color:rgba(30,64,175,.8)}.bg-blue-800\\/85{background-color:rgba(30,64,175,.85)}.bg-blue-800\\/90{background-color:rgba(30,64,175,.9)}.bg-blue-800\\/95{background-color:rgba(30,64,175,.95)}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.bg-gray-100\\/0{background-color:rgba(243,244,246,0)}.bg-gray-100\\/10{background-color:rgba(243,244,246,.1)}.bg-gray-100\\/100{background-color:#f3f4f6}.bg-gray-100\\/15{background-color:rgba(243,244,246,.15)}.bg-gray-100\\/20{background-color:rgba(243,244,246,.2)}.bg-gray-100\\/25{background-color:rgba(243,244,246,.25)}.bg-gray-100\\/30{background-color:rgba(243,244,246,.3)}.bg-gray-100\\/35{background-color:rgba(243,244,246,.35)}.bg-gray-100\\/40{background-color:rgba(243,244,246,.4)}.bg-gray-100\\/45{background-color:rgba(243,244,246,.45)}.bg-gray-100\\/5{background-color:rgba(243,244,246,.05)}.bg-gray-100\\/50{background-color:rgba(243,244,246,.5)}.bg-gray-100\\/55{background-color:rgba(243,244,246,.55)}.bg-gray-100\\/60{background-color:rgba(243,244,246,.6)}.bg-gray-100\\/65{background-color:rgba(243,244,246,.65)}.bg-gray-100\\/70{background-color:rgba(243,244,246,.7)}.bg-gray-100\\/75{background-color:rgba(243,244,246,.75)}.bg-gray-100\\/80{background-color:rgba(243,244,246,.8)}.bg-gray-100\\/85{background-color:rgba(243,244,246,.85)}.bg-gray-100\\/90{background-color:rgba(243,244,246,.9)}.bg-gray-100\\/95{background-color:rgba(243,244,246,.95)}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity,1))}.bg-gray-200\\/0{background-color:rgba(229,231,235,0)}.bg-gray-200\\/10{background-color:rgba(229,231,235,.1)}.bg-gray-200\\/100{background-color:#e5e7eb}.bg-gray-200\\/15{background-color:rgba(229,231,235,.15)}.bg-gray-200\\/20{background-color:rgba(229,231,235,.2)}.bg-gray-200\\/25{background-color:rgba(229,231,235,.25)}.bg-gray-200\\/30{background-color:rgba(229,231,235,.3)}.bg-gray-200\\/35{background-color:rgba(229,231,235,.35)}.bg-gray-200\\/40{background-color:rgba(229,231,235,.4)}.bg-gray-200\\/45{background-color:rgba(229,231,235,.45)}.bg-gray-200\\/5{background-color:rgba(229,231,235,.05)}.bg-gray-200\\/50{background-color:rgba(229,231,235,.5)}.bg-gray-200\\/55{background-color:rgba(229,231,235,.55)}.bg-gray-200\\/60{background-color:rgba(229,231,235,.6)}.bg-gray-200\\/65{background-color:rgba(229,231,235,.65)}.bg-gray-200\\/70{background-color:rgba(229,231,235,.7)}.bg-gray-200\\/75{background-color:rgba(229,231,235,.75)}.bg-gray-200\\/80{background-color:rgba(229,231,235,.8)}.bg-gray-200\\/85{background-color:rgba(229,231,235,.85)}.bg-gray-200\\/90{background-color:rgba(229,231,235,.9)}.bg-gray-200\\/95{background-color:rgba(229,231,235,.95)}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity,1))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.bg-gray-50\\/0{background-color:rgba(249,250,251,0)}.bg-gray-50\\/10{background-color:rgba(249,250,251,.1)}.bg-gray-50\\/100{background-color:#f9fafb}.bg-gray-50\\/15{background-color:rgba(249,250,251,.15)}.bg-gray-50\\/20{background-color:rgba(249,250,251,.2)}.bg-gray-50\\/25{background-color:rgba(249,250,251,.25)}.bg-gray-50\\/30{background-color:rgba(249,250,251,.3)}.bg-gray-50\\/35{background-color:rgba(249,250,251,.35)}.bg-gray-50\\/40{background-color:rgba(249,250,251,.4)}.bg-gray-50\\/45{background-color:rgba(249,250,251,.45)}.bg-gray-50\\/5{background-color:rgba(249,250,251,.05)}.bg-gray-50\\/50{background-color:rgba(249,250,251,.5)}.bg-gray-50\\/55{background-color:rgba(249,250,251,.55)}.bg-gray-50\\/60{background-color:rgba(249,250,251,.6)}.bg-gray-50\\/65{background-color:rgba(249,250,251,.65)}.bg-gray-50\\/70{background-color:rgba(249,250,251,.7)}.bg-gray-50\\/75{background-color:rgba(249,250,251,.75)}.bg-gray-50\\/80{background-color:rgba(249,250,251,.8)}.bg-gray-50\\/85{background-color:rgba(249,250,251,.85)}.bg-gray-50\\/90{background-color:rgba(249,250,251,.9)}.bg-gray-50\\/95{background-color:rgba(249,250,251,.95)}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity,1))}.bg-gray-500\\/0{background-color:hsla(220,9%,46%,0)}.bg-gray-500\\/10{background-color:hsla(220,9%,46%,.1)}.bg-gray-500\\/100{background-color:#6b7280}.bg-gray-500\\/15{background-color:hsla(220,9%,46%,.15)}.bg-gray-500\\/20{background-color:hsla(220,9%,46%,.2)}.bg-gray-500\\/25{background-color:hsla(220,9%,46%,.25)}.bg-gray-500\\/30{background-color:hsla(220,9%,46%,.3)}.bg-gray-500\\/35{background-color:hsla(220,9%,46%,.35)}.bg-gray-500\\/40{background-color:hsla(220,9%,46%,.4)}.bg-gray-500\\/45{background-color:hsla(220,9%,46%,.45)}.bg-gray-500\\/5{background-color:hsla(220,9%,46%,.05)}.bg-gray-500\\/50{background-color:hsla(220,9%,46%,.5)}.bg-gray-500\\/55{background-color:hsla(220,9%,46%,.55)}.bg-gray-500\\/60{background-color:hsla(220,9%,46%,.6)}.bg-gray-500\\/65{background-color:hsla(220,9%,46%,.65)}.bg-gray-500\\/70{background-color:hsla(220,9%,46%,.7)}.bg-gray-500\\/75{background-color:hsla(220,9%,46%,.75)}.bg-gray-500\\/80{background-color:hsla(220,9%,46%,.8)}.bg-gray-500\\/85{background-color:hsla(220,9%,46%,.85)}.bg-gray-500\\/90{background-color:hsla(220,9%,46%,.9)}.bg-gray-500\\/95{background-color:hsla(220,9%,46%,.95)}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))}.bg-gray-600\\/0{background-color:rgba(75,85,99,0)}.bg-gray-600\\/10{background-color:rgba(75,85,99,.1)}.bg-gray-600\\/100{background-color:#4b5563}.bg-gray-600\\/15{background-color:rgba(75,85,99,.15)}.bg-gray-600\\/20{background-color:rgba(75,85,99,.2)}.bg-gray-600\\/25{background-color:rgba(75,85,99,.25)}.bg-gray-600\\/30{background-color:rgba(75,85,99,.3)}.bg-gray-600\\/35{background-color:rgba(75,85,99,.35)}.bg-gray-600\\/40{background-color:rgba(75,85,99,.4)}.bg-gray-600\\/45{background-color:rgba(75,85,99,.45)}.bg-gray-600\\/5{background-color:rgba(75,85,99,.05)}.bg-gray-600\\/50{background-color:rgba(75,85,99,.5)}.bg-gray-600\\/55{background-color:rgba(75,85,99,.55)}.bg-gray-600\\/60{background-color:rgba(75,85,99,.6)}.bg-gray-600\\/65{background-color:rgba(75,85,99,.65)}.bg-gray-600\\/70{background-color:rgba(75,85,99,.7)}.bg-gray-600\\/75{background-color:rgba(75,85,99,.75)}.bg-gray-600\\/80{background-color:rgba(75,85,99,.8)}.bg-gray-600\\/85{background-color:rgba(75,85,99,.85)}.bg-gray-600\\/90{background-color:rgba(75,85,99,.9)}.bg-gray-600\\/95{background-color:rgba(75,85,99,.95)}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.bg-gray-700\\/0{background-color:rgba(55,65,81,0)}.bg-gray-700\\/10{background-color:rgba(55,65,81,.1)}.bg-gray-700\\/100{background-color:#374151}.bg-gray-700\\/15{background-color:rgba(55,65,81,.15)}.bg-gray-700\\/20{background-color:rgba(55,65,81,.2)}.bg-gray-700\\/25{background-color:rgba(55,65,81,.25)}.bg-gray-700\\/30{background-color:rgba(55,65,81,.3)}.bg-gray-700\\/35{background-color:rgba(55,65,81,.35)}.bg-gray-700\\/40{background-color:rgba(55,65,81,.4)}.bg-gray-700\\/45{background-color:rgba(55,65,81,.45)}.bg-gray-700\\/5{background-color:rgba(55,65,81,.05)}.bg-gray-700\\/50{background-color:rgba(55,65,81,.5)}.bg-gray-700\\/55{background-color:rgba(55,65,81,.55)}.bg-gray-700\\/60{background-color:rgba(55,65,81,.6)}.bg-gray-700\\/65{background-color:rgba(55,65,81,.65)}.bg-gray-700\\/70{background-color:rgba(55,65,81,.7)}.bg-gray-700\\/75{background-color:rgba(55,65,81,.75)}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.bg-gray-700\\/85{background-color:rgba(55,65,81,.85)}.bg-gray-700\\/90{background-color:rgba(55,65,81,.9)}.bg-gray-700\\/95{background-color:rgba(55,65,81,.95)}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.bg-gray-800\\/0{background-color:rgba(31,41,55,0)}.bg-gray-800\\/10{background-color:rgba(31,41,55,.1)}.bg-gray-800\\/100{background-color:#1f2937}.bg-gray-800\\/15{background-color:rgba(31,41,55,.15)}.bg-gray-800\\/20{background-color:rgba(31,41,55,.2)}.bg-gray-800\\/25{background-color:rgba(31,41,55,.25)}.bg-gray-800\\/30{background-color:rgba(31,41,55,.3)}.bg-gray-800\\/35{background-color:rgba(31,41,55,.35)}.bg-gray-800\\/40{background-color:rgba(31,41,55,.4)}.bg-gray-800\\/45{background-color:rgba(31,41,55,.45)}.bg-gray-800\\/5{background-color:rgba(31,41,55,.05)}.bg-gray-800\\/50{background-color:rgba(31,41,55,.5)}.bg-gray-800\\/55{background-color:rgba(31,41,55,.55)}.bg-gray-800\\/60{background-color:rgba(31,41,55,.6)}.bg-gray-800\\/65{background-color:rgba(31,41,55,.65)}.bg-gray-800\\/70{background-color:rgba(31,41,55,.7)}.bg-gray-800\\/75{background-color:rgba(31,41,55,.75)}.bg-gray-800\\/80{background-color:rgba(31,41,55,.8)}.bg-gray-800\\/85{background-color:rgba(31,41,55,.85)}.bg-gray-800\\/90{background-color:rgba(31,41,55,.9)}.bg-gray-800\\/95{background-color:rgba(31,41,55,.95)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-2{padding:.5rem}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-0\\.5{padding-bottom:.125rem;padding-top:.125rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-8{padding-left:2rem}.pr-4{padding-right:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-blue-400{--tw-text-opacity:1;color:rgb(96 165 250/var(--tw-text-opacity,1))}.text-blue-400\\/0{color:rgba(96,165,250,0)}.text-blue-400\\/10{color:rgba(96,165,250,.1)}.text-blue-400\\/100{color:#60a5fa}.text-blue-400\\/15{color:rgba(96,165,250,.15)}.text-blue-400\\/20{color:rgba(96,165,250,.2)}.text-blue-400\\/25{color:rgba(96,165,250,.25)}.text-blue-400\\/30{color:rgba(96,165,250,.3)}.text-blue-400\\/35{color:rgba(96,165,250,.35)}.text-blue-400\\/40{color:rgba(96,165,250,.4)}.text-blue-400\\/45{color:rgba(96,165,250,.45)}.text-blue-400\\/5{color:rgba(96,165,250,.05)}.text-blue-400\\/50{color:rgba(96,165,250,.5)}.text-blue-400\\/55{color:rgba(96,165,250,.55)}.text-blue-400\\/60{color:rgba(96,165,250,.6)}.text-blue-400\\/65{color:rgba(96,165,250,.65)}.text-blue-400\\/70{color:rgba(96,165,250,.7)}.text-blue-400\\/75{color:rgba(96,165,250,.75)}.text-blue-400\\/80{color:rgba(96,165,250,.8)}.text-blue-400\\/85{color:rgba(96,165,250,.85)}.text-blue-400\\/90{color:rgba(96,165,250,.9)}.text-blue-400\\/95{color:rgba(96,165,250,.95)}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity,1))}.text-blue-500\\/0{color:rgba(59,130,246,0)}.text-blue-500\\/10{color:rgba(59,130,246,.1)}.text-blue-500\\/100{color:#3b82f6}.text-blue-500\\/15{color:rgba(59,130,246,.15)}.text-blue-500\\/20{color:rgba(59,130,246,.2)}.text-blue-500\\/25{color:rgba(59,130,246,.25)}.text-blue-500\\/30{color:rgba(59,130,246,.3)}.text-blue-500\\/35{color:rgba(59,130,246,.35)}.text-blue-500\\/40{color:rgba(59,130,246,.4)}.text-blue-500\\/45{color:rgba(59,130,246,.45)}.text-blue-500\\/5{color:rgba(59,130,246,.05)}.text-blue-500\\/50{color:rgba(59,130,246,.5)}.text-blue-500\\/55{color:rgba(59,130,246,.55)}.text-blue-500\\/60{color:rgba(59,130,246,.6)}.text-blue-500\\/65{color:rgba(59,130,246,.65)}.text-blue-500\\/70{color:rgba(59,130,246,.7)}.text-blue-500\\/75{color:rgba(59,130,246,.75)}.text-blue-500\\/80{color:rgba(59,130,246,.8)}.text-blue-500\\/85{color:rgba(59,130,246,.85)}.text-blue-500\\/90{color:rgba(59,130,246,.9)}.text-blue-500\\/95{color:rgba(59,130,246,.95)}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.text-blue-600\\/0{color:rgba(37,99,235,0)}.text-blue-600\\/10{color:rgba(37,99,235,.1)}.text-blue-600\\/100{color:#2563eb}.text-blue-600\\/15{color:rgba(37,99,235,.15)}.text-blue-600\\/20{color:rgba(37,99,235,.2)}.text-blue-600\\/25{color:rgba(37,99,235,.25)}.text-blue-600\\/30{color:rgba(37,99,235,.3)}.text-blue-600\\/35{color:rgba(37,99,235,.35)}.text-blue-600\\/40{color:rgba(37,99,235,.4)}.text-blue-600\\/45{color:rgba(37,99,235,.45)}.text-blue-600\\/5{color:rgba(37,99,235,.05)}.text-blue-600\\/50{color:rgba(37,99,235,.5)}.text-blue-600\\/55{color:rgba(37,99,235,.55)}.text-blue-600\\/60{color:rgba(37,99,235,.6)}.text-blue-600\\/65{color:rgba(37,99,235,.65)}.text-blue-600\\/70{color:rgba(37,99,235,.7)}.text-blue-600\\/75{color:rgba(37,99,235,.75)}.text-blue-600\\/80{color:rgba(37,99,235,.8)}.text-blue-600\\/85{color:rgba(37,99,235,.85)}.text-blue-600\\/90{color:rgba(37,99,235,.9)}.text-blue-600\\/95{color:rgba(37,99,235,.95)}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity,1))}.text-blue-700\\/0{color:rgba(29,78,216,0)}.text-blue-700\\/10{color:rgba(29,78,216,.1)}.text-blue-700\\/100{color:#1d4ed8}.text-blue-700\\/15{color:rgba(29,78,216,.15)}.text-blue-700\\/20{color:rgba(29,78,216,.2)}.text-blue-700\\/25{color:rgba(29,78,216,.25)}.text-blue-700\\/30{color:rgba(29,78,216,.3)}.text-blue-700\\/35{color:rgba(29,78,216,.35)}.text-blue-700\\/40{color:rgba(29,78,216,.4)}.text-blue-700\\/45{color:rgba(29,78,216,.45)}.text-blue-700\\/5{color:rgba(29,78,216,.05)}.text-blue-700\\/50{color:rgba(29,78,216,.5)}.text-blue-700\\/55{color:rgba(29,78,216,.55)}.text-blue-700\\/60{color:rgba(29,78,216,.6)}.text-blue-700\\/65{color:rgba(29,78,216,.65)}.text-blue-700\\/70{color:rgba(29,78,216,.7)}.text-blue-700\\/75{color:rgba(29,78,216,.75)}.text-blue-700\\/80{color:rgba(29,78,216,.8)}.text-blue-700\\/85{color:rgba(29,78,216,.85)}.text-blue-700\\/90{color:rgba(29,78,216,.9)}.text-blue-700\\/95{color:rgba(29,78,216,.95)}.text-blue-800{--tw-text-opacity:1;color:rgb(30 64 175/var(--tw-text-opacity,1))}.text-blue-800\\/0{color:rgba(30,64,175,0)}.text-blue-800\\/10{color:rgba(30,64,175,.1)}.text-blue-800\\/100{color:#1e40af}.text-blue-800\\/15{color:rgba(30,64,175,.15)}.text-blue-800\\/20{color:rgba(30,64,175,.2)}.text-blue-800\\/25{color:rgba(30,64,175,.25)}.text-blue-800\\/30{color:rgba(30,64,175,.3)}.text-blue-800\\/35{color:rgba(30,64,175,.35)}.text-blue-800\\/40{color:rgba(30,64,175,.4)}.text-blue-800\\/45{color:rgba(30,64,175,.45)}.text-blue-800\\/5{color:rgba(30,64,175,.05)}.text-blue-800\\/50{color:rgba(30,64,175,.5)}.text-blue-800\\/55{color:rgba(30,64,175,.55)}.text-blue-800\\/60{color:rgba(30,64,175,.6)}.text-blue-800\\/65{color:rgba(30,64,175,.65)}.text-blue-800\\/70{color:rgba(30,64,175,.7)}.text-blue-800\\/75{color:rgba(30,64,175,.75)}.text-blue-800\\/80{color:rgba(30,64,175,.8)}.text-blue-800\\/85{color:rgba(30,64,175,.85)}.text-blue-800\\/90{color:rgba(30,64,175,.9)}.text-blue-800\\/95{color:rgba(30,64,175,.95)}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.text-gray-400\\/0{color:rgba(156,163,175,0)}.text-gray-400\\/10{color:rgba(156,163,175,.1)}.text-gray-400\\/100{color:#9ca3af}.text-gray-400\\/15{color:rgba(156,163,175,.15)}.text-gray-400\\/20{color:rgba(156,163,175,.2)}.text-gray-400\\/25{color:rgba(156,163,175,.25)}.text-gray-400\\/30{color:rgba(156,163,175,.3)}.text-gray-400\\/35{color:rgba(156,163,175,.35)}.text-gray-400\\/40{color:rgba(156,163,175,.4)}.text-gray-400\\/45{color:rgba(156,163,175,.45)}.text-gray-400\\/5{color:rgba(156,163,175,.05)}.text-gray-400\\/50{color:rgba(156,163,175,.5)}.text-gray-400\\/55{color:rgba(156,163,175,.55)}.text-gray-400\\/60{color:rgba(156,163,175,.6)}.text-gray-400\\/65{color:rgba(156,163,175,.65)}.text-gray-400\\/70{color:rgba(156,163,175,.7)}.text-gray-400\\/75{color:rgba(156,163,175,.75)}.text-gray-400\\/80{color:rgba(156,163,175,.8)}.text-gray-400\\/85{color:rgba(156,163,175,.85)}.text-gray-400\\/90{color:rgba(156,163,175,.9)}.text-gray-400\\/95{color:rgba(156,163,175,.95)}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-500\\/0{color:hsla(220,9%,46%,0)}.text-gray-500\\/10{color:hsla(220,9%,46%,.1)}.text-gray-500\\/100{color:#6b7280}.text-gray-500\\/15{color:hsla(220,9%,46%,.15)}.text-gray-500\\/20{color:hsla(220,9%,46%,.2)}.text-gray-500\\/25{color:hsla(220,9%,46%,.25)}.text-gray-500\\/30{color:hsla(220,9%,46%,.3)}.text-gray-500\\/35{color:hsla(220,9%,46%,.35)}.text-gray-500\\/40{color:hsla(220,9%,46%,.4)}.text-gray-500\\/45{color:hsla(220,9%,46%,.45)}.text-gray-500\\/5{color:hsla(220,9%,46%,.05)}.text-gray-500\\/50{color:hsla(220,9%,46%,.5)}.text-gray-500\\/55{color:hsla(220,9%,46%,.55)}.text-gray-500\\/60{color:hsla(220,9%,46%,.6)}.text-gray-500\\/65{color:hsla(220,9%,46%,.65)}.text-gray-500\\/70{color:hsla(220,9%,46%,.7)}.text-gray-500\\/75{color:hsla(220,9%,46%,.75)}.text-gray-500\\/80{color:hsla(220,9%,46%,.8)}.text-gray-500\\/85{color:hsla(220,9%,46%,.85)}.text-gray-500\\/90{color:hsla(220,9%,46%,.9)}.text-gray-500\\/95{color:hsla(220,9%,46%,.95)}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-gray-600\\/0{color:rgba(75,85,99,0)}.text-gray-600\\/10{color:rgba(75,85,99,.1)}.text-gray-600\\/100{color:#4b5563}.text-gray-600\\/15{color:rgba(75,85,99,.15)}.text-gray-600\\/20{color:rgba(75,85,99,.2)}.text-gray-600\\/25{color:rgba(75,85,99,.25)}.text-gray-600\\/30{color:rgba(75,85,99,.3)}.text-gray-600\\/35{color:rgba(75,85,99,.35)}.text-gray-600\\/40{color:rgba(75,85,99,.4)}.text-gray-600\\/45{color:rgba(75,85,99,.45)}.text-gray-600\\/5{color:rgba(75,85,99,.05)}.text-gray-600\\/50{color:rgba(75,85,99,.5)}.text-gray-600\\/55{color:rgba(75,85,99,.55)}.text-gray-600\\/60{color:rgba(75,85,99,.6)}.text-gray-600\\/65{color:rgba(75,85,99,.65)}.text-gray-600\\/70{color:rgba(75,85,99,.7)}.text-gray-600\\/75{color:rgba(75,85,99,.75)}.text-gray-600\\/80{color:rgba(75,85,99,.8)}.text-gray-600\\/85{color:rgba(75,85,99,.85)}.text-gray-600\\/90{color:rgba(75,85,99,.9)}.text-gray-600\\/95{color:rgba(75,85,99,.95)}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-700\\/0{color:rgba(55,65,81,0)}.text-gray-700\\/10{color:rgba(55,65,81,.1)}.text-gray-700\\/100{color:#374151}.text-gray-700\\/15{color:rgba(55,65,81,.15)}.text-gray-700\\/20{color:rgba(55,65,81,.2)}.text-gray-700\\/25{color:rgba(55,65,81,.25)}.text-gray-700\\/30{color:rgba(55,65,81,.3)}.text-gray-700\\/35{color:rgba(55,65,81,.35)}.text-gray-700\\/40{color:rgba(55,65,81,.4)}.text-gray-700\\/45{color:rgba(55,65,81,.45)}.text-gray-700\\/5{color:rgba(55,65,81,.05)}.text-gray-700\\/50{color:rgba(55,65,81,.5)}.text-gray-700\\/55{color:rgba(55,65,81,.55)}.text-gray-700\\/60{color:rgba(55,65,81,.6)}.text-gray-700\\/65{color:rgba(55,65,81,.65)}.text-gray-700\\/70{color:rgba(55,65,81,.7)}.text-gray-700\\/75{color:rgba(55,65,81,.75)}.text-gray-700\\/80{color:rgba(55,65,81,.8)}.text-gray-700\\/85{color:rgba(55,65,81,.85)}.text-gray-700\\/90{color:rgba(55,65,81,.9)}.text-gray-700\\/95{color:rgba(55,65,81,.95)}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity,1))}.text-gray-800\\/0{color:rgba(31,41,55,0)}.text-gray-800\\/10{color:rgba(31,41,55,.1)}.text-gray-800\\/100{color:#1f2937}.text-gray-800\\/15{color:rgba(31,41,55,.15)}.text-gray-800\\/20{color:rgba(31,41,55,.2)}.text-gray-800\\/25{color:rgba(31,41,55,.25)}.text-gray-800\\/30{color:rgba(31,41,55,.3)}.text-gray-800\\/35{color:rgba(31,41,55,.35)}.text-gray-800\\/40{color:rgba(31,41,55,.4)}.text-gray-800\\/45{color:rgba(31,41,55,.45)}.text-gray-800\\/5{color:rgba(31,41,55,.05)}.text-gray-800\\/50{color:rgba(31,41,55,.5)}.text-gray-800\\/55{color:rgba(31,41,55,.55)}.text-gray-800\\/60{color:rgba(31,41,55,.6)}.text-gray-800\\/65{color:rgba(31,41,55,.65)}.text-gray-800\\/70{color:rgba(31,41,55,.7)}.text-gray-800\\/75{color:rgba(31,41,55,.75)}.text-gray-800\\/80{color:rgba(31,41,55,.8)}.text-gray-800\\/85{color:rgba(31,41,55,.85)}.text-gray-800\\/90{color:rgba(31,41,55,.9)}.text-gray-800\\/95{color:rgba(31,41,55,.95)}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.opacity-50{opacity:.5}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-blue-500{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:border-gray-300:hover{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity,1))}";
styleInject(css_248z,{"insertAt":"top"});

/**
 * lucide-react v0.0.1 - ISC
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * lucide-react v0.0.1 - ISC
 */


const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref) => createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: `lucide lucide-${toKebabCase(iconName)}`,
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]) || []
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};
var createLucideIcon$1 = createLucideIcon;

/**
 * lucide-react v0.0.1 - ISC
 */


const Search = createLucideIcon$1("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const X = createLucideIcon$1("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

const Dropdown = ({
  options = [],
  value,
  onChange,
  id,
  label = "Label",
  multiple = false,
  withSearch = false,
  withOutline = true,
  withPortal = false,
  placeholder = "Select...",
  className = "",
  zIndex = 1050,
  error,
  disabled = false,
  required = false,
  renderOption,
  renderSelectedOption
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValues, setSelectedValues] = useState(multiple ? [] : null);
  const dropdownRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const inputRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0
  });
  useEffect(() => {
    setSelectedValues(value);
  }, [value]);

  // Update dropdown position when portal is used
  const updateDropdownPosition = () => {
    if (isOpen && withPortal && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  };
  useEffect(() => {
    updateDropdownPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, withPortal]);

  // Add window resize listener to update portal position
  useEffect(() => {
    if (withPortal) {
      window.addEventListener("resize", updateDropdownPosition);
      window.addEventListener("scroll", updateDropdownPosition);
      return () => {
        window.removeEventListener("resize", updateDropdownPosition);
        window.removeEventListener("scroll", updateDropdownPosition);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withPortal]);
  const currentSelectedValues = multiple ? Array.isArray(selectedValues) ? selectedValues : [] : selectedValues ? [selectedValues] : [];
  const filteredOptions = options.filter(option => {
    const label = option.label.toLowerCase();
    const query = searchQuery.toLowerCase();
    return label.includes(query);
  }).map(option => {
    if (!searchQuery) return option;
    const parts = option.label.split(new RegExp(`(${searchQuery})`, "gi"));
    const highlighted = parts.map((part, i) => part.toLowerCase() === searchQuery.toLowerCase() ? /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "bg-blue-200"
    }, part) : part);
    return {
      ...option,
      label: /*#__PURE__*/React.createElement("span", null, highlighted)
    };
  });
  const selectedOptions = options.filter(opt => currentSelectedValues.includes(opt.value));

  // Modified click outside handler to work with portal
  useEffect(() => {
    const handleClickOutside = event => {
      const isClickInDropdown = dropdownRef.current?.contains(event.target);
      const isClickInPortal = dropdownContentRef.current?.contains(event.target);
      if (!isClickInDropdown && !isClickInPortal) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSelect = optionValue => {
    const newValue = multiple ? currentSelectedValues.includes(optionValue) ? currentSelectedValues.filter(v => v !== optionValue) : [...currentSelectedValues, optionValue] : optionValue;
    setSelectedValues(newValue);
    onChange?.(newValue);
    if (!multiple) setIsOpen(false);
    setSearchQuery("");
  };
  const handleClear = (e, valueToRemove) => {
    e.stopPropagation();
    const newValue = multiple ? valueToRemove ? currentSelectedValues.filter(v => v !== valueToRemove) : [] : null;
    setSelectedValues(newValue);
    onChange?.(newValue);
  };
  const renderDefaultOption = (option, isSelected) => /*#__PURE__*/React.createElement("div", {
    key: option.value,
    className: `
        px-3 py-1.5 text-sm cursor-pointer flex items-center
        ${isSelected ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:bg-gray-50"}
      `,
    onClick: () => handleSelect(option.value)
  }, option.label);
  const renderDefaultSelectedOption = option => /*#__PURE__*/React.createElement("div", {
    key: option.value,
    className: "bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm"
  }, option.label, /*#__PURE__*/React.createElement(X, {
    className: "inline-block ml-1 h-3 w-3 hover:text-blue-600",
    onClick: e => handleClear(e, option.value)
  }));
  const dropdownContent = /*#__PURE__*/React.createElement("div", {
    ref: dropdownContentRef,
    className: "absolute z-50 bg-white rounded-lg shadow-lg border border-gray-200",
    style: withPortal ? {
      position: "fixed",
      top: `${dropdownPosition.top}px`,
      left: `${dropdownPosition.left}px`,
      width: `${dropdownPosition.width}px`,
      zIndex: zIndex || 1050
    } : undefined
  }, withSearch && /*#__PURE__*/React.createElement("div", {
    className: "p-2 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-2 top-2 h-4 w-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    className: `
                w-full pl-8 pr-4 py-1.5 text-sm rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${withOutline ? "border" : "bg-gray-100"}
              `,
    placeholder: "Search...",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "max-h-60 overflow-auto py-1"
  }, filteredOptions.map(option => renderOption ? renderOption(option, currentSelectedValues.includes(option.value), () => handleSelect(option.value)) : renderDefaultOption(option, currentSelectedValues.includes(option.value))), filteredOptions.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-2 text-sm text-gray-500"
  }, "No options found")));
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "text-md font-medium text-gray-700 min-w-[100px]"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 ml-1"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    ref: dropdownRef,
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: `
              px-3 py-2 bg-white border border-gray-200 rounded-lg
              flex items-center justify-between 
              ${withOutline ? "bg-white border border-gray-200" : "bg-gray-100"}
              ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-gray-300 cursor-pointer"}
              ${error ? "border-red-500" : ""}
              ${isOpen ? "ring-2 ring-blue-500 border-transparent" : ""}
              ${className}
            `,
    onClick: () => !disabled && setIsOpen(!isOpen)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, selectedOptions.length > 0 ? selectedOptions.map(option => renderSelectedOption ? renderSelectedOption(option, () => handleClear(null, option.value)) : renderDefaultSelectedOption(option)) : /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, placeholder)), /*#__PURE__*/React.createElement("svg", {
    className: `h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  }))), isOpen && (withPortal ? /*#__PURE__*/createPortal(dropdownContent, document.body) : dropdownContent)), error && /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-red-500"
  }, error)));
};

export { Dropdown };
//# sourceMappingURL=index.esm.js.map
