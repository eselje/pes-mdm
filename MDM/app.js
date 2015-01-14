
   function ticks(element) {
       if (element.hasOwnProperty('list') && element.hasOwnProperty('min') && element.hasOwnProperty('max') && element.hasOwnProperty('step')) {
           var datalist = document.createElement('datalist'),
               minimum = parseInt(element.getAttribute('min')),
               step = parseInt(element.getAttribute('step')),
               maximum = parseInt(element.getAttribute('max'));
           datalist.id = element.getAttribute('list');
           for (var i = minimum; i < maximum + step; i = i + step) {
               datalist.innerHTML += "<option value=" + i + "></option>";
           }
           element.parentNode.insertBefore(datalist, element.nextSibling);
       }
   }
   