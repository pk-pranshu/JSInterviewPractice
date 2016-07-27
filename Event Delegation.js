// Event Delegation 

// JavaScript event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.

// How will it help me?
// Imagine an HTML table with 10 columns and 100 rows in which you want something to happen when the user clicks on a table cell. 
// For example, I once had to make each cell of a table of that size editable when clicked. 
// Adding event handlers to each of the 1000 cells would be a major performance problem and, potentially, a source of browser-crashing memory leaks.
// Instead, using event delegation, you would add only one event handler to the table element, intercept the click event and determine which cell was clicked.


