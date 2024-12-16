// 장바구니에 담을 항목들을 관리할 배열
let cart = []; //장바구니 목록
let totalPrice = 0; //총가격
// 장바구니에 상품 추가 함수
function addToCart(productName, productPrice) {
    let productIndex = cart.findIndex(item => item.name === productName);
    // 상품을 장바구니에 추가
    if (productIndex === -1){
        cart.push({ name: productName, price: productPrice, quantity: 1 }); // 이름과 가격(딕셔너리형식으로 추가)
    } else {
        cart[productIndex].quantity++;
    }
    // 장바구니 목록에 추가된 항목을 표시
    updateCartDisplay();
}

// 장바구니 항목과 총 합계를 화면에 업데이트하는 함수
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');//id로 한개 선택

    // 장바구니 항목들 리셋
    cartItemsElement.innerHTML = '';
    totalPrice = 0;//총 가격 초기화

    // 장바구니 항목을 화면에 추가
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} ${item.quantity}개 
            <button onclick="changeQuantity('${item.name}', 'plus')">+</button>
            <button onclick="changeQuantity('${item.name}', 'minus')">-</button>
            (가격: ${item.price.toLocaleString()}원)
        `;
        cartItemsElement.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    // 총 합계 업데이트
    document.getElementById('total-price').textContent=`총 합계: ${totalPrice.toLocaleString()}원`;
}

function changeQuantity(productName, action) {
    let productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1){
        if (action === 'plus') {
            cart[productIndex].quantity++;
        } else if (action === 'minus'&&cart[productIndex].quantity >1){
            cart[productIndex].quantity--;
        }
        updateCartDisplay();
    }
}

// 결제 페이지로 이동하는 함수
function gotoPaymentPage() {
    if (cart.length === 0) {
        alert('장바구니에 상품이 없습니다. 상품을 담아주세요.');
        return;
    }

    // 결제 페이지로 이동 (가상의 페이지로 이동)
    window.location.href = '4.paymentPage.html';  // 실제 결제 페이지의 URL로 변경 가능

    // 결제 페이지에서 결제 완료 알람을 띄울 준비
    localStorage.setItem('totalPrice', totalPrice);
}


// ---------------------------상품 정렬--------------------------------
const products = [
    { name: '상품1', price: 20000, views: 120, image: 'https://via.placeholder.com/200' },
    { name: '상품2', price: 30000, views: 80, image: 'https://via.placeholder.com/200' },
    { name: '상품3', price: 15000, views: 200, image: 'https://via.placeholder.com/200' },
    { name: '상품4', price: 30000, views: 80, image: 'https://via.placeholder.com/200' },
    { name: '상품5', price: 15000, views: 200, image: 'https://via.placeholder.com/200' },
    { name: '상품6', price: 70000, views: 30, image: 'https://via.placeholder.com/200' },
    { name: '상품7', price: 15500, views: 2010, image: 'https://via.placeholder.com/200' },
    { name: '상품8', price: 30200, views: 280, image: 'https://via.placeholder.com/200' },
    { name: '상품9', price: 115000, views: 1200, image: 'https://via.placeholder.com/200' }
];


function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>가격: ${product.price.toLocaleString()}원</p>
            <p>조회수: ${product.views}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">장바구니에 담기</button>
        `;
        productList.appendChild(productDiv);
    });
}

function sortProducts() {
    const sortOption = document.getElementById('sort').value;
    let sortedProducts = [...products];
    if (sortOption === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'views-asc') {
        sortedProducts.sort((a, b) => a.views - b.views);
    } else if (sortOption === 'views-desc') {
        sortedProducts.sort((a, b) => b.views - a.views);
    }
    renderProducts(sortedProducts);
}
function gotoLoginPage() {
    window.location.href ="6.loginPage.html";
}
document.getElementById("toggle-menu").addEventListener("click", function() {
    var categories = document.getElementById("categories");
    var menuIcon = document.getElementById("menu-icon");

    // 카테고리의 보이기/숨기기
    categories.classList.toggle("show");

    // 이모티콘 변경
    if (categories.classList.contains("show")) {
        menuIcon.textContent = "*"; // 카테고리 표시 시 이모티콘 변경
    } else {
        menuIcon.textContent = "="; // 카테고리 숨길 때 이모티콘 원래대로
    }
});
