const $q = (s) => document.querySelector(s);

function loadUsers() { 
    return fetch("http://localhost:8083/api/users/").then((response) =>
        response.json()
    );
}

function getUserId() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("userId")) return undefined;
    return Number(params.get("userId"));
}

function fillUsersDropDown(users, selectedUserId = 0) {
    for (const user of users) {
        const option = document.createElement("option");
        option.value = user.id;
        option.innerText = user.name;
        if (user.id === selectedUserId) {
            option.selected = true;
        }

        usersDropDownList.appendChild(option);
    }
}

function loadCategories() {
    return fetch("http://localhost:8083/api/categories/")
        .then((response) => response.json());
}

function fillCategoriesDropDown(categories) {
    for (const category of categories) {
        const option = document.createElement("option");
        option.value = category.id;
        option.innerText = category.name;
        categoriesDropdownList.appendChild(option)
    }
}