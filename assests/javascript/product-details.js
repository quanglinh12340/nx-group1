import products from "./home/products.js";
console.log('products: ', products);

function getProduct() {
   let search = location.search;
   let idsp = null;
   if (search) {
      search = search.replace('?', '')
      const urlParams = new URLSearchParams(search)
      idsp = urlParams.get('idsp') || null;

      if (!idsp) {
         return alert('Khong tim thay san pham')
      }

      const product = products.find((product) => {
         console.log('product:', idsp, '|', product.idSP);
         return product.idSP == idsp
      })
      if (!product) {
      }
      console.log('product Details:', product)
   }
}

function renderDescription(id) {
   const description = descriptions.find((item) => item.idSPd === id)
   //code render
}

getProduct();

function changeTab(elTablist, thisEl, tabActive) {
   clearClassActive(elTablist)
   thisEl.classList.add('active')
   const elTabContents = document.querySelectorAll('.tab-content > div');
   for (let i = 0; i < elTabContents.length; i++) {
      const tab = elTabContents[i].getAttribute('tab')
      if (tab === tabActive)
         elTabContents[i].style.display = 'block';
      else
         elTabContents[i].style.display = 'none';
   }

}
function clearClassActive(elTabList) {
   for (let i = 0; i < elTabList.length; i++) {
      elTabList[i].classList.remove('active');
   }
}

function addEventClickTab() {
   const elTabItems = document.querySelectorAll('.tab-menu a');
   for (let i = 0; i < elTabItems.length; i++) {
      const id = elTabItems[i].getAttribute('id')
      elTabItems[i].onclick = function () {
         changeTab(elTabItems, elTabItems[i], id)
      }
   }
}
addEventClickTab();


