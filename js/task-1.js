`use strict`;

console.log("task-1:");
console.log(`---------------------------------------------------------`);

const categoriesList = document.querySelector(`#categories`);
const categoryItems = document.querySelectorAll(`.item`)

console.log(`Number of categories ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryName = item.querySelector(`h2`).textContent;
    const categoryElementsCount = item.querySelectorAll(`ul li`).length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElementsCount}`);
});

console.log(`---------------------------------------------------------`);