import Search from './models/Search';
import * as searchView from './views/SearchView'
import {elements, renderLoader, clearLoader} from './views/base';
// Global ste of the app
// search Object
// Currnet recipe object
// Liked recipes
const state = {};

const controlSearch = async() =>{
    // Get the query from the view
    const query = searchView.getInput();
    

    if(query){
        //  New search object and add to state
        state.search = new Search(query);

        // Prepare UI for results.
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // Search for Recipes._ returns a promise from getresults in search.js
        await state.search.getResults();

        // Render results on UI. -THen this wil be logged after the function above.
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener(click, e =>{
    console.log(e,target);
});



