# AI Chatbot Interface

A modern, responsive chatbot user interface built with HTML and CSS.

## Features

- **Modern Design** - Clean interface with purple gradient theme
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Sidebar Navigation** - Quick access to chat history and settings
- **Welcome Screen** - Friendly greeting with centered welcome message
- **Text Input** - Fixed input box at the bottom for user prompts
- **Smooth Animations** - Polished hover effects and transitions

## Project Structure

```
chat-bot/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
└── README.md          # This file
```

## Components

### Navbar
- Brand name and logo
- Navigation links (Chat, History, Settings)
- User avatar

### Sidebar
- New Chat button
- Recent chats list
- Quick links (Settings, Documentation, Help)

### Main Content
- Welcome icon and message
- Centered greeting text
- Text input area with send button

### Footer
- Copyright information
- Footer links (Privacy Policy, Terms of Service, Contact)

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
The main color scheme uses a purple gradient. To change colors, modify these CSS variables in `style.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Layout
- Sidebar width: `280px` (line 84 in style.css)
- Input max-width: `800px` (line 244 in style.css)

## Future Enhancements

- Add JavaScript functionality for chat interactions
- Implement message history storage
- Add typing indicators
- Include file upload functionality
- Dark mode toggle
- Multi-language support

## License

This project is open source and available for personal and commercial use.

## Author

Created as a chatbot interface template.

---

**Note:** This is a static HTML/CSS template. To make it functional, you'll need to add JavaScript and connect it to a backend API or chatbot service.
