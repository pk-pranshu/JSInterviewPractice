Async.js


// Quick Examples

async.map(['file1','file2','file3'], fs.stat, function(err, results){
    // results is now an array of stats for each file
});

async.filter(['file1','file2','file3'], fs.exists, function(results){
    // results now equals an array of the existing files
});

async.parallel([
    function(){ ... },
    function(){ ... }
], callback);

async.series([
    function(){ ... },
    function(){ ... }
]);



var users = [];
async.series([
  function(callback) {
    fetchUsers(callback);
  },
  function(callback) {
    renderUsersOnPage(callback);
  },
  function(callback) {
    fadeInusers(callback);
  }
  function(callback) {
    loadUserPhotos(callback);
  }
]);

var users = [];
async.series([
  fetchUsers,
  renderUsersOnPage,
  fadeInusers,
  loadUserPhotos
]);

