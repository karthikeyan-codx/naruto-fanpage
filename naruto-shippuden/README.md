# Naruto Shippuden Details Website

A comprehensive multi-page website displaying detailed information about Naruto Shippuden anime series with deep content exploration.

## Features

### Home Page (index.html)
- **Hero Section**: Large banner with anime title and key statistics
- **Synopsis**: Full description of the anime
- **Quick Statistics**: Score, rankings, popularity, and member counts
- **Key Information**: Episodes, status, studios, genres, and more
- **Featured Characters**: Preview of main characters (6 characters)
- **Similar Anime**: Recommendations based on Naruto Shippuden

### Details Page (details.html)
- **Comprehensive Information**: All anime details and metadata
- **Background**: Additional background information
- **Statistics**: Detailed statistics and rankings
- **Production Staff**: Directors, producers, and key staff members
- **Reviews**: User reviews with pagination support

### Characters Page (characters.html)
- **Complete Character List**: All characters from the series
- **Filtering**: Filter by role (Main/Supporting)
- **Sorting**: Sort by popularity, name, or role
- **Character Details**: Images, names, roles, and voice actors
- **Character Images**: High-quality character images

### Episodes Page (episodes.html)
- **All 500 Episodes**: Complete episode list
- **Search Functionality**: Search episodes by title
- **Sorting Options**: Sort by episode number, title, or air date
- **Pagination**: Navigate through episodes efficiently
- **Episode Details**: Episode numbers, titles, and air dates

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Naruto-themed colors (orange and blue)
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **Jikan API**: MyAnimeList API for anime data

## API Information

This project uses the [Jikan API](https://jikan.moe/) (v4) to fetch anime data:
- Base URL: `https://api.jikan.moe/v4`
- Naruto Shippuden ID: `1735`
- Rate Limit: 3 requests per second

## Project Structure

```
naruto-shippuden/
├── index.html          # Home/Overview page
├── details.html        # Comprehensive details page
├── characters.html     # Characters listing page
├── episodes.html       # Episodes listing page
├── styles/
│   └── main.css        # All styling (navigation, pages, components)
├── scripts/
│   ├── api.js          # API integration (expanded with more endpoints)
│   ├── ui.js           # UI rendering functions
│   └── navigation.js   # Navigation component
└── README.md           # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. The page will automatically fetch and display Naruto Shippuden data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features in Detail

### Navigation
- Sticky navigation bar at the top
- Active page highlighting
- Responsive mobile menu
- Smooth transitions between pages

### Home Page Features
- Hero section with dynamic background
- Quick statistics overview
- Featured characters preview
- Similar anime recommendations
- Quick access buttons to other pages

### Details Page Features
- Complete synopsis and background information
- Comprehensive information cards
- Production staff with roles
- User reviews with pagination
- Detailed statistics

### Characters Page Features
- Complete character roster
- Role-based filtering (Main/Supporting)
- Multiple sorting options
- Character images and voice actor information
- Responsive grid layout

### Episodes Page Features
- All 500 episodes listed
- Search functionality
- Multiple sorting options
- Pagination for easy navigation
- Episode metadata (numbers, titles, dates)

## Color Scheme

- **Primary Orange**: #FF6600 (Naruto's signature color)
- **Secondary Blue**: #0066CC (Konoha theme)
- **Dark Background**: #1a1a1a
- **Card Background**: #252525

## Responsive Design

The page is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## License

This project is for educational purposes. Naruto Shippuden is owned by Masashi Kishimoto and Studio Pierrot.
