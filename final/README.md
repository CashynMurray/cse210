# Fly Fishing Adventures Website

A responsive website showcasing fly fishing spots, techniques, and local weather information.

## Features

- Responsive design for mobile, tablet, and desktop
- Dynamic fishing spots display with filtering
- Weather information integration
- Contact form with data display
- Modal dialogs for spot details
- Local storage for user preferences

## Setup

1. Clone the repository
2. Add your OpenWeatherMap API key in `js/script.js`:
   ```javascript
   const apiKey = 'dd195bc1cb6ce7685c4cddf634c19732'; 
   ```
3. Add fishing spot images to the `images` directory:
   - henrys-fork.jpg
   - south-fork.jpg
   - teton-river.jpg
   - big-lost.jpg
   - silver-creek.jpg

## File Structure

```
final/
├── css/
│   ├── normalize.css
│   ├── base.css
│   ├── medium.css
│   └── large.css
├── js/
│   ├── script.js
│   ├── fishing-spots.js
│   ├── fishing-spots-data.js
│   └── form-submitted.js
├── images/
│   ├── favicon.svg
│   └── [fishing spot images]
├── index.html
├── fishing-spots.html
├── contact.html
├── form-submitted.html
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Requirements

This project meets the following requirements:
- Three-page website with responsive design
- Dynamic content loading
- Form handling with data display
- Weather API integration
- Modal dialogs
- Local storage implementation
- ES Modules
- Error handling
- Lazy loading
- Semantic HTML
- Accessibility features 