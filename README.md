This is a mini-application called "Shopping App" for purchasing mobile devices.

- The application will have two main views:

  1. Main View - Product Listing
  2. Product Details

- Design implementation is open-ended but must follow the structure defined in the provided screenshots. A detailed proposal will be positively valued.

- The application will be a Single Page Application (SPA) with client-side routing, avoiding Multi-Page Application (MPA) or Server-Side Rendering (SSR) and React/Preact for application development.

- The project must include the following scripts for managing the application:

  1. START - Development mode
  2. BUILD - Production build
  3. TEST - Test launch
  4. LINT - Code linting

- The project should be hosted on an open-source code repository (GitHub/victor90braz) https://github.com/victor90braz/victor-braz-shopping-app.git with the solution to the problem. The code should be incrementally commitable to show progress.

**DESCRIPTION OF VIEWS**

**PLP - Product List Page**

- Page displaying the list of products.
- The page shows all items returned by the API request.
- Allows filtering content based on user-entered search criteria.
- Selecting a product will navigate to its details.
- A maximum of four items will be shown per row, adapting to different resolutions.

**PDP - Product Details Page**

- Divided into two columns:
  1. First column displays the product image component.
  2. Second column displays product details and actions.
- Includes a link to navigate back to the product list.

**DESCRIPTION OF COMPONENTS**

**HEADER**

- The application title or icon acts as a link to the main view.
- Shows breadcrumbs indicating the user's location and provides links for navigation.
- Displays the number of items added to the cart on the right side of the header.

**SEARCH**

- Displays an input field for user text input.
- Users can filter products based on entered text, comparing it with Brand and Model attributes.
- Real-time filtering triggers a search whenever the user changes search criteria.

**ITEM**

- Displays the following product information:
  - Image
  - Brand
  - Model
  - Price

**IMAGE OF PRODUCT**

- Displays the product image.

**DESCRIPTION OF PRODUCT**

- Displays details associated with the product, including attributes like:
  - Brand
  - Model
  - Price
  - CPU
  - RAM
  - Operating System
  - Screen Resolution
  - Battery
  - Cameras
  - Dimensions
  - Weight

**ACTIONS**

- Displays two types of selectors for adding products to the cart:
  - Storage
  - Colors
- Even if there's only one option, the selector should still be shown with default selection.
- An "Add" button allows users to add the selected product to the cart.
- Adding a product via the API requires sending:
  - Product ID
  - Selected color code
  - Selected storage code
- The response to adding a product includes the count of items in the cart, which should be displayed in the header of the application on any view.

**RESOURCES**

**Integration API**

- API integration is required for data management.
- The API domain is consistent for all endpoints: https://front-test-api.herokuapp.com/
- Endpoint definitions:
  - Get list of products
    - Path: GET /api/product
    - Response: Array of product objects
  - Get product details
    - Path: GET /api/product/:id
    - Response: Product details object
  - Add product to cart
    - Path: POST /api/cart
    - Body: Product data
    - Response: Cart item count
