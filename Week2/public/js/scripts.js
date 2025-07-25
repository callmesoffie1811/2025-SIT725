function changeText() {
  var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"]
  var number = getRandomNumberBetween(0, textsArray.length - 1)
  console.log("Index: ", number)
  document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// New calculator form handler
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Materialize select elements
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  
  const form = document.getElementById('calcForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const operation = document.getElementById('operation').value;

    const res = await fetch('/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ a, b, operation })
    });

    const data = await res.json();
    document.getElementById('result').innerText = data.result ?? data.error;
  });
});
