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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "happines-battle",
    name: "Happines Battle",
    price: 80000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "rain",
    name: "Rain",
    price: 95000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "matematika-dasar",
    name: "Matematika Dasar",
    price: 60000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "kimia-sma",
    name: "Kimia AMA",
    price: 75000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "fisika-sma",
    name: "Fisika SMA",
    price: 75000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "sejarah",
    name: "Sejarah",
    price: 55000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "allah-ada",
    name: "Allah Ada",
    price: 75000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
    category: "Novel",
  },
  {
    id: "marah",
    name: "Marah",
    price: 80000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHdffuF0FAAlYCe-rKqhibqxQZkLALDa-Q&s",
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
