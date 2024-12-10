// 장바구니에 담을 항목들을 관리할 배열
let cart = [];
let totalPrice = 0;

// 장바구니에 상품 추가 함수
function addToCart(productName, productPrice) {
    // 상품을 장바구니에 추가
    cart.push({ name: productName, price: productPrice });

    // 총 합계 계산
    totalPrice += productPrice;

    // 장바구니 목록에 추가된 항목을 표시
    updateCartDisplay();
}

// 장바구니 항목과 총 합계를 화면에 업데이트하는 함수
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // 장바구니 항목들 리셋
    cartItemsElement.innerHTML = '';

    // 장바구니 항목을 화면에 추가
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}원`;
        cartItemsElement.appendChild(li);
    });

    // 총 합계 업데이트
    totalPriceElement.textContent = `총 합계: ${totalPrice}원`;
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
