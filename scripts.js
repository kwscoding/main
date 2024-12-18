// 장바구니에 담을 항목들을 관리할 배열
let cart = []; //장바구니 목록
let totalPrice = 0;
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
    const cartItemsElement = document.getElementById('cart-items');

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
    window.location.href = 'paymentPage.html';  // 실제 결제 페이지의 URL로 변경 가능

    // 결제 페이지에서 결제 완료 알람을 띄울 준비
    localStorage.setItem('totalPrice', totalPrice);
}