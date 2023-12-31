const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
};

/*  */

/* document.addEventListener("DOMContentLoaded", ()=>{
  let lista = document.getElementsByTagName("li");

  lista[3].innerHTML = "<a class=nav-link href=my-profile.html>" +localStorage.getItem("logeado")+ "</a>";
}); */

/* const search_btn = document.getElementById("searchButton");
const close_btn = document.getElementById("botoncerrar");
const search_box_wrap = document.getElementById("div-wrap");
const input_search = document.getElementById("searchInput");

search_btn.addEventListener("click", function(){
	search_box_wrap.classList.add("active");
	input_search.focus();
});

close_btn.addEventListener("click", function(){
	search_box_wrap.classList.remove("active");
}); */





