/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

/* Body and Fonts */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  color: #333;
  line-height: 1.8;
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

header .logo a {
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
}

header nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}

header nav ul li {
  margin-left: 30px;
}

header nav ul li a {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

header nav ul li a:hover {
  color: #ff6f61;
}

/* Hero Section */
.hero {
  background: url('images/img7.jpg') center/cover no-repeat;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  padding: 0 20px;
}

.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-text {
  z-index: 2;
  padding: 0 20px;
  max-width: 600px;
}

.hero-text h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-text p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-button {
  padding: 15px 40px;
  background-color: #ff6f61;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #e65749;
  transform: translateY(-5px);
}

/* Signature Cocktails Section */
.cocktails {
  padding: 80px 40px;
  text-align: center;
  background-color: #f9f9f9;
}

.cocktails h2 {
  font-size: 3rem;
  margin-bottom: 50px;
  font-weight: 700;
}

.cocktail-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.cocktail-item {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.cocktail-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.cocktail-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* Assign images to cocktails */
.cocktail-item:nth-child(1) img { content: url('images/img1.jpg'); }
.cocktail-item:nth-child(2) img { content: url('images/img2.jpg'); }
.cocktail-item:nth-child(3) img { content: url('images/img3.jpg'); }
.cocktail-item:nth-child(4) img { content: url('images/img4.jpg'); }
.cocktail-item:nth-child(5) img { content: url('images/img5.jpg'); }
.cocktail-item:nth-child(6) img { content: url('images/img6.jpg'); }
