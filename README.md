# The Discerning Traveler

A luxury travel concierge app with weather-optimized planning, local cuisine guides, and authentic cultural traditions.

## Features

- **Weather Intelligence** — Month-by-month climate data with honest assessments
- **Flight Pricing Tiers** — Shoulder, peak, and off-season estimates
- **Local Cuisine** — Seasonal specialties by quarter (not tourist food)
- **Authentic Traditions** — Local festivals and customs, not global holidays
- **Curated Accommodations** — 3-5 star filtering with review scores

## Destinations

Tokyo • Barcelona • Marrakech • Oaxaca • Lisbon • Kyoto

---

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm start
```

App runs at `http://localhost:3000`

---

## Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/travel-concierge.git
git push -u origin main
```

### Step 2: Deploy

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import `travel-concierge` repo
5. Click **Deploy**

Done. Live URL in ~60 seconds.

---

## Connect Custom Domain (GoDaddy → Vercel)

### In Vercel:
1. Go to Project → Settings → Domains
2. Add your domain: `yourdomain.com`
3. Vercel shows you DNS records to add

### In GoDaddy:
1. Go to DNS Management
2. Add/Edit records:
   - **Type:** A
   - **Name:** @
   - **Value:** `76.76.21.21`
   
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com`

3. Wait 10-30 minutes for propagation

---

## Project Structure

```
travel-concierge/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── TravelConcierge.jsx    # Main app component
│   ├── App.js                      # App wrapper
│   ├── index.js                    # Entry point
│   └── index.css                   # Global styles
├── package.json
└── README.md
```

---

## Customization

### Add New Destinations

Edit `src/components/TravelConcierge.jsx` — find the `destinations` array and add:

```javascript
{
  id: 'your-city',
  name: 'City Name',
  country: 'Country',
  image: '🏛️',
  bestMonths: [4, 5, 9, 10],      // 1-12
  worstMonths: [7, 8],
  weather: {
    spring: { temp: '15-25°C', desc: 'Description' },
    summer: { temp: '25-35°C', desc: 'Description' },
    fall: { temp: '15-25°C', desc: 'Description' },
    winter: { temp: '5-15°C', desc: 'Description' }
  },
  localFood: [...],
  traditions: [...],
  hotels: [...],
  flights: {
    peakSeason: '$800-1,500',
    shoulderSeason: '$500-900',
    offSeason: '$300-600'
  }
}
```

---

## License

Personal use. Built with Claude.
