// https://www.codewars.com/kata/58649884a1659ed6cb000072
function updateLight(current) {
  const lights = ["green", "yellow", "red"];
  const pointer = lights.indexOf(current) === (lights.length - 1) ? 0 : lights.indexOf(current) + 1;
  
  return lights[pointer];
}

updateLight('red');
updateLight('yellow');
updateLight('green');
