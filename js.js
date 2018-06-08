function count(){
  var string = document.forms['form'].number.value;
  var numbers = string.split('');
  var numbers = new Array;
  for(var i = 0; i < string.length; i++){
    numbers[i] = parseInt(string[i]);
  }
  var all = 0;
  for(var i = 0; i < string.length; i++){
    all += numbers[i];
  }
  alert(all);
}
