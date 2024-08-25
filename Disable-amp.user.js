// ==UserScript==
// @name Disable AMP 
// @name:ar تعطيل AMP 
// @name:be Адключыць AMP 
// @name:bg Деактивирайте AMP 
// @name:bn-IN AMP নিষ্ক্রিয় করুন 
// @name:cs Zakázat AMP 
// @name:da Deaktiver AMP 
// @name:de AMP deaktivieren 
// @name:el Απενεργοποίηση AMP 
// @name:es Deshabilitar AMP 
// @name:et Keela AMP 
// @name:fa غيرفعالسازي شتاب دهنده صفحات موبایل 
// @name:fi Poista AMP käytöstä 
// @name:fr Désactiver AMP 
// @name:he AMP השבת 
// @name:hr Onemogući AMP 
// @name:hu AMP letiltása 
// @name:id Nonaktifkan AMP 
// @name:it Disattiva AMP 
// @name:ja AMPを無効化 
// @name:ko AMP 비활성화 
// @name:lt Išjungti AMP 
// @name:lv Atspējot AMP 
// @name:ms Nyahdayakan AMP 
// @name:ne-NP AMP लाई असक्षम पार्नुहोस् 
// @name:nl AMP uitschakelen 
// @name:no Skru av AMP 
// @name:pl Wyłącz AMP 
// @name:pt-PT Desativar AMP 
// @name:pt Desativar AMP 
// @name:ro Dezactivare AMP 
// @name:ru Отключить AMP 
// @name:sk Vypnúť AMP 
// @name:sl Onemogoči AMP 
// @name:sr Isključi sve 
// @name:sv Stäng av AMP 
// @name:tr AMP'yi devre dışı bırak 
// @name:uk Вимкнути AMP 
// @name:vi Vô hiệu hóa AMP 
// @name:zh-HK 停用 AMP 
// @name:zh-TW 禁用加速的行動頁面（AMP） 
// @name:zh 禁用 AMP 
// @namespace    adguard
// @version      1.0.47
// @description This is a very simple userscript that disables AMP on the Google search results page. 
// @description:ar هذا سكربت بسيط جدا، يعمل على تعطل AMP في صفحات بحث Google. 
// @description:be Гэта - вельмі просты скрыпт, які прыбірае AMP з вынікаў пошуку Google. 
// @description:bg Това е много прост потребителски скрипт, който деактивира AMP на страницата с резултати от търсенето с Google. 
// @description:bn-IN এটি একটি খুব সাধারণ ইউজারস্ক্রিপ্ট যা গুগল অনুসন্ধান ফলাফল পৃষ্ঠায় AMP নিষ্ক্রিয় করে। 
// @description:cs Jedná se o velmi jednoduchý uživatelský skript, který zakáže AMP na stránce s výsledky vyhledávání Google. 
// @description:da Dette er et meget simpelt userscript, der deaktiverer AMP på Googles søgeresultatside. 
// @description:de Dies ist ein sehr einfaches Userscript, das AMP auf der Seite der Google-Suchergebnisse deaktiviert. 
// @description:el Αυτό είναι ένα πολύ απλό userscript που απενεργοποιεί το AMP στη σελίδα αποτελεσμάτων αναζήτησης Google. 
// @description:es Este es un userscript muy simple que deshabilita AMP en la página de resultados de búsqueda de Google. 
// @description:et Tegemist on lihtsa kasutajaskriptiga, mis keelab Google otsingutulemustes AMP-i. 
// @description:fa این یک یوزراسکریپت بسیار ساده است که شتاب دهنده صفحات موبایل را در نتایج صفحه جستجو گوگل غیرفعال می کند. 
// @description:fi Tämä on hyvin yksinkertainen käyttäjäskripti, jolla AMP kytketään pois käytöstä Googlen hakutulossivulla. 
// @description:fr C'est un script utilisateur très simple pour désactiver AMP sur les pages de résultats de Google. 
// @description:he זהו סקריפט משתמש פשוט מאוד שמשבית את AMP בדף תוצאות החיפוש של גוגל 
// @description:hr Ovo je jednostavan userscript koji onemogućuje AMP u Google rezultatima pretraživanja. 
// @description:hu Ez egy nagyon egyszerű szkript, amely letiltja az AMP szolgáltatást a Google keresési eredményoldalán. 
// @description:id Ini adalah userscript yang sangat mudah yang dapat menonaktifkan AMP pada halaman hasil pencarian Google. 
// @description:it Questo è uno script utente molto semplice che rimuove AMP dai risultati nelle pagine di ricerca di Google. 
// @description:ja Google検索結果ページでAMPを無効にするシンプルなユーザースクリプトです。 
// @description:ko 이것은 Google 검색 결과 페이지에서 AMP를 비활성화하는 매우 간단한 사용자 스크립트입니다. 
// @description:lt Tai labai paprastas naudotojo skriptas, atjungiantis AMP Google paieškos rezultatų puslapyje. 
// @description:lv Tas ir ļoti vienkāršs lietotāja skripts, kas atspējo AMP Google meklēšanas rezultātu lapā. 
// @description:ms Ini adalah skrip pengguna sangat ringkas yang menyahdayakan AMP pada laman hasil carian Google. 
// @description:ne-NP यो एक धेरै साधारण उपयोगकर्ता स्क्रिप्ट हो जसले गुगल खोज परिणाम पृष्ठमा AMP असक्षम गर्दछ। 
// @description:nl Dit is een eenvoudig userscript dat AMP uitschakelt op de Google zoek resultaatspagina. 
// @description:no Dette er et veldig enkelt brukerskript som skrur av AMP på Google-søkeresultatssider. 
// @description:pl Jest to bardzo prosty skrypt użytkownika, który wyłącza AMP na stronie wyników wyszukiwania Google. 
// @description:pt-PT Este é um script muito simples que desativa as AMP na página de resultados de pesquisa do Google. 
// @description:pt Este é um script muito simples que desativa o AMP na página de resultados de pesquisa do Google. 
// @description:ro Dezactivați AMP în pagina de rezultate căutare Google cu acest foarte simplu script utilizator. 
// @description:ru Это очень простой скрипт, который убирает AMP из результатов поиска Google. 
// @description:sk Toto je veľmi jednoduchý používateľský skript, ktorý na stránke s výsledkami vyhľadávania Google zakáže AMP. 
// @description:sl To je zelo preprost uporabniški skript, ki onemogoči AMP na Googlovi strani z rezultati iskanja. 
// @description:sr Ovo je veoma jednostavan userscript koji isključuje AMP na stranici sa rezultatima Google pretrage. 
// @description:sv Det här är ett väldigt enkelt användarskript som förhindrar AMP i Googles sökresultat. 
// @description:tr Bu, Google arama sonuçları sayfasında AMP’yi devre dışı bırakan çok basit bir kullanıcı betiğidir. 
// @description:uk Це дуже простий користувацький скрипт, який вимикає AMP на сторінці результатів пошуку Google. 
// @description:vi Đây là một mô tả người dùng rất đơn giản, vô hiệu hóa AMP trên trang kết quả tìm kiếm của Google. 
// @description:zh-HK 這是個簡單輕巧的腳本，用來停用 Google 搜尋結果的 AMP 功能。 
// @description:zh-TW 這是一個非常簡單的使用者腳本，其禁用於 Google 搜尋結果頁面上之加速的行動頁面（AMP）。 
// @description:zh 这是一个非常简单的用于在 Google 搜索结果页禁用 AMP 的用户脚本。 
// @downloadURL  https://userscripts.adtidy.org/release/disable-amp/1.0/disable-amp.user.js
// @updateURL    https://userscripts.adtidy.org/release/disable-amp/1.0/disable-amp.meta.js
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @include      https://www.google.*/*
// @include      https://news.google.*/*
// @include      https://yandex.*/*
// @include      https://*.turbopages.org/*
// @include      https://*/amp/*
// @include      https://*/*/amp/*
// @include      https://amp.*
// @include      https://*/amp-*/*
// @include      https://*/?amp*
// @include      https://*?amp=1*
// @include      https://*/*&amp*
// @include      https://*/*&amp=1*
// @exclude      https://www.orfonline.org/*
// @exclude      https://tehnichka.pro/*
// @exclude      https://yandex.ru/turbo/s/terrnews.com/*
// @exclude      https://amp.dev/*
// @run-at       document-end
// ==/UserScript==
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=/(amp\/|amp-|\.amp)/,o=function(t){new MutationObserver(t).observe(document,{childList:!0,subtree:!0})},a=function(t){var e=t.querySelector('[aria-label="AMP logo"], [aria-label="Logo AMP"]');e&&(e.style.display="none")},i=function(t,e){t.setAttribute("href",e),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=e}),!0),a(t)};function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l,s,f,d=/^https?:\/\/.+/i,p="__".concat(Math.random()),m=function(){u(document.querySelectorAll("a[data-amp-cur]")).forEach((function(t){if(!t[p]){t[p]=!0;var e=t.getAttribute("data-amp-cur")||t.getAttribute("data-amp");e&&i(t,e.replace(n,""));var r=t.href;r&&r.includes("articleViewAmp")&&i(t,r.replace("articleViewAmp","articleView"))}}))},b=function(){m(),document.querySelectorAll("a[data-amp-cdn]").forEach((function(t){var e=t.href;e.includes("cdn.ampproject.org")&&(e="https://"+e.substr(e.indexOf("cdn.ampproject.org/wp/s/")+24)),e.substr(8).startsWith("amp.")&&(e="https://"+e.substr(12)),(e=e.replace("?amp&","?&"))!==t.href&&(t.setAttribute("href",e),t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),document.location.href=e}),!0),a(t))}))},g=function(){window.self===window.top&&document.querySelectorAll("article > a[jslog]").forEach((function(t){var e=function(t){var e,r=t.substring(t.indexOf(":")+1,t.indexOf("; track:click,vis"));try{e=JSON.parse(atob(r))}catch(t){}if(!e)return null;var o=e.filter((function(t){return"string"==typeof t&&(t.startsWith("http")||t.startsWith("https"))}));return o.length<2?null:o.find((function(t){return!n.test(t)}))||null}(t.getAttribute("jslog"));e&&i(t,e)}))};l=document.location,s=l.href,f=l.origin,s.includes("https://yandex.ru/turbo")||s.includes("turbopages.org")?function(){var t=document.querySelector('script[data-name="post-message"][data-message]');if(t){var e=t.getAttribute("data-message"),r=JSON.parse(e);r&&r.originalUrl&&(document.location.href=r.originalUrl)}}():f.includes(".google.")?f.includes("news.google.")?o(g):o(b):function(){var t=Number(sessionStorage.getItem("__disable_amp_redirected"));if(!(window.self!==window.top||t&&Date.now()-t<3e4)){var e=document.querySelector('head > link[rel="canonical"]');document.querySelector('head > script[src^="https://cdn.ampproject.org"]')&&e&&d.test(e.href)&&(sessionStorage.setItem("__disable_amp_redirected",Date.now()),window.top.location.href=e.href)}}()}]);