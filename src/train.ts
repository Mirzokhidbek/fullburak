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
      1. Traditional Request (BSSR): Form submit, full page reload / redirect.
      2. REST API Request (SPA): Axios/fetch, JSON data, dynamic DOM update.

  - Validation Turlari:
      1. Frontend Validation (Client-side):
         - jQuery yoki Vanilla JS orqali form yuborilishidan oldin ma'lumotlar to'liqligi va formatini tekshirish.
         - Serverga ortiqcha so'rov ketishini oldini oladi va foydalanuvchiga tezkor xabar beradi.
      2. Backend Validation (Server-side):
         - Controller va Service modellarida biznes mantiqni tekshirish (masalan, faqat 1 ta restoran mavjud bo'lishi).
      3. Database Validation (Schema-level):
         - Mongoose Schema `required`, `enum`, `unique: true` indekslari orqali ma'lumotlar yaxlitligini ta'minlash.

  - Image Preloading:
      - `FileReader` JavaScript API orqali foydalanuvchi fayl tanlagan zahoti rasmni serverga yuklamasdan turib brauzerda ko'rsatish (`readAsDataURL`).
*/
