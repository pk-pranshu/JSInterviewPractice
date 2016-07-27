// Event Delegation   ** SitePoint **

// JavaScript event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.

// How will it help me?
// Imagine an HTML table with 10 columns and 100 rows in which you want something to happen when the user clicks on a table cell. 
// For example, I once had to make each cell of a table of that size editable when clicked. 
// Adding event handlers to each of the 1000 cells would be a major performance problem and, potentially, a source of browser-crashing memory leaks.
// Instead, using event delegation, you would add only one event handler to the table element, intercept the click event and determine which cell was clicked.


//Expecting that we’ll write a few event handler functions that will need this functionality, we’ll place it in a separate function called getEventTarget
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// The variable e represents the event object and we need only a sprinkling of cross-browser code to gain access to and return the target element, 
// stored in the srcElement property in Internet Explorer and the target property in other browsers.

function editCell(e) {
  var target = getEventTarget(e);
  if(target.tagName.toLowerCase() === 'td') {
    // DO SOMETHING WITH THE CELL
  }
}


// What are the pros and cons?
// The benefits of JavaScript event delegation are:

// There are less event handlers to setup and reside in memory. This is the big one; better performance and less crashing.
// There’s no need to re-attach handlers after a DOM update. If your page content is generated dynamically, 
// via Ajax for example, you don’t need to add and remove event handlers as elements are loaded or unloaded.
// The potential problems may be less clear, but once you are aware of them they’re easily avoided:

// There’s a risk your event management code could become a performance bottleneck, so keep it as lean as possible.
// Not all events bubble. The blur, focus, load and unload events don’t bubble like other events. 
// The blur and focus events can actually be accessed using the capturing phase (in browsers other than IE) instead of the bubbling phase but that’s a story for another day.
// You need caution when managing some mouse events. If your code is handling the mousemove event you are in serious risk of creating a performance bottleneck because the mousemove event is triggered so often. 
// The mouseout event has a quirky behaviour that is difficult to manage with event delegation.