// const arr = [32, 234, 34, 109, 2934, 12, 10, 29];
// const oddNumbers = arr.filter((number) => number % 2)
// const evenNumbers = arr.filter((number) => !(number % 2))
// const numbersBiggerThan100 = arr.filter((number) => number > 100)

const input = document.querySelector('input');
const liElements = document.querySelectorAll('li');
const ul = document.querySelector('ul');
input.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = '';
    tasks.forEach(el => {

        ul.appendChild(el)

    })
})