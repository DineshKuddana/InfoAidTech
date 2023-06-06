
function convertTemperature() {
    const inputScale = document.getElementById('input-scale').value;
    const outputScale = document.getElementById('output-scale').value;
    const inputTemperature = document.getElementById('input-temperature').value;
    const outputTemperatureField = document.getElementById('output-temperature');
  

    if (isNaN(inputTemperature)) {
      outputTemperatureField.value = 'Invalid input temperature';
      return;
    }
  
    const inputTemp = parseFloat(inputTemperature);
  
    let result;
    if (inputScale === 'celsius') {
      if (outputScale === 'fahrenheit') {
        result = (inputTemp * 9/5) + 32;
      } else if (outputScale === 'kelvin') {
        result = inputTemp + 273.15;
      } else {
        result = inputTemp;
      }
    } else if (inputScale === 'fahrenheit') {
      if (outputScale === 'celsius') {
        result = (inputTemp - 32) * 5/9;
      } else if (outputScale === 'kelvin') {
        result = (inputTemp - 32) * 5/9 + 273.15;
      } else {
        result = inputTemp; 
      }
    } else if (inputScale === 'kelvin') {
      if (outputScale === 'celsius') {
        result = inputTemp - 273.15;
      } else if (outputScale === 'fahrenheit') {
        result = (inputTemp - 273.15) * 9/5 + 32;
      } else {
        result = inputTemp; 
      }
    }
  

    outputTemperatureField.value = result.toFixed(2);
  }
  

  const convertBtn = document.getElementById('convert-btn');
  convertBtn.addEventListener('click', convertTemperature);
  