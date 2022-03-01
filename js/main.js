import { setSearchFocus } from './searchBar.js';
import { getSearchTerm } from './dataFunctions'
import { retrieveSearchResults } from './dataFunctions'
document.addEventListener("readystatechange",(event) => {
    if(event.target.readystate === "complete"){
        initApp();
    }
});

const initApp = () => {
    setSearchFocus(); 
    
    // 3 listeners clear text 
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}


//  Procedural "wWorkflow" function
const submitTheSearch = (event) => {
    event.preventDefault();
    //  detete search results
    processSearch();
    setSearchFocus();
};

//  procedural 
const processSearch = async() => {
    // clear the stats  line
    const searchTerm = getSearchTerm();
    if(searchTerm === "")return;
    const resultsArray = await retrieveSearchResults(searchTerm);
};
