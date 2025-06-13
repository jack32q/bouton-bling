const button = document.getElementById('blingButton');

button.addEventListener('click', () => {
  button.classList.remove('clicked'); // Reset class if needed
  void button.offsetWidth; // Trigger reflow
  button.classList.add('clicked');
});
