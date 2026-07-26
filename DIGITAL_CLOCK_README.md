# Digital Clock - Multi-Timezone Display

**Real-time clock displaying current time across multiple time zones.**

Digital Clock is a modern, elegant web application that displays the current time in different time zones around the world. Built with React, Vite, and Tailwind CSS.

## 🎯 Core Features

- **Real-time Clock Display** — Live updates every second
- **Multiple Time Zones** — View time in 24+ major cities
- **Add/Remove Zones** — Customize your time zone list
- **12/24 Hour Format** — Toggle between display formats
- **Analog & Digital** — Both clock display types
- **Current Location** — Auto-detect your timezone
- **Search Zones** — Quick search for any city/timezone
- **Favorite Zones** — Save frequently used timezones
- **UTC Display** — Show UTC offset for each zone
- **Responsive Design** — Works on all devices
- **Beautiful UI** — Modern, minimalist design
- **Smooth Animations** — Animated clock hands and transitions

## 🎨 Brand Identity

- **Primary Color:** Deep Navy (#1E293B)
- **Secondary Color:** Accent Purple (#A855F7)
- **Highlight Color:** Electric Cyan (#06B6D4)
- **Background:** Dark Gradient (Navy to Black)
- **Vibe:** Modern, minimal, elegant, time-focused

## 🛠 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **Time Libraries:** Day.js or date-fns
- **Icons:** Lucide React
- **Styling:** Tailwind CSS
- **Deployment:** Vercel/Netlify

## 📁 Project Structure

```
digital-clock/
├── src/
│   ├── components/
│   │   ├── Clock.jsx              # Main clock component
│   │   ├── AnalogClock.jsx        # Analog clock display
│   │   ├── DigitalClock.jsx       # Digital time display
│   │   ├── TimeZoneSelector.jsx   # Add/remove timezones
│   │   ├── TimeZoneCard.jsx       # Individual timezone card
│   │   ├── SearchTimeZone.jsx     # Search functionality
│   │   ├── Header.jsx             # Navigation header
│   │   └── Settings.jsx           # User settings panel
│   ├── context/
│   │   └── ClockContext.jsx       # Global state management
│   ├── utils/
│   │   ├── timezones.js           # Timezone data
│   │   └── timeUtils.js           # Time calculation helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .env.example
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/digital-clock.git
   cd digital-clock
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🌍 Supported Time Zones

- **Americas:** New York, Los Angeles, Toronto, Mexico City, São Paulo
- **Europe:** London, Paris, Berlin, Amsterdam, Moscow
- **Asia:** Tokyo, Shanghai, Hong Kong, Singapore, Dubai, Bangkok
- **India:** India Standard Time (IST)
- **Australia:** Sydney, Melbourne
- **Pacific:** Auckland, Fiji
- **Africa:** Cairo, Johannesburg
- **UTC:** Coordinated Universal Time

## 🎛 Features

### Clock Display
- **Digital Format:** HH:MM:SS AM/PM or 24-hour
- **Analog Clock:** Visual clock face with moving hands
- **Date Display:** Current date with day of week
- **UTC Offset:** Show +/- hours from UTC

### Time Zone Management
- **Add Zones:** Select from dropdown of 400+ zones
- **Remove Zones:** Quick delete button on each card
- **Reorder:** Drag-and-drop to reorder zones
- **Favorites:** Pin important zones to top

### Settings
- **Display Format:** 12-hour or 24-hour
- **Clock Type:** Digital or Analog
- **Theme:** Light or Dark mode
- **Update Interval:** Real-time (1 second updates)

## 📊 Component Architecture

### Clock Component
```jsx
<Clock>
  ├── Header (Title + Settings)
  ├── SearchTimeZone (Search Bar)
  ├── TimeZoneGrid
  │   ├── TimeZoneCard
  │   │   ├── DigitalClock
  │   │   ├── AnalogClock
  │   │   ├── City Name
  │   │   └── UTC Offset
  │   └── TimeZoneCard (repeated)
  └── TimeZoneSelector (Add New)
```

## 🔄 State Management

Using React Context for:
- Selected time zones
- Display format (12/24 hour)
- Clock type (digital/analog)
- Current time (updates every second)
- Search results
- Favorite zones

## ⏰ Time Calculation

```javascript
const getTimeInZone = (timezone) => {
  const now = new Date();
  const utcTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  return tzTime;
};
```

## 🎨 UI Components

### TimeZoneCard
- Displays city name
- Shows current time (digital or analog)
- Displays date
- Shows UTC offset
- Remove button

### AnalogClock
- Hour hand (shorter, thicker)
- Minute hand (longer, thinner)
- Second hand (thin, red)
- 12 hour markers
- Smooth rotation animation

### DigitalClock
- Large time display
- AM/PM indicator
- Smooth number transitions
- Selectable 12/24 format

## 📱 Responsive Design

- **Mobile:** 1 column layout
- **Tablet:** 2 column layout
- **Desktop:** 3-4 column layout
- **Large Screens:** 5+ column layout

## 🎯 Features to Implement

- [ ] Geolocation detection
- [ ] Alarm functionality
- [ ] Timer and stopwatch
- [ ] World map with time zones
- [ ] Sunrise/Sunset times
- [ ] Business hours indicator
- [ ] Meeting time suggester
- [ ] Time zone diff calculator
- [ ] Calendar view
- [ ] Historical timezone data

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📋 Environment Variables

```env
VITE_DEFAULT_TIMEZONE=America/New_York
VITE_UPDATE_INTERVAL=1000
```

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 💬 Support

For issues or questions:
- Open a GitHub issue
- Check documentation
- Email support

---

**Built with ⏰ by Clock Team**