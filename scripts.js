// 장바구니에 담을 항목들을 관리할 배열
let cart = [];
let totalPrice = 0;

// 장바구니에 상품 추가 함수
function addToCart(productName, productPrice) {
    // 이미 장바구니에 동일한 상품이 있는지 확인
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        // 동일한 상품이 있으면 수량만 증가시킴
        existingItem.quantity += 1;
        totalPrice += productPrice;  // 총 가격 업데이트
    } else {
        // 장바구니에 없는 상품이면 새로 추가
        cart.push({ name: productName, price: productPrice, quantity: 1 });
        totalPrice += productPrice;  // 총 가격 업데이트
    }

    // 장바구니 목록에 추가된 항목을 표시
    updateCartDisplay();
}
// 가격에 천 단위 구분 쉼표를 추가하는 함수
function formatPrice(price) {
    return price.toLocaleString();  // 가격에 쉼표 추가
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
        li.textContent = `${item.name} - ${formatPrice(item.price)}원   ${item.quantity}개 = ${formatPrice(item.price * item.quantity)}원`;
        totalPriceElement.textContent = `총 합계: ${formatPrice(totalPrice)}원`;

        cartItemsElement.appendChild(li);
        
    });

    // 총 합계 업데이트
    totalPriceElement.textContent = `총 합계: ${formatPrice(totalPrice)}원`;
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
/** 로그인 페이지  */
function goToLoginPage(){
    window.location.href = 'loginPage.html';
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 기본 제출 방지
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("모든 필드를 입력해주세요.");
      return;
    }
  
    // 간단한 검증 후 폼 제출
    console.log("로그인 정보:", { username, password });
    alert("로그인 성공!");
  });
  