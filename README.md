# 登入功能簡易版 (Account Login)

使用 Node.js + Express 打造的登入功能，可使用測試帳號測試登入功能。

## 環境建置與需求 (Prerequisites)

* [Node.js](https://nodejs.org/)
* [Express ^4.17.1](https://expressjs.com)
* [Express-Handlebars ^3.1.0](https://www.npmjs.com/package/express-handlebars)
* [Body-Parser ^1.19.0](https://www.npmjs.com/package/body-parser)

## 安裝與執行步驟 (Installing and execution)

1.開啟終端機(Terminal)，clone到本機專案位置:

```
git clone https://github.com/bluesmy/account_login.git
```

2.切換至專案資料夾

```
cd account_login
```

3.安裝套件
```
npm install  //自動安裝package.json內套件
```

4.啟動伺服器，並執行專案

```
npm run dev
```

終端顯示 `Express is listening on http://localhost:3000` 即成功啟動伺服器

```
Ctrl + C *2  //連按兩下Ctrl + C關閉伺服器
```

## 功能描述 (Features)

- 讓使用者輸入帳號及密碼
- 如果帳號或密碼輸入錯誤，介面會顯示 "Username/Password 錯誤"
- 如果帳號及密碼輸入正確，會導向使用者的 welcome page，並顯示登出按鈕

## 測試帳號＆密碼 (Test Accounts & Passwords)

| First Name | Email               | Password         |
| ---------- | ------------------- | ---------------- |
| Tony       | tony@stark.com      | iamironman       |
| Steve      | captain@hotmail.com | icandothisallday |
| Peter      | peter@parker.com    | enajyram         |
| Natasha    | natasha@gamil.com   | *parol#@$!       |
| Nick       | nick@shield.com     | password         |

## 專案畫面 (Screenshot)

![首頁-以登入失敗為例](https://github.com/bluesmy/account_login/blob/master/public/img/index.png)
![登入成功畫面](https://github.com/bluesmy/account_login/blob/master/public/img/login_success.png)

## 專案使用工具 (Built With)

* [Visual Studio Code](https://code.visualstudio.com/) - The integrated development environment used
* [Express](https://expressjs.com) - The web framework used
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - The template engine used
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before handlers

## 專案開發人員 (Contributor)

* **Sheri Su** - [bluesmy](https://github.com/bluesmy)
