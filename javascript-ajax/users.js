
var $userList = document.querySelector('#user-list');

var $request = new XMLHttpRequest();
$request.open('GET', 'https://jsonplaceholder.typicode.com/users' );
$request.responseType = 'json';
$request.addEventListener('load', function() {
  console.log($request.status);
  console.log($request.response);

  for (let i = 0; i < $request.response.length; i++) {
    var $indUser = document.createElement('li');
    $indUser.textContent = $request.response[i].name;
    $userList.appendChild($indUser);
  }
});
$request.send();
