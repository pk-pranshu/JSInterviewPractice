// Wait until all jQuery Ajax requests are done

//Also you could use async.js. or Promises


$.when(ajax1(), ajax2(), ajax3(), ajax4()).done(function(a1, a2, a3, a4){
    // the code here will be executed when all four ajax requests resolve.
    // a1, a2, a3 and a4 are lists of length 3 containing the response text,
    // status, and jqXHR object for each of the four ajax calls respectively.
});

function ajax1() {
    // NOTE:  This function must return the value 
    //        from calling the $.ajax() method.
    return $.ajax({
        url: "someUrl",
        dataType: "json",
        data:  yourJsonData,            
        ...
    });
}

$.when($.ajax(...), $.ajax(...)).then(function (resp1, resp2) {
    //this callback will be fired once all ajax calls have finished.
});


$.when(

  // Deferred object (probably Ajax request),

  // Deferred object (probably Ajax request),

  // Deferred object (probably Ajax request)

).then(function() {

  // All have been resolved (or rejected), do your thing

});


$.when(
  // Get the HTML
  $.get("/feature/", function(html) {
    globalStore.html = html;
  }),

  // Get the CSS
  $.get("/assets/feature.css", function(css) {
    globalStore.css = css;
  }),

  // Get the JS
  $.getScript("/assets/feature.js")

).then(function() {

  // All is ready now, so...

  // Add CSS to page
  $("<style />").html(globalStore.css).appendTo("head");

  // Add HTML to page
  $("body").append(globalStore.html);

});





// I think its better than $.when because you can merge all kinds of asynchronous call that does not support promises out of the box like timeouts, SqlLite calls etc. and not just ajax requests.
// If you need the requests to happen in order, you shouldn't be using AJAX (the first "a" is for "asynchronous")
// To address this you can call request2() in the callback for the "success" of your first request.

function request1() {
    $.ajax({
        url: 'ajaxhandler.aspx?method=method1' ,
        beforeSend: function (xhr) {
            xhr.overrideMimeType('text/plain; charset=utf-8');
        },
        success: function (data) {
              request2();
        }

    });
}


// the callback pattern, you pass a function as an argument to an asynchronous method. When that call has finished, the host function executes your callback.
// This ensures renderUsersOnPage() only runs after the users have been fetched.

var users = [];
$.get(‘/users’, function(data) {
  users = data;
  renderUsersOnPage(users);
});

