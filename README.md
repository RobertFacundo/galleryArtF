# ArtGallery - FrontEnd 🖼️ 

🔗 **Live Demo:**  https://gallery-art-f.vercel.app/

Welcome to the ArtGallery, an interactive web application designed to immerse you in the world of art. Explore a curated collection of artworks, test your knowledge with engaging quizzes, earn virtual coins, and curate your very own personal art gallery. This application provides a seamless and rewarding experience for art enthusiasts and casual browsers alike.

---

### 🚀 Tech Stack

This project is built using modern web technologies to deliver a dynamic and responsive user experience:

- React: A powerful JavaScript library for building user interfaces.

- React Router: For declarative routing, enabling seamless navigation between different views.

- Reusable Components: A modular architecture built with functional components and React Hooks for maintainability and scalability.

- Axios: A promise-based HTTP client for making API requests to the backend.

- Local Storage: Utilized for persistent storage of user authentication tokens.

- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs with responsive and consistent styling.

- FontAwesome: For scalable vector icons, enhancing the visual appeal of the interface.

- React Masonry (Implicit): While not explicitly used in the provided code snippets, the mention of "display of cards" and "gallery" suggests a masonry-like layout could be used for an aesthetically pleasing grid of artworks. (If you're using a specific Masonry library, you can name it here).

### ✨ Key Features

The ArtGallery application offers a rich set of features to engage users:

- Authentication System: Secure user login and registration to personalize the experience.

- Art Card Display: Browse a beautiful collection of artworks presented as interactive cards.

- Interactive Quiz: An automatically generated quiz where users can test their knowledge about art. Correct answers are rewarded with virtual coins.

- Coin Economy: Earn and accumulate virtual coins by successfully answering quiz questions.

- User Profile & Personal Gallery: A dedicated profile view where users can see their accumulated coins and a personal gallery showcasing the artworks they have "bought" or collected within the app.

### 📁 Project Structure

```bash
src/                                      # Root directory for all source code
├── App.css                               # Global CSS styles for the application (can be for basic resets or specific overrides)
├── App.jsx                               # Main application component, typically handles routing and global layout
├── index.css                             # Main CSS file, often used for Tailwind imports and base styles
├── main.jsx                              # Entry point of the React application (e.g., ReactDOM.createRoot().render())
│
├── assets                                # Contains static assets like images, icons, fonts
│   └── react.svg                         # Example asset, likely the React logo
│
├── components                            # Reusable UI components used across different views
│   ├── ArtCard.jsx                       # Displays individual artwork details
│   ├── CoinsDisplay.jsx                  # Shows the user's current coin balance
│   ├── Footer.jsx                        # Application-wide footer component
│   ├── GalleryDisplay.jsx                # Component for displaying a general collection of artworks (e.g., home page)
│   ├── Loader.jsx                        # Reusable loading spinner component
│   ├── NavBar.jsx                        # Application-wide navigation bar
│   ├── PersonalGallery.jsx               # Displays the user's collected artworks
│   ├── QuizDisplay.jsx                   # Renders the quiz questions and options
│   └── SignUpLogin.jsx                   # Component for user sign-up and login forms
│
├── config                                # Configuration files for the application
│   └── axiosConfig.js                    # Axios instance with base URL and interceptors for API calls
│
├── contexts                              # React Context API providers for global state management
│   └── AuthContext.jsx                   # Provides authentication state (user, token, auth status) to the app
│
├── hooks                                 # Custom React Hooks for encapsulating reusable logic
│   ├── useAddArtwork.js                  # Hook for logic related to adding artworks (e.g., to personal gallery)
│   ├── useArtworksCall.js                # Hook for fetching and managing artwork data
│   ├── useAuthentication.js              # Hook for authentication logic (login, signup, logout)
│   └── useQuiz.js                        # Hook for quiz game logic (generating questions, submitting answers)
│
├── services                              # API service modules for interacting with the backend
│   ├── artworkService.js                 # Functions for fetching and managing artwork data via API
│   ├── authServices.js                   # Functions for user authentication API calls
│   └── quizService.js                    # Functions for quiz-related API calls
│
├── utils                                 # Utility functions or helpers (e.g., formatters, validators)
└── views                                 # Top-level components representing distinct pages/views of the application
    ├── Authentication.jsx                # The main authentication page, likely wrapping SignUpLogin
    ├── Home.jsx                          # The main landing page or artwork browsing page
    ├── Profile.jsx                       # The user's profile page, likely rendering PersonalGallery
    └── Quiz.jsx                          # The main quiz game page, likely rendering QuizDisplay
```


---

### 📬 Contact
Created by Facundo Robert – GitHub

Feel free to reach out for collaboration or feedback!

---

