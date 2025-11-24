
# Elanco Tick Tracker

## Description

Elanco Tick Tracker is a web application for reporting and visualizing tick sightings across the UK. Users can submit new tick sightings, view them on an interactive map, and access educational resources about tick prevention and species identification.

**Key Features:**
- Submit tick sightings with city, species, and optional image upload
- Interactive map with city-based markers and filters
- Educational panels for tick prevention and species guide
- Responsive, modern UI using Material-UI (MUI)

---

## Installation and Setup

### Prerequisites
- OS: macOS, Windows, or Linux
- Node.js (v18 or newer recommended)
- npm (v9 or newer)

### Clone the Repository
```bash
git clone https://github.com/jaymckerracher/tick-sightings.git
cd tick-sightings
```

### Install Dependencies
```bash
npm install
```

### Environment Variables
Make sure you have a `.env` file with relevant Supabase credentials:
```
VITE_SUPABASE_URL=supabase_url
VITE_SUPABASE_ANON_KEY=supabase_anon_key
```

### Run the Project
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or as indicated in the terminal).

---

## Usage

1. **Submit a Sighting:**
	- Click "Report Tick Sighting" and fill in the city, species, and (optionally) upload an image.
	- Submit the form to add your sighting to the map.
2. **View Sightings:**
	- Explore the interactive map to see all reported sightings.
	- Click on markers for more details.
3. **Learn More:**
	- Open the side panels for tick prevention tips and species guides.

---

## Project Structure & Technologies

```
src/
  components/      # Reusable UI components (Map, Panels, Cards, etc.)
  pages/           # Main app pages (Report, TickSightings)
  utils/           # Utility functions (API, data formatting)
  assets/          # Images and static assets
  supabase.js      # Supabase client setup
public/            # Static files
```

**Key Technologies:**
- React 19
- Vite
- Material-UI (MUI)
- Supabase (database & storage)
- Leaflet (maps)
- Axios

---

## Known Issues / Limitations

- Only UK cities are currently supported
- No authentication (all submissions are anonymous)
- Some features may not work if Supabase credentials are missing or invalid
- Currently a lack of error handling for things like submitting a sighting report

**Planned Improvements:**
- User authentication
- More advanced filtering and search
- Mobile UI enhancements

---

## Contact

**Author:** Jay McKerracher  
- Email: [jaymckerracher@gmail.com](mailto:jaymckerracher@gmail.com)
- GitHub: [jaymckerracher](https://github.com/jaymckerracher)