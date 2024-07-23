<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrendyTees - Stylish T-Shirts</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 1rem 0;
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-links a {
            color: #ecf0f1;
            text-decoration: none;
            margin-left: 1rem;
        }

        .hero {
            background-image: url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #fff;
        }

        .hero-content h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .cta-button {
            background-color: #e74c3c;
            color: #fff;
            padding: 0.75rem 1.5rem;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .cta-button:hover {
            background-color: #c0392b;
        }

        .featured-products {
            max-width: 1200px;
            margin: 4rem auto;
            text-align: center;
        }

        .featured-products h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        .product-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .product-info {
            padding: 1rem;
        }

        .product-info h3 {
            margin-bottom: 0.5rem;
        }

        .product-info p {
            color: #e74c3c;
            font-weight: bold;
        }

        footer {
            background-color: #2c3e50;
            color: #ecf0f1;
            text-align: center;
            padding: 1rem 0;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">TrendyTees</div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Stylish T-Shirts for Every Occasion</h1>
            <a href="#products" class="cta-button">Shop Now</a>
        </div>
    </section>

    <section class="featured-products">
        <h2>Featured Products</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="T-Shirt 1">
                <div class="product-info">
                    <h3>Classic White Tee</h3>
                    <p>$19.99</p>
                </div>
            </div>
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="T-Shirt 2">
                <div class="product-info">
                    <h3>Vintage Print Tee</h3>
                    <p>$24.99</p>
                </div>
            </div>
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="T-Shirt 3">
                <div class="product-info">
                    <h3>Graphic Design Tee</h3>
                    <p>$29.99</p>
                </div>
            </div>
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="T-Shirt 4">
                <div class="product-info">
                    <h3>Striped Summer Tee</h3>
                    <p>$22.99</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 TrendyTees. All rights reserved.</p>
    </footer>
</body>
</html>