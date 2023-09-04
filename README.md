# My Product Cart web Application

This is a simple JavaScript web application that allows users to manage a list of products. Users can add new products, delete existing products, and view a list of products. The application uses Local Storage to persist the product data even after the page is refreshed or closed.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pasify/product-cart.git
   ```

2. Open the index.html file in your web browser.
3. Run live server from the index.html file or your terminal

## FEATURES

- Add new products with a name, price, and year.
- Delete products from the list.
- View a list of all products.

## Code Overview

The main code files in this project are:

- index.html: The HTML structure of the web page.
- script.js: The JavaScript code that powers the application.
- styles.css: The CSS file for styling the web page.

## How It Works

- When you enter the product details and click the "Save" button, the product is added to the list and stored in Local Storage.
- Clicking the "Delete" button next to a product will remove it from the list and update the data in Local Storage.
- The product list is displayed on the page using JavaScript by reading data from Local Storage.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to your forked repository: git push origin feature-name.
5. Create a pull request.
