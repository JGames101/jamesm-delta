var menu = false;
var online = navigator.onLine;
if (localStorage.getItem("backgroundImage") == undefined) {
	console.log("Missing background image settings.");
} else {
	document.body.style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
};
if (localStorage.getItem("themeColour") == undefined) {
	localStorage.setItem("themeColour", "#cb2c36");
	localStorage.setItem("backgroundImage", "5");
	localStorage.setItem("theme", "photoDef");
};
if (localStorage.getItem("theme") == "Greyscale") {
	$('head').append('<meta name="theme-color" content="' + '#323232' + '" />');
} else {
	$('head').append('<meta name="theme-color" content="' + localStorage.getItem("themeColour") + '" />');
};
document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");

// Theme Stuff
if (localStorage.getItem("theme") == "light") {
	document.getElementById('menu').style.backgroundColor = '#cccccc';
	var infoBtnCount = document.getElementsByClassName('pinned').length;
	var colourNum = 0;
	while (colourNum < infoBtnCount) {
		document.getElementsByClassName('pinned')[colourNum].style.color = localStorage.getItem("themeColour");
		colourNum += 1;
	};
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = '#fafafa';
	
};

if (localStorage.getItem("theme") == "colourful") {
	document.body.style.backgroundImage='url(/photos/none.jpg)';
	document.body.style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
};

if (localStorage.getItem("theme") == "Greyscale") {
	document.body.style.WebkitFilter="grayscale(100%)";
	document.getElementById('menu').style.WebkitFilter="grayscale(100%)";
	document.body.style.filter="grayscale(100%)";
	document.getElementById('menu').style.filter="grayscale(100%)";
	document.body.style.backgroundImage='url(/photos/none.jpg)';
	document.body.style.backgroundColor = 'grey';
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
};

if (localStorage.getItem("theme") == "Blur") {
	document.getElementById('menu').style.WebkitBackdropFilter="blur(72px)";
	document.getElementById('menu').style.backdropFilter="blur(72px)";
	document.getElementById('menu').style.backgroundColor = "rgba(0, 0, 0, 0)";
	document.getElementById('menu').style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0), 0 6px 20px 0 rgba(0,0,0,0)";
};
if (localStorage.getItem("theme") == "transparent") {
	document.getElementById('menu').style.backgroundColor = "rgba(0, 0, 0, 0)";
	document.getElementById('menu').style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0), 0 6px 20px 0 rgba(0,0,0,0)";
};
if (localStorage.getItem("theme") == "inverted") {
	document.body.style.WebkitFilter="invert(100%)";
	document.body.style.filter="invert(100%)";
	document.body.style.backgroundColor = localStorage.getItem("themeColour");
};
if (localStorage.getItem("theme") == "saturated") {
	document.body.style.WebkitFilter="saturate(200%)";
	document.body.style.filter="saturate(200%)";
};

// Functions for other content settings
if (localStorage.getItem('mobile.navLoc') == "bottom") {
	document.getElementById("menu").className += "menuBottom";
	document.getElementById("menuButton").className = "menuBtnBottom";
	console.log('menu loaded to bottom.');
};
// Global Functions

function toggleMenu() { //The commented code is for the page responding to when the menu is opened.
	if (menu == true) {
		document.getElementById('menuTextBox').style.color = 'transparent';
		document.getElementById('menu').className = 'hidden';
		document.getElementById('menuTextBox').style.cursor = "initial";
		document.getElementById('menuToggle').innerHTML = 'keyboard_arrow_right';
		//document.getElementsByClassName('content')[0].id = 'initial';
		//document.getElementById('pageName').className = 'hidden';
		if (localStorage.getItem('mobile.navLoc') == "bottom") {
			document.getElementById("menu").className += " menuBottom";
		};
		menu = false;
	} else {
		document.getElementById('menuTextBox').style.color = 'white';
		document.getElementById('menu').className = 'open';
		document.getElementById('menuTextBox').style.cursor = "pointer";
		document.getElementById('menuToggle').innerHTML = 'keyboard_arrow_left';
		//document.getElementsByClassName('content')[0].id = 'contentOpen';
		//document.getElementById('pageName').className = 'pageNameCondensed';
		if (localStorage.getItem('mobile.navLoc') == "bottom") {
			document.getElementById("menu").className += " menuBottom";
		};
		menu = true;
	}
}
function setPage(newLocation) {
	window.location.href = "https://jgames101.github.io" + newLocation;
}

function simulateOverlay() {
	document.getElementById('jsmissing').style.display = 'block';
}

function getAllUrlParams(url) {
  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}