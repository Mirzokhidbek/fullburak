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

  - React & Single Page Application (SPA):
      1. Virtual DOM & Reconciliation (Diffing algorithm)
      2. Material UI (MUI): `ThemeProvider`, `createTheme`, Custom palette & typography.
      3. React Router DOM: `<BrowserRouter>`, `<Routes>`, `<Route>`, `<NavLink>`, `useNavigate`, `useLocation`.
      4. Header & Navbar Architecture (Dars 59-60):
         - `NavbarHome`: Asosiy landing page uchun transparent/hero fonli navbar.
         - `NavbarOther`: Ichki sahifalar (`/products`, `/orders`, `/user`, `/help`) uchun to'q fonli va sticky navbar.
         - `Navbar`: Dinamik ravishda `location.pathname === "/"` bo'yicha tegishli navbarni tanlab render qiladi.
         - Cart Badge: Savatdagi mahsulotlar soni indikatori.
         - User Auth Menu: Avatar dropdown orqali Profile, My Orders va Logout boshqaruvi.
         - Mobile Drawer: Mobil ekranlar uchun yon tomondan chiquvchi qulay menyu.
      5. Luxury Footer Architecture:
         - Brand gastronomiya tavsifi va ijtimoiy tarmoqlar (Instagram, Telegram, YouTube, Facebook).
         - Restoran menyu toifalari va buyurtma kuzatish havolalari.
         - Kontakt ma'lumotlari, manzil va ish vaqti.
         - VIP Club Newsletter obuna formasi va mualliflik huquqi (Copyright).
*/
