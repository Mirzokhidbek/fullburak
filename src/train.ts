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

  - Session Authentication:
      express-session + connect-mongodb-session (Cookie Store in MongoDB)
      req.session.member (Authentication state)
      checkAuthSession (/admin/check-me)
      logout (/admin/logout)

  - Product MVC & Middleware:
      Product Schema, Enum, Service Model & Controller
      verifyRestaurant Middleware (Access Control)
      res.locals.member Browser Local Variables
      makeUploader Multer Middleware for Product Images (/public/uploads/products)
*/
