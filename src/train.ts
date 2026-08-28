/* Project Standards:
  - Logging standards
  - Naming standards
      function, method, variable => CAMEL
      class => PASCAL
      folder, file => KEBAB-CASE / CAMEL
      css => KEBAB-CASE

  - WebServer & Authentication Process:
      VPS (Virtual Private Server) vs VPC (Virtual Private Cloud)
      Authentication (Identity verification) vs Authorization (Permission check)
      Session-Based Authentication (BSSR / EJS Cookies)
      Token-Based Authentication (JWT / SPA React)
      Browser Storages: Cookie, LocalStorage, SessionStorage

  - Request Turlari:
      1. Traditional Request (BSSR):
         - HTML <form action="..." method="POST"> or URL link GET
         - Server HTML sahifani (EJS) to'liq render qiladi yoki redirect beradi.
         - Data `application/x-www-form-urlencoded` yoki `multipart/form-data` ko'rinishida uzatiladi.
      2. REST API Request (SPA):
         - Axios, Fetch, AJAX orqali asinxron yuboriladi.
         - JSON formatida javob qaytaradi (`res.json()`), butun sahifa qayta yuklanmaydi.

  - Admin Login & Signup Jarayoni:
      1. Admin kiritgan `memberNick` bo'yicha bazadan qidiriladi (`findOne`).
      2. `bcrypt.compare` orqali kiritilgan parol bazadagi hash bilan solishtiriladi.
      3. Ma'lumot to'g'ri bo'lsa, `req.session.member` ga yoziladi va MongoDB `sessions` collectionga saqlanadi (`connect-mongodb-session`).
      4. Brauzerga `connect.sid` shifrlangan cookie yuboriladi.
      5. Muvaffaqiyatli kirishdan so'ng `/admin/product/all` sahifasiga yo'naltiriladi (`res.redirect`).

  - Admin Logout Jarayoni:
      1. Foydalanuvchi `/admin/logout` linkini bosadi.
      2. `req.session.destroy(...)` orqali MongoDB-dagi sessiya o'chiriladi.
      3. Cookie bekor qilinadi va foydalanuvchi `/admin` bosh sahifasiga qaytariladi.
*/
