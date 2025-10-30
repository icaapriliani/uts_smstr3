// produk buku
const products = [
  {
    id: "bulan",
    name: "Bulan",
    price: 85000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "sendiri",
    name: "Sendiri",
    price: 90000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TWSQvJPBFirtRE0GJXq4DIf7xdDQ7eLR_A&s",
    category: "Novel",
  },
  {
    id: "happines-battle",
    name: "Happines Battle",
    price: 80000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnYlPMPNigfxgka6vNQZb9Mtrd2Z-NpQCoA&s",
    category: "Novel",
  },
  {
    id: "rain",
    name: "Rain",
    price: 95000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwlAoSKP2D5BrLS-tXJeEboxwx2UkdTEizg&s",
    category: "Novel",
  },
  {
    id: "matematika-dasar",
    name: "Matematika Dasar",
    price: 60000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNd-EVW7NmibvsBKW21nDPtJfMM1tkZZ7BmA&s",
    category: "Novel",
  },
  {
    id: "kimia-sma",
    name: "Kimia AMA",
    price: 75000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhE4Gxf8rHAdq2Xp-Fw47aEH6AjKovZZbfQg&s",
    category: "Novel",
  },
  {
    id: "fisika-sma",
    name: "Fisika SMA",
    price: 75000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKaRAmmr5yWd354EPyBUst6xB2KXYdfF0bQ&s",
    category: "Novel",
  },
  {
    id: "sejarah",
    name: "Sejarah",
    price: 55000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9XGE_t1NKsbJGm4CzjxFxcE66CyNKIAAew&s",
    category: "Novel",
  },
  {
    id: "allah-ada",
    name: "Allah Ada",
    price: 75000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxjpX6bYzKFuzHYn3T7dD-vpiNU4k4ehSwQ&s0",
    category: "Novel",
  },
  {
    id: "marah",
    name: "Marah",
    price: 80000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVanG5HAbzSj-ESnVp7zpdErFAufVX0wT3g&s",
    category: "Novel",
  },
];

let cart = [];

//ambil produk dihalman
const productlist = document.getElementById("productlist");

if (productlist) {
  //ambil kategori
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    //tambah judul kategori
    productlist.innerHTML += `
    <h3 class="mt-2 mb-2 fw-bold border-bottom pb-2">${cat}</h3>
    <div class="row g-3" id="cat-${cat.replace(/\s+/g, '')}"></div>
`;

    const catContainer = document.getElementById(
      `cat-${cat.replace(/\s+/g, '')}`
    );

    //ambil produk sesuai kategori
    products
        .filter(p => p.category === cat)
        .forEach( p => {
        catContainer.innerHTML += `
        <div class="col-md-3" id="${p.id}">
        <div class="card shadow-sm h-50">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body text-center">
        <h5 class="card-title ">${p.name}</h5>
        <p class="card-text text-muted ">Rp ${p.price.toLocaleString()}</p>
        <button class="btn btn-primary" onclick="addToCart('${
        p.id}')">Tambah ke Keranjang</button>
        </div>
        </div>
        </div>
        `;
    });
});
}

//tambah ke keranjang
function addToCart(id){
    const item=products.find(p => p.id === id);
    const found=cart.find(i => i.id === id);
    if (found){
        found.qty++;
    } else {
        cart.push({ ...item, qty:1 });
    }
    updateCartCount();
    alert(`${item.name} telah ditambahkan ke keranjang.`);
    }

//update jumlah keranjang
function updateCartCount(){
    document.getElementById("cartCount").innerText=cart.reduce((a,b) => a+b.qty, 0);
}

//tampilkan isi keranjang
function showCart(){
    const cartItems=document.getElementById("cartItems");
    const cartTotal=document.getElementById("cartTotal");
    cartItems.innerHTML="";

    if (cart.length===0){
        cartItems.innerHTML="<p>Keranjang kosong.</p>";
        cartTotal.innerText="Rp 0";
}else {
    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between align-items-center border-bottom py-2">
            <div>${item.name} x ${item.qty}</div>
            <div>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty('${item.id}', -1)">-</button>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty('${item.id}', 1)">+</button>
</div>
</div>`;
    });
    cartTotal.innerText=getCartTotal().toLocaleString();

}
const modal=new bootstrap.Modal(document.getElementById("cartModal"));
modal.show();
}

//ubah jumlah item di keranjang
function  changeQty(id, delta) {
    const item=cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if(item.qty <= 0) cart=cart.filter(i => i.id !== id);
    updateCartCount();
    showCart();
}


//hitung total keranjang
function getCartTotal(){
    return cart.reduce((sum, i) => sum + i.price *i.qty, 0);
}

//checkout
function checkout(){
    if (cart.length===0){
        alert("Keranjang kosong.");
        return;
    }
    localStorage.setItem("checkoutCart", JSON.stringify(cart));
    window.location.href="checkout.html";
}

function cancelCheckout(){
    const confirmCancel=confirm("Apakah Anda yakin membatalkan checkout?");
    if (confirmCancel){
        window.location.href="produk.html";
    }
}



