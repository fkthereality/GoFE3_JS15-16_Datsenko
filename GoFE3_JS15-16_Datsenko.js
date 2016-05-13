
$(document).ready(function() {
$("body").append(
$("<h3/>").text("Search Form"), $("<form/>", {
action: '#',
method: '#'
}).append( 
$("<input/>", {
type: 'text',
id: 'form',
name: 'name',
placeholder: 'Search...'
}), 
$("<input/>", {
type: 'submit',
id: 'submit',
value: 'Submit'
}),
$("<br/>")))
$("#submit").click(function(){ 
search();
});
$("body").append('<div id="result"></div>')
});
function search(){
var value = document.getElementById('form').value;
console.log(value);  
$.getJSON('http://api.riffsy.com/v1/search?tag=' + value + '&limit=5',
function(data){
$("#result").empty();
console.log('data.results.length', data.results.length);
console.log('data', data);
$.each(data.results, function(i, results){
$("<img/>").attr("src", results.itemurl).appendTo("#result");          
$("#result").append('<p>' + results.title + '</p>');
if (i == 3) return false;
});
});
$(window).keypress(function(enter){   
switch (enter.keyCode) {
case 13:       
search();
break;      
};
});
};
