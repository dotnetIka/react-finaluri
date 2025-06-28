# Countries SPA - React Application

A responsive Single Page Application (SPA) built with React that displays information about countries using the REST Countries API.

## 🌟 Features

### ✅ Core Requirements
- **3 Pages with React Router:**
  - Home Page - Welcome and introduction
  - Country List Page - Displays all countries with search functionality
  - Country Details Page - Shows comprehensive country information

- **React Functional Components with Hooks:**
  - Custom `useFetchCountries` hook for API calls
  - Custom `useLocalStorage` hook for persistent storage
  - React Router for navigation
  - Context API for theme and language management

- **API Integration:**
  - Fetches data from [REST Countries API](https://restcountries.com/)
  - Loading and error states
  - Responsive data handling

- **LocalStorage Integration:**
  - Theme preference (Dark/Light) persistence
  - Language preference (English/Georgian) persistence

- **Responsive Design:**
  - Mobile-first approach
  - Supports all Chrome DevTools viewports
  - SCSS for advanced styling

### 🌟 Bonus Features
- **🌗 Dark/Light Theme Toggle** - Persistent theme switching
- **🌐 Multilingual Support** - English and Georgian language support
- **🔎 Search/Filter** - Real-time country search functionality
- **🔧 SCSS Preprocessor** - Advanced styling with variables and mixins
- **📱 Mobile Responsive** - Optimized for all screen sizes

## 🚀 Technologies Used

- **React 18** - Functional components and hooks
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **SCSS** - Advanced CSS preprocessing
- **LocalStorage** - Client-side data persistence
- **REST Countries API** - Country data source

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-finaluri
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   └── Navbar.js              # Navigation component
├── contexts/
│   ├── ThemeContext.js        # Theme management
│   └── LanguageContext.js     # Language management
├── hooks/
│   ├── useFetchCountries.js   # Custom hook for API calls
│   └── useLocalStorage.js     # Custom hook for localStorage
├── pages/
│   ├── Home.js               # Home page
│   ├── CountryList.js        # Countries list page
│   └── CountryDetails.js     # Country details page
├── styles/
│   ├── App.scss              # Global styles
│   ├── Navbar.scss           # Navigation styles
│   ├── Home.scss             # Home page styles
│   ├── CountryList.scss      # Country list styles
│   └── CountryDetails.scss   # Country details styles
├── App.js                    # Main app component
└── index.js                  # Entry point
```

## 🎯 Usage

### Navigation
- **Home** - Welcome page with app introduction
- **Countries** - Browse all countries with search functionality
- **Theme Toggle** - Switch between light and dark themes
- **Language Toggle** - Switch between English and Georgian

### Country List Features
- **Search** - Real-time filtering by country name
- **Grid Layout** - Responsive card layout
- **Country Cards** - Display flag, name, population, region, and capital
- **Click to View Details** - Navigate to detailed country information

### Country Details Features
- **Comprehensive Information** - Official name, common name, native names
- **Demographics** - Population, region, capital
- **Additional Data** - Currencies, languages
- **Native Names Toggle** - Show/hide native language names
- **Back Navigation** - Return to country list

## 🔧 Custom Hooks

### useFetchCountries
```javascript
const { countries, loading, error } = useFetchCountries('all?fields=name,flags');
```

### useLocalStorage
```javascript
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

## 🎨 Styling

The application uses SCSS with CSS custom properties for theming:

- **Light Theme** - Clean, modern design with light colors
- **Dark Theme** - Dark background with high contrast
- **Responsive Design** - Mobile-first approach with breakpoints
- **Smooth Transitions** - CSS transitions for better UX

## 📱 Responsive Breakpoints

- **Desktop** - 1024px and above
- **Tablet** - 768px to 1023px
- **Mobile** - 480px to 767px
- **Small Mobile** - Below 480px

## 🌐 API Endpoints Used

- `https://restcountries.com/v3.1/all` - Get all countries
- `https://restcountries.com/v3.1/name/{name}` - Get specific country
- `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital` - Get specific fields

## 🚀 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository. 