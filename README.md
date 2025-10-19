# Book Cart

Book Cart is a modern and responsive e-commerce web application for browsing and purchasing books. Built with React and Tailwind CSS, it offers a clean and intuitive user interface for a seamless shopping experience.

## Features

- **Browse Books:** Explore a wide variety of books with detailed information.
- **Shopping Cart:** Add and remove books from your cart, and view the total price.
- **Responsive Design:** Enjoy a seamless experience on any device, from desktops to mobile phones.
- **Modern UI:** A clean and intuitive user interface built with Tailwind CSS.

## Tech Stack

- **Frontend:** React, React Router
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Linting:** ESLint

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/Book-Cart.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/`

## Folder Structure

```
/
├── public/
│   └── ... # Public assets
├── src/
│   ├── assets/
│   │   └── ... # Images, icons, etc.
│   ├── components/
│   │   ├── AddToCart.jsx
│   │   ├── AuthorOfMonth.jsx
│   │   ├── BookCard.jsx
│   │   ├── BookGrid.jsx
│   │   ├── BooksCarousel.jsx
│   │   ├── Categories.jsx
│   │   ├── Hero.jsx
│   │   ├── LoveReact.jsx
│   │   ├── Navbar.jsx
│   │   ├── OffBanner.jsx
│   │   ├── PriceTag.jsx
│   │   └── QuantityField.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   └── Shop.jsx
│   ├── utils/
│   │   ├── getData.js
│   │   └── price.js
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```