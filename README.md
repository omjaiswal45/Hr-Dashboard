# HR Dashboard

A modern React-based HR dashboard for employee management with analytics, bookmarks, and dark mode support.

## Features

- **Employee Management**: View, search, and filter employees
- **Bookmarks**: Save and manage favorite employees
- **Analytics**: Department performance charts and metrics
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop and mobile devices
- **Advanced Search**: Search by name, email, or department
- **Data Visualization**: Charts using Recharts library
- **Modern UI**: Built with Tailwind CSS and Lucide React icons

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Recharts** - Chart library for data visualization
- **Context API** - State management
- **Custom Hooks** - Reusable logic

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hr-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── app/
│   └── App.js                 # Main app component
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── cards/                 # Card components
│   ├── filters/               # Search and filter components
│   ├── modals/                # Modal components
│   ├── charts/                # Chart components
│   └── tables/                # Table components
├── context/
│   └── AppContext.js          # Global state management
├── hooks/                     # Custom React hooks
├── layout/                    # Layout components
├── pages/                     # Page components
└── utils/                     # Utility functions
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Features Overview

### Dashboard
- View all employees in a card layout
- Search and filter functionality
- Add new employees
- Bookmark favorite employees

### Bookmarks
- View all bookmarked employees
- Quick actions for bookmarked employees

### Analytics
- Department performance charts
- Employee rating distribution
- Bookmark trends
- Key metrics overview

## API Integration

The app fetches employee data from the DummyJSON API with fallback to mock data if the API is unavailable.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License. 
