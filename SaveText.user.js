// ==UserScript==
// @name           SaveText
// @author         edvakf
// @description    Saves data in textareas in localStorage
// @version        0.4
// @include        *
// ==/UserScript==

(function save_text_user_js() {
  var id = 'savetext.user.js';

  try {
    // remove obsolete data
    var data = JSON.parse(localStorage[id]);
    for (var url in data) {
      if ((Date.now() - data[url].time) > 10 * 60 * 1000) {
        // more than 10 min has passed since data is stored
        delete data[url];
      }
    }
    localStorage.removeItem(id); // make sure to delete on old webkit
    localStorage[id] = JSON.stringify(data);

    // restore
    var d = data[location.href];
    if (d) {
      Array.prototype.forEach.call(document.querySelectorAll('textarea'), function(elem) {
        var xpath = getXPathOfElement(elem);
        if (d.fields[xpath]) {
          elem.value = d.fields[xpath];
        }
      });
    }
  } catch(e) {
    //console.log(e);
  }

  var timer;
  window.addEventListener('input', function(e) {
    if (e.target instanceof HTMLTextAreaElement) {
      clearTimeout(timer);
      timer = setTimeout(save, 1000)
    }
  }, true);// bubbling phase

  // store periodically
  setInterval(save, 60*1000);

  function save() {
    var d = {fields:{}};
    var c = 0;
    Array.prototype.forEach.call(document.querySelectorAll('textarea'), function(elem) {
      if (elem.value && ++c) d.fields[getXPathOfElement(elem)] = elem.value;
    });
    if (!c) { // all empty
      var data = {};
      try {
        data = JSON.parse(localStorage[id]);
        delete data[location.href];
      } catch(e) {
        //console.log(e);
      }
      localStorage.removeItem(id);
      if (JSON.stringify(data) !== '{}') {
        localStorage[id] = JSON.stringify(data);
      }
    } else { // some textareas have values
      var data = {};
      try {
        data = JSON.parse(localStorage[id]);
      } catch(e) {
        //console.log(e);
      }
      d.time = Date.now();
      data[location.href] = d;
      localStorage.removeItem(id);
      localStorage[id] = JSON.stringify(data);
    }
  }


  // =========== utility ===========
  function getXPathOfElement(elem) {
    var xpath = [];
    do {
      if (elem === document) {
        xpath.unshift('/');
        break;
      } else {
        if (elem.hasAttribute('id')) {
          xpath.unshift('id("'+elem.getAttribute('id')+'")');
          break;
        } else {
          var name = elem.tagName.toLowerCase();
          var count = 0;
          Array.prototype.some.call(elem.parentNode.children, function(sibling) {
            if (sibling.tagName.toLowerCase() === name) count++;
            if (sibling === elem) {
              name += '['+count+']';
              return true;
            }
          });
          xpath.unshift(name);
        }
      }
    } while (elem = elem.parentNode);
    return xpath.join('/');
  }
})()
