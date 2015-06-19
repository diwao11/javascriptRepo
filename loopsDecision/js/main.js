var table = 3;
var operator = 'addition';
var i = 1;
var msg = '';

if (operator === 'addition') {
	while(i < 11){ //while counter is less than 11.
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>'; 
		i++; //adding 1 to the counter.
	}
}else {
	while (i < 11) {
		msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>';
		i++;
	}
}
 var el = document.getElementById('blackboard');
 el.innerHTML = msg;