// 1. Két szám összeadása
function add(a, b) {
  return a + b;
}
console.log("1. feladat (3 + 4):", add(3, 4)); // 7

// 2. Páros vagy páratlan?
function isEven(num) {
  return num % 2 === 0;
}
console.log("2. feladat (4 páros?):", isEven(4)); // true
console.log("2. feladat (5 páros?):", isEven(5)); // false

// 3. Számláló gombnyomásra
let count = 0;
function incrementCounter() {
  count++;
  let counterElem = document.getElementById('counter');
  if (counterElem) {
    counterElem.innerText = count;
  }
}

// 4. Adat bekérése a felhasználótól
function askName() {
  let name = prompt('Mi a neved?');
  let nameElem = document.getElementById('name');
  if (nameElem && name) {
    nameElem.innerText = 'Üdvözöllek, ' + name + '!';
  }
}

// 5. Visszaszámláló
function startCountdown() {
  let timeLeft = 10;
  let countdownElem = document.getElementById('countdown');
  if (!countdownElem) return;

  let timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdownElem.innerText = 'Idő lejárt!';
    } else {
      countdownElem.innerText = timeLeft;
    }
    timeLeft--;
  }, 1000);
}

// 6. Tömb és lista & 8. Objektum megjelenítése DOM betöltődéskor
window.addEventListener('DOMContentLoaded', () => {
  let fruitListElem = document.getElementById('fruitList');
  if (fruitListElem) {
    let fruits = ['Alma', 'Banán', 'Narancs'];
    fruits.forEach(function(fruit) {
      fruitListElem.innerHTML += '<li>' + fruit + '</li>';
    });
  }

  let personInfoElem = document.getElementById('personInfo');
  if (personInfoElem) {
    let person = { name: 'John', age: 30, city: 'Budapest' };
    for (let key in person) {
      personInfoElem.innerHTML += '<li>' + key + ': ' + person[key] + '</li>';
    }
  }
});

// 7. Tömb elemeinek szorzása
function multiplyArray(arr, multiplier) {
  return arr.map(num => num * multiplier);
}
let numbers = [1, 2, 3, 4];
console.log("7. feladat (szorzott tömb):", multiplyArray(numbers, 2)); // [2,4,6,8]

// 9. Eseménykezelő kattintásra (Háttér váltás)
function changeBg() {
  document.body.style.backgroundColor = 'lightcoral';
}

// 10. Időzítő üdvözlő üzenet
window.onload = function() {
  setTimeout(function() {
    alert('Üdvözöllek az oldalon!');
  }, 5000);
};