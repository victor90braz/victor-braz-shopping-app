# Shopping App - Mini Application for Purchasing Mobile Devices

This is a mini-application called "Shopping App" for purchasing mobile devices.

Website: [https://victor-braz-shopping-app.netlify.app/](https://victor-braz-shopping-app.netlify.app/)

## Views

The application has two main views:

1. Main View - Product Listing
2. Product Details

## Design Implementation

- Design implementation is open-ended but must follow the structure defined in the provided screenshots. A detailed proposal will be positively valued.

## Technical Details

- The application is a Single Page Application (SPA) with client-side routing.
- React/Preact is used for application development.

## Environment Variables

- `VITE_SHOPPING_APP_API_BASE_URL`: API base URL for data management.
  Example: `https://itx-frontend-test.onrender.com/api/`

## Scripts

The project includes the following scripts for managing the application:

1. `npm start`: Start in development mode
2. `npm run build`: Build for production
3. `npm test`: Run tests
4. `npm run lint`: Perform code linting

## Repository

The project is hosted on GitHub: [victor-braz-shopping-app](https://github.com/victor90braz/victor-braz-shopping-app.git)

## Product List Page (PLP)

- Displays a list of products.
- Allows filtering content based on user-entered search criteria.
- Selecting a product navigates to its details.
- Adapts to different resolutions with a maximum of four items per row.

## Product Details Page (PDP)

- Divided into two columns:
  1. Displays the product image component.
  2. Displays product details and actions.

## Components

### Header

- Acts as a link to the main view.
- Shows breadcrumbs and provides links for navigation.
- Displays the number of items in the cart.

### Search

- Allows users to filter products based on entered text.
- Real-time filtering updates results.

### Item

- Displays product information: Image, Brand, Model, Price.

### Image of Product

- Displays the product image.

### Description of Product

- Displays detailed product attributes.

### Actions

- Allows users to add products to the cart.
- Requires sending product ID, color code, and storage code via the API.

## Resources

### Integration API

- API domain: [https://front-test-api.herokuapp.com/](https://front-test-api.herokuapp.com/)
- Endpoints:
  - Get list of products: `GET /api/product`
  - Get product details: `GET /api/product/:id`
  - Add product to cart: `POST /api/cart`
