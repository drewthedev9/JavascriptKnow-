import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () =>
{
     elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResList.innerHTML ='';
}

// pasts with tomato ad spinach
/*
acc: 0 /acc + cur.length = 5 / newTile = ['pasta']
acc : 5 /acc + cur.length = 9 / newTile = ['pasta', "with"]
acc: 9 + cur.length = 15 / newTile = ['pasta', "with", Tomato]
acc: 15 + cur.length = 18 / newTile = ['pasta', "with", Tomato]
acc: 18 + cur.length = 24/ newTile = ['pasta', "with", Tomato]
 */


// shortens the title of the recipe.
const limitRecipeTitle = (title, limit = 17)=>{
    const newTitle = [];
     if (title.length > limit){
        // title split
        title.split('').reduce((acc, cur)=>{
            if (acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        },0);

        // return the result.
        // join puts array into a string with spaces between words.
        return `${newTitle.join('')}...`;
     }
     return title;
}

const renderRecipe = recipe =>{
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
        <img src="${recipe.image_url}"${recipe.title}">
         </figure>
         <div class="results__data">
        <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
         <p class="results__author">${recipe.publisher}</p>
         </div>
        </a>
    </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}


// prev or next.
const createButton = (page, type)=> `

<button class="btn-inline results__btn--${type} data-goto=${type === 'prev' ? page -1 :page + 1 }">
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-left"></use>
    </svg>; 
    <span>Page ${type === 'prev' ? page -1 :page + 1 }</span>
</button>
`;

const renderButtons = (page,numResults,resPerPage) =>{
    // math.ceil rounds it to the next whole integer.
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if(page === 1 && pages > 1 ){
        //  only button to go to next page
        button = createButton(page, 'next');
    } 
    else if (page < pages){
        // both buttons
        button =`
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    }
    else if(page === pages && pages > 1 ){
        // only button to go to the prev page.
        button = createButton(page, 'prev');
    }


elements.searchResPages.insertAdjacentHTML('afterbegin', button);

};

export const renderResults = (recipes, page = 2,resPerPage = 10) =>{
    // render rsults of current page.
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);
    // render pagination buttons.
    renderButtons(page, recipes.length, resPerPage);

}