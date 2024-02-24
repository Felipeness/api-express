# 🚀 Express Product API Server 🚀

This Express server is designed to manage products with CRUD operations in a simple product database.

## 🛠️ Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.

## 🌟 Features

- **List Products**: `GET /products` to retrieve all products.
- **Get Product by ID**: `GET /products/:id` to retrieve a specific product by its ID.
- **Create Product**: `POST /products` to add a new product.
- **Update Product**: `PUT /products/:id` to update an existing product's information.
- **Delete Product**: `DELETE /products/:id` to remove a product from the database.

## 📝 How to Use

1. Start the server with `node server.js`. The server will listen on port 3000.
2. Use any HTTP client (e.g., Postman, curl) to interact with the API.

## 💡 Middleware

- **Logging**: Logs a message each time a product route is accessed.
- **Error Handling**: Custom response for unhandled routes.

## 🔧 Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web application framework
- Custom in-memory database integration

## ✍️ Author

- [Felipeness](https://github.com/Felipeness)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

---

Made with ❤️ and JavaScript.
