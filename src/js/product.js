
const fetchData = async () => {
    try {
    
  
      const response = await fetch('https://fakestoreapi.com/products');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        const data = await response.json();
  
        data.forEach(item => {
          const template = document.createElement('template');
  
          template.innerHTML = `
            <style>
              .post {
                display:flex;
                flex-direction:column;
                align-items:center;
                padding: 12px 30px;     
                width: 300px !important;
                height: 300px !important;
              }
              img{
                width:150px;
                height:150px
              }
              .post-body{
                text-align: center;
                padding: 12px 30px;   
              }
            </style>
            <div class="post">
              <img src="${item.image}" alt='no photo' />
              <div class="post-body">
                <p class="post-card-title">${item.title}</p>
                <p class="post-card-title">${item.price}</p>
              </div>
            </div>
          `;
  
          document.querySelector('photo-card').shadowRoot.appendChild(
            template.content.cloneNode(true)
          );
        });
  
      }
    } catch (error) {
      console.error('Fetch error:', error);
  
    }
  };
  
  class Photos extends HTMLElement {
    constructor() {
      super();
   
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      fetchData();
    }
  }
  
  window.customElements.define('photo-card', Photos);
  
  
  