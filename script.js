function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPopup() {
  document.getElementById('popup').style.display = 'flex';
  document.body.classList.add('no-scroll'); // Add the class to prevent scrolling
}

function openPopup1() {
  document.getElementById('popup1').style.display = 'flex';
  document.body.classList.add('no-scroll'); // Add the class to prevent scrolling
}

function openPopup2() {
  document.getElementById('popup2').style.display = 'flex';
  document.body.classList.add('no-scroll'); // Add the class to prevent scrolling
}

function openPopup3() {
  document.getElementById('popup3').style.display = 'flex';
  document.body.classList.add('no-scroll'); // Add the class to prevent scrolling
  }

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.body.classList.remove('no-scroll'); // Remove the class to allow scrolling
}
  

function closePopup1() {
  document.getElementById('popup1').style.display = 'none';
  document.body.classList.remove('no-scroll'); // Remove the class to allow scrolling
}

function closePopup2() {
  document.getElementById('popup2').style.display = 'none';
  document.body.classList.remove('no-scroll'); // Remove the class to allow scrolling
}

function closePopup3() {
  document.getElementById('popup3').style.display = 'none';
  document.body.classList.remove('no-scroll'); // Remove the class to allow scrolling
}