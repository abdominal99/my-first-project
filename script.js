let count = 0;
const button = document.querySelector('button');

button.addEventListener('click', () => {
    count++;
    alert('Button clicked ' + count + ' times!');
});
