const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const input = parseInt(document.getElementById('input').value);
  let from = (document.getElementById('from').value);
  let to = (document.getElementById('to').value);
  const result = document.getElementById('result');
  let converted;
  if(from=="celseus"&& to=="fahrenheit"){
    converted = (input * 9/5)+32
    console.log(result);
    result.textContent = `${input} celseus is ${converted} fahrenheit`
  }
  else if(from=="fahrenheit"&& to=="celseus"){
    converted = (input - 32)*5/9
    console.log(result);
    result.textContent = `${input} fahrenheit is ${converted} celcius`
  }
  else if (from === "celseus" && to === "kelvin") {
    converted = input + 273.15;
    result.textContent = `${input}° Celsius is ${converted} Kelvin`;
  } 
  else if (from === "kelvin" && to === "celseus") {
    converted = input - 273.15;
    result.textContent = `${input} Kelvin is ${converted}° Celsius`;
  } 
  else if (from === "fahrenheit" && to === "kelvin") {
    converted = ((input - 32) * 5 / 9) + 273.15;
    result.textContent = `${input}° Fahrenheit is ${converted} Kelvin`;
  } 
  else if (from === "kelvin" && to === "fahrenheit") {
    converted = ((input - 273.15) * 9 / 5) + 32;
    result.textContent = `${input} Kelvin is ${converted}° Fahrenheit`;
  }
   else {
    result.textContent = "Please select valid units.";
  }
  
});
