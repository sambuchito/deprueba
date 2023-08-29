document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

});



const searchInputInicio = document.getElementById('search-input-inicio');
const searchResultsInicio = document.getElementById('search-results-inicio');

searchInputInicio.addEventListener('input', () => {
    let searchText = searchInputInicio.value.toLowerCase();
  
    let filteredProducts = productsArray.products.filter(product => product.name.toLowerCase().includes(searchText));
  
    if (filteredProducts.length === 0) {
      searchResults.innerHTML = '<p>No se encontraron resultados</p>';
    } else {
      showProductsList(filteredProducts);
    }
  });
