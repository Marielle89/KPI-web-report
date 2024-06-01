function showTab(tabName) {
    const tab = document.getElementById(tabName);

    // Вивід заголовку таби
    document.getElementById('labContent').innerHTML = `<h2>${tab.dataset.title}</h2>`;

    // Вивід навігаційного меню
    const menu = document.createElement('ul');
    const menuItems = tab.getElementsByClassName('menu-item');
    Array.from(menuItems).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.textContent;

        // Додавання обробника подій для виведення відповідного контенту при кліці на пункт меню
        li.addEventListener('click', () => showContent(item.dataset.contentId));

        menu.appendChild(li);
    });
    document.getElementById('labContent').appendChild(menu);
}

function showContent(contentId) {
    // Отримання вмісту за допомогою ID елемента
    const content = document.getElementById(contentId).innerHTML;

    // Вивід вмісту
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = content;
    document.getElementById('labContent').appendChild(contentDiv);
}
