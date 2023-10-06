window.addEventListener("load", () => {
  const product = document.querySelector('.photo-card');
  const loadingElement = document.querySelector('.loading-element');

  loadingElement.style.display='flex'

  const time = setTimeout(() => {
 
      product.style.display = "flex";
      loadingElement.style.display='none'
    
  }, 2000);


});
