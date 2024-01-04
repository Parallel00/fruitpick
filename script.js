document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#fruit');
    const suggestions = document.querySelector('.suggestions ul');
    const searchBox = document.getElementById('fruit');

    const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

    function search(str) {
        let results = '';
        if (str.trim() === '') {
            suggestions.innerHTML = '';
            return;
        }
        const letterFilter = fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));
        for (let i = 0; i < letterFilter.length; i++) {
            results += `<li>${letterFilter[i]}</li>`;
        }
        showSuggestions(results, input.value);
    }

    function showSuggestions(srcSugg) {
        suggestions.innerHTML = srcSugg;
    }

    function searchHandler(e) {
        search(e.target.value);
    }

    function useSuggestion(e) {
        if (e.target.tagName === 'LI') {
            input.value = e.target.textContent;
            suggestions.innerHTML = '';
        }
    }
    input.value = ''; //Clears the text box on reload
    input.addEventListener('input', searchHandler);
    suggestions.addEventListener('click', useSuggestion);
});