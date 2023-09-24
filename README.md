# next-shopping

[Deployed version](https://next-shopping-rr2f.vercel.app/)

**Project Description:**

This project is built using Next.js and utilizes the Tailwind CSS framework. Next.js is a popular React framework for building server-rendered applications, while Tailwind CSS is a utility-first CSS framework that simplifies the process of designing and styling web applications.

**Key Features:**

1. **Next.js**: Next.js is used as the primary framework for building the web application. It offers server-side rendering (SSR), client-side rendering (CSR), and static site generation (SSG) capabilities, providing improved performance and SEO optimization.

2. **Tailwind CSS**: Tailwind CSS is the chosen CSS framework for this project. It follows a utility-first approach, making it easy to create responsive and visually appealing user interfaces with minimal custom CSS.

3. **API Integration**: The project integrates with external APIs, such as the "fakestoreapi.com," to fetch and display product categories and related information dynamically.

4. **Dynamic Routing**: Next.js dynamic routing is implemented to create pages for different product categories. The category names are processed and displayed correctly in the URL.

5. **Suspense**: React's Suspense is utilized to provide a smooth loading experience by displaying a loading component while fetching and loading data from external sources.

**Purpose:**

The purpose of this project is to create a web application that can display products from various categories. It leverages Next.js for efficient rendering and Tailwind CSS for a visually pleasing design. By integrating with external APIs, it provides up-to-date product information.

**Technologies Used:**

- Next.js
- React
- Tailwind CSS
- JavaScript
- External APIs

**Future Enhancements:**

Future enhancements to this project could include adding user authentication, implementing a shopping cart functionality (back-end), and improving the overall user experience.

**Known Issues:** (only in deployed version, localhost works correctly0

- **Issue 1**:  "Fetching categories with spaces does not work as expected. Multiple methods (split, replace, encode, decode) have been attempted, but the issue persists."
