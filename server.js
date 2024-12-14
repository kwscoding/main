/**cmd창에서  
 * mkdir signup-server
cd signup-server
npm init -y
npm install express body-parser cors
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 가상 데이터베이스 (실제로는 DB를 사용해야 함)
let users = [];

// 회원 가입 엔드포인트
app.post("/api/signup", (req, res) => {
    const { username, email, password } = req.body;

    // 데이터 검증
    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "모든 필드를 입력하세요." });
    }

    // 이미 등록된 사용자 확인
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(400).json({ success: false, message: "이미 등록된 이메일입니다." });
    }

    // 사용자 추가
    users.push({ username, email, password });
    console.log("현재 사용자 목록:", users);

    res.status(201).json({ success: true, message: "회원 가입 성공!" });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
