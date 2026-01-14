import React, { useState } from 'react';

const destinations = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: '🗼',
    bestMonths: [3, 4, 10, 11],
    worstMonths: [6, 7, 8],
    weather: {
      spring: { temp: '12-20°C', desc: 'Cherry blossoms, mild and pleasant' },
      summer: { temp: '25-35°C', desc: 'Hot, humid, typhoon season' },
      fall: { temp: '15-25°C', desc: 'Crisp air, autumn foliage' },
      winter: { temp: '2-12°C', desc: 'Cold but clear, few tourists' }
    },
    localFood: [
      { season: 'Spring', items: 'Sakura mochi, bamboo shoots (takenoko), strawberries, spring cabbage' },
      { season: 'Summer', items: 'Unagi (eel), hamo (pike conger), edamame, shaved ice (kakigori)' },
      { season: 'Fall', items: 'Matsutake mushrooms, sanma (pacific saury), persimmons, new rice' },
      { season: 'Winter', items: 'Fugu (blowfish), oden, mikan oranges, nabe hot pots' }
    ],
    traditions: [
      { month: 'January', event: 'Hatsumode', desc: 'First shrine visit of the year—locals dress in kimono, pray for fortune' },
      { month: 'February', event: 'Setsubun', desc: 'Bean throwing to drive out evil spirits, eat ehomaki rolls facing lucky direction' },
      { month: 'March', event: 'Hina Matsuri', desc: 'Girls Day—families display elaborate doll sets passed through generations' },
      { month: 'July', event: 'Tanabata', desc: 'Star Festival—write wishes on colorful paper strips, hang on bamboo' },
      { month: 'August', event: 'Obon', desc: 'Ancestor memorial—families return to hometowns, bon odori street dancing' },
      { month: 'November', event: 'Shichi-Go-San', desc: 'Children ages 3, 5, 7 dress formally for shrine blessing' }
    ],
    hotels: [
      { name: 'Aman Tokyo', stars: 5, price: '$$$$$', review: 9.4, style: 'Minimalist luxury, Otemachi views' },
      { name: 'Park Hyatt Tokyo', stars: 5, price: '$$$$', review: 9.2, style: 'Lost in Translation iconic, Shinjuku' },
      { name: 'Hoshinoya Tokyo', stars: 5, price: '$$$$', review: 9.3, style: 'Traditional ryokan meets skyscraper' },
      { name: 'The Prince Gallery', stars: 4, price: '$$$', review: 8.9, style: 'Modern art hotel, panoramic city views' },
      { name: 'Trunk Hotel', stars: 4, price: '$$$', review: 8.7, style: 'Boutique socializing concept, Shibuya' },
      { name: 'Nohga Hotel Akihabara', stars: 3, price: '$$', review: 8.5, style: 'Local craft focus, authentic neighborhood' }
    ],
    flights: {
      peakSeason: '$1,200-2,500',
      shoulderSeason: '$800-1,400',
      offSeason: '$600-1,000'
    }
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    image: '🏛️',
    bestMonths: [5, 6, 9, 10],
    worstMonths: [7, 8],
    weather: {
      spring: { temp: '14-22°C', desc: 'Pleasant, occasional rain, beaches opening' },
      summer: { temp: '24-32°C', desc: 'Hot, crowded, peak tourism crush' },
      fall: { temp: '16-24°C', desc: 'Warm, harvest season, fewer crowds' },
      winter: { temp: '8-15°C', desc: 'Mild, quiet, best for architecture' }
    },
    localFood: [
      { season: 'Spring', items: 'Calçots (grilled onions), artichokes, fava beans, spring lamb' },
      { season: 'Summer', items: 'Escalivada (roasted veg), gazpacho, sardines, coca de recapte' },
      { season: 'Fall', items: 'Wild mushrooms (rovellons), chestnuts, panellets, new wine' },
      { season: 'Winter', items: 'Escudella stew, butifarra sausage, turrón, cava' }
    ],
    traditions: [
      { month: 'February', event: 'Carnestoltes', desc: 'Carnival—neighborhood parades, costume competitions, satirical floats' },
      { month: 'April', event: 'Sant Jordi', desc: 'Catalan Valentine—men give roses, women give books, entire city celebrates' },
      { month: 'June', event: 'Sant Joan', desc: 'Midsummer madness—beach bonfires, fireworks, coca cakes until sunrise' },
      { month: 'August', event: 'Festa Major de Gràcia', desc: 'Neighborhood decoration competition—streets transformed into fantasy worlds' },
      { month: 'September', event: 'La Mercè', desc: 'Patron saint festival—castellers (human towers), correfoc fire runs, giants parade' },
      { month: 'December', event: 'Fira de Santa Llúcia', desc: 'Christmas market at the Cathedral, caganer figurines, traditional nativity' }
    ],
    hotels: [
      { name: 'Hotel Arts Barcelona', stars: 5, price: '$$$$$', review: 9.1, style: 'Beachfront tower, Gehry fish sculpture' },
      { name: 'El Palace Barcelona', stars: 5, price: '$$$$', review: 9.3, style: 'Belle époque grandeur since 1919' },
      { name: 'Cotton House Hotel', stars: 5, price: '$$$$', review: 9.2, style: 'Former cotton guild, neoclassical luxury' },
      { name: 'Hotel Neri', stars: 4, price: '$$$', review: 8.8, style: 'Gothic Quarter palace, rooftop terrace' },
      { name: 'Praktik Bakery', stars: 3, price: '$$', review: 8.6, style: 'Fresh bread lobby, Eixample location' },
      { name: 'Casa Camper Barcelona', stars: 4, price: '$$$', review: 8.7, style: 'Design hotel, free 24h snack bar' }
    ],
    flights: {
      peakSeason: '$900-1,800',
      shoulderSeason: '$600-1,100',
      offSeason: '$400-800'
    }
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    image: '🕌',
    bestMonths: [3, 4, 5, 10, 11],
    worstMonths: [7, 8],
    weather: {
      spring: { temp: '18-28°C', desc: 'Perfect—gardens blooming, comfortable exploration' },
      summer: { temp: '28-45°C', desc: 'Brutal heat, only for the committed' },
      fall: { temp: '18-30°C', desc: 'Warm days, cool nights, harvest time' },
      winter: { temp: '8-20°C', desc: 'Cool, occasional rain, cozy riad season' }
    },
    localFood: [
      { season: 'Spring', items: 'Lamb tagine with preserved lemons, fresh fava beans, orange blossom pastries' },
      { season: 'Summer', items: 'Zaalouk (eggplant), cold almond milk, watermelon, mint tea' },
      { season: 'Fall', items: 'Pomegranate salads, quince tagine, fresh dates, argan oil dishes' },
      { season: 'Winter', items: 'Harira soup, rfissa chicken, msemen pancakes, tangerines' }
    ],
    traditions: [
      { month: 'Variable', event: 'Ramadan', desc: 'Holy month—fast by day, feast at night, extraordinary medina atmosphere' },
      { month: 'Variable', event: 'Eid al-Fitr', desc: 'End of Ramadan—families gather, special cookies, charity, celebration' },
      { month: 'June', event: 'Gnaoua Festival', desc: 'Essaouira—ancient spiritual music, trance rituals, global artists' },
      { month: 'July', event: 'Marrakech Popular Arts', desc: 'Folk performances, Berber traditions, storytelling in Jemaa el-Fna' },
      { month: 'September', event: 'Moussem of Moulay Idriss', desc: 'Pilgrimage festival—processions, fantasia horse displays' },
      { month: 'December', event: 'New Year Atlas', desc: 'Berber New Year (Yennayer)—traditional foods, family gatherings in mountains' }
    ],
    hotels: [
      { name: 'Royal Mansour', stars: 5, price: '$$$$$', review: 9.7, style: 'Private riads, unmatched craftsmanship' },
      { name: 'La Mamounia', stars: 5, price: '$$$$$', review: 9.5, style: 'Legendary palace, century of glamour' },
      { name: 'Amanjena', stars: 5, price: '$$$$', review: 9.4, style: 'Rose-pink pavilions, palm grove serenity' },
      { name: 'Riad Yasmine', stars: 4, price: '$$$', review: 9.1, style: 'Instagram-famous pool, authentic medina' },
      { name: 'El Fenn', stars: 4, price: '$$$', review: 8.9, style: 'Boho-chic rooftop, contemporary art' },
      { name: 'Riad Dar Anika', stars: 3, price: '$$', review: 8.7, style: 'Intimate courtyard, genuine hospitality' }
    ],
    flights: {
      peakSeason: '$800-1,500',
      shoulderSeason: '$500-900',
      offSeason: '$350-700'
    }
  },
  {
    id: 'oaxaca',
    name: 'Oaxaca',
    country: 'Mexico',
    image: '🌮',
    bestMonths: [10, 11, 12, 3, 4],
    worstMonths: [6, 7, 8, 9],
    weather: {
      spring: { temp: '18-32°C', desc: 'Dry, warm, perfect for mezcal tours' },
      summer: { temp: '18-28°C', desc: 'Rainy season—afternoon storms, lush valleys' },
      fall: { temp: '16-28°C', desc: 'Rain easing, Día de Muertos preparations' },
      winter: { temp: '10-26°C', desc: 'Cool nights, clear skies, festive season' }
    },
    localFood: [
      { season: 'Spring', items: 'Chapulines (grasshoppers), fresh cheese, spring herbs, young mezcal' },
      { season: 'Summer', items: 'Chiles de agua, squash blossoms, corn in all forms, seasonal moles' },
      { season: 'Fall', items: 'Pan de muerto, hot chocolate, tamales de mole, tejate cacao drink' },
      { season: 'Winter', items: 'Buñuelos, ponche navideño, barbacoa, festive moles (all 7 varieties)' }
    ],
    traditions: [
      { month: 'March', event: 'Benito Juárez Birthday', desc: 'Hometown hero celebrations, civic pride, traditional dances' },
      { month: 'July', event: 'Guelaguetza', desc: 'Ancient Zapotec festival—regional dances, traditional costumes, community' },
      { month: 'October-Nov', event: 'Día de Muertos', desc: 'Not Halloween—weeks of cemetery vigils, altars, marigolds, family reunions' },
      { month: 'December', event: 'Noche de Rábanos', desc: 'Radish Night—carved radish sculptures, unique to Oaxaca, competition' },
      { month: 'December', event: 'Calendas', desc: 'Neighborhood processions with giant puppets, brass bands, fireworks' },
      { month: 'January', event: 'Danza de la Pluma', desc: 'Feathered conquest dance—elaborate costumes, Zapotec resistance story' }
    ],
    hotels: [
      { name: 'Hotel Escondido', stars: 5, price: '$$$$', review: 9.3, style: 'Pacific coast escape, barefoot luxury' },
      { name: 'Casa Oaxaca', stars: 5, price: '$$$$', review: 9.1, style: 'Chef-owned, rooftop dining, historic center' },
      { name: 'Quinta Real Oaxaca', stars: 5, price: '$$$', review: 9.0, style: 'Former convent, colonial grandeur' },
      { name: 'Los Amantes', stars: 4, price: '$$$', review: 8.8, style: 'Boutique mezcal theme, courtyard pool' },
      { name: 'Casa de Sierra Azul', stars: 4, price: '$$', review: 8.7, style: 'Family-run, artistic details, breakfast included' },
      { name: 'Hotel Parador San Miguel', stars: 3, price: '$$', review: 8.5, style: 'Budget colonial, perfect location' }
    ],
    flights: {
      peakSeason: '$600-1,200',
      shoulderSeason: '$400-800',
      offSeason: '$300-600'
    }
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    image: '🚃',
    bestMonths: [4, 5, 6, 9, 10],
    worstMonths: [12, 1, 2],
    weather: {
      spring: { temp: '14-22°C', desc: 'Mild, blooming, sardine season begins' },
      summer: { temp: '20-30°C', desc: 'Hot but breezy, beach weather, festival season' },
      fall: { temp: '15-24°C', desc: 'Warm, harvest time, fewer tourists' },
      winter: { temp: '8-15°C', desc: 'Rainy, quiet, cozy fado nights' }
    },
    localFood: [
      { season: 'Spring', items: 'Percebes (goose barnacles), fresh cheese, broad beans, first sardines' },
      { season: 'Summer', items: 'Grilled sardines, caracóis (snails), clams, gazpacho, ginjinha' },
      { season: 'Fall', items: 'Roasted chestnuts, new wine, wild mushrooms, cabidela rice' },
      { season: 'Winter', items: 'Bacalhau (salt cod), cozido stew, bolo rei, açorda bread soup' }
    ],
    traditions: [
      { month: 'February', event: 'Carnaval de Torres Vedras', desc: 'Satirical carnival—political mockery, costume competitions, local not tourist' },
      { month: 'May', event: 'Queima das Fitas', desc: 'University graduation—students parade in black capes, serenade tradition' },
      { month: 'June', event: 'Santos Populares', desc: 'Saint Anthony—grilled sardines in streets, manjerico basil pots, neighborhood parties' },
      { month: 'June', event: 'Festas de Lisboa', desc: 'Month-long celebration—fado, parades through Alfama, arraial street parties' },
      { month: 'October', event: 'Festa da Castanha', desc: 'Chestnut festivals—rural celebrations, água-pé new wine, folk music' },
      { month: 'December', event: 'Consoada', desc: 'Christmas Eve feast—bacalhau with all the trimmings, family midnight mass' }
    ],
    hotels: [
      { name: 'Four Seasons Ritz', stars: 5, price: '$$$$$', review: 9.4, style: 'Art collection, park views, classic luxury' },
      { name: 'Bairro Alto Hotel', stars: 5, price: '$$$$', review: 9.2, style: 'Boutique landmark, terrace BA bar' },
      { name: 'Memmo Alfama', stars: 5, price: '$$$$', review: 9.1, style: 'Intimate hideaway, Tagus river views' },
      { name: 'Santiago de Alfama', stars: 4, price: '$$$', review: 9.0, style: 'Restored palace, neighborhood gem' },
      { name: 'The Independente', stars: 3, price: '$$', review: 8.6, style: 'Hostel meets hotel, São Pedro views' },
      { name: 'Pousada de Lisboa', stars: 5, price: '$$$$', review: 9.0, style: 'Historic ministry building, Praça do Comércio' }
    ],
    flights: {
      peakSeason: '$700-1,400',
      shoulderSeason: '$450-900',
      offSeason: '$350-700'
    }
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    image: '⛩️',
    bestMonths: [3, 4, 10, 11],
    worstMonths: [6, 7, 8],
    weather: {
      spring: { temp: '10-22°C', desc: 'Cherry blossom perfection, book months ahead' },
      summer: { temp: '24-35°C', desc: 'Oppressive humidity, Gion Matsuri crowds' },
      fall: { temp: '12-24°C', desc: 'Momiji autumn colors, temple hopping ideal' },
      winter: { temp: '1-10°C', desc: 'Occasional snow, quiet temples, hot springs' }
    },
    localFood: [
      { season: 'Spring', items: 'Kaiseki with sakura, yuba (tofu skin), bamboo shoots, cherry leaf mochi' },
      { season: 'Summer', items: 'Hamo (pike eel), cold somen, ayu sweetfish, hydrangea wagashi' },
      { season: 'Fall', items: 'Matsutake kaiseki, momiji manju, new sake, saba mackerel' },
      { season: 'Winter', items: 'Kabu turnip, hot yudofu, ozoni soup, winter wagashi' }
    ],
    traditions: [
      { month: 'February', event: 'Setsubun at Yoshida', desc: 'Demon expulsion—priests in oni masks, fire rituals, bean throwing' },
      { month: 'April', event: 'Miyako Odori', desc: 'Geiko cherry dance—maiko performances, tickets months in advance' },
      { month: 'May', event: 'Aoi Matsuri', desc: 'Imperial procession—Heian period costumes, ox carts through streets' },
      { month: 'July', event: 'Gion Matsuri', desc: '1000+ years old—massive floats, neighborhood parties, month-long' },
      { month: 'August', event: 'Gozan Okuribi', desc: 'Mountain bonfires—send off ancestral spirits, five giant fires' },
      { month: 'October', event: 'Jidai Matsuri', desc: 'Festival of Ages—2000 participants in historical costume procession' }
    ],
    hotels: [
      { name: 'Aman Kyoto', stars: 5, price: '$$$$$', review: 9.6, style: 'Forest retreat, hidden garden sanctuary' },
      { name: 'Four Seasons Kyoto', stars: 5, price: '$$$$$', review: 9.5, style: '800-year-old pond garden, contemporary luxury' },
      { name: 'Tawaraya Ryokan', stars: 5, price: '$$$$$', review: 9.7, style: '300 years old, ultimate traditional experience' },
      { name: 'The Mitsui Kyoto', stars: 5, price: '$$$$', review: 9.3, style: 'Restored merchant estate, private onsen' },
      { name: 'Sowaka', stars: 4, price: '$$$', review: 9.1, style: 'Gion townhouse, modern machiya' },
      { name: 'Len Kyoto Kawaramachi', stars: 3, price: '$$', review: 8.5, style: 'Design hostel, social spaces, great location' }
    ],
    flights: {
      peakSeason: '$1,300-2,600',
      shoulderSeason: '$850-1,500',
      offSeason: '$650-1,100'
    }
  }
];

const getSeasonFromMonth = (month) => {
  if ([3, 4, 5].includes(month)) return 'spring';
  if ([6, 7, 8].includes(month)) return 'summer';
  if ([9, 10, 11].includes(month)) return 'fall';
  return 'winter';
};

const getMonthName = (month) => {
  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
};

const TravelConcierge = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [activeTab, setActiveTab] = useState('overview');
  const [minStars, setMinStars] = useState(3);

  const currentSeason = getSeasonFromMonth(selectedMonth);
  const dest = destinations.find(d => d.id === selectedDestination);

  const getFlightTier = (month, bestMonths, worstMonths) => {
    if (bestMonths.includes(month)) return 'shoulderSeason';
    if (worstMonths.includes(month)) return 'offSeason';
    return 'peakSeason';
  };

  const getRecommendation = (month, bestMonths, worstMonths) => {
    if (bestMonths.includes(month)) return { text: 'IDEAL', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' };
    if (worstMonths.includes(month)) return { text: 'AVOID', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' };
    return { text: 'GOOD', color: '#eab308', bg: 'rgba(234, 179, 8, 0.15)' };
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#f5f5f5',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      padding: '0',
      margin: '0'
    }}>
      {/* Header */}
      <header style={{
        padding: '3rem 2rem 2rem',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.08) 0%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>✦</span>
            <span style={{ 
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: '#d4af37',
              fontWeight: '500'
            }}>PRIVATE CONCIERGE</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '300',
            margin: '0',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}>
            The <span style={{ fontStyle: 'italic', color: '#d4af37' }}>Discerning</span> Traveler
          </h1>
          <p style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: '0.85rem',
            color: '#888',
            marginTop: '1rem',
            letterSpacing: '0.05em'
          }}>
            Weather-optimized itineraries • Authentic local experiences • Curated accommodations
          </p>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Month Selector */}
        <section style={{ marginBottom: '3rem' }}>
          <label style={{
            display: 'block',
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: '#d4af37',
            marginBottom: '1rem'
          }}>
            WHEN DO YOU WISH TO TRAVEL?
          </label>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(month => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                style={{
                  padding: '0.75rem 1.25rem',
                  background: selectedMonth === month 
                    ? 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)' 
                    : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${selectedMonth === month ? '#d4af37' : 'rgba(255,255,255,0.1)'}`,
                  color: selectedMonth === month ? '#0c0c0c' : '#ccc',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '2px'
                }}
              >
                {getMonthName(month).slice(0, 3)}
              </button>
            ))}
          </div>
        </section>

        {/* Destination Grid */}
        <section style={{ marginBottom: '3rem' }}>
          <label style={{
            display: 'block',
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: '#d4af37',
            marginBottom: '1rem'
          }}>
            SELECT YOUR DESTINATION
          </label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1rem'
          }}>
            {destinations.map(d => {
              const rec = getRecommendation(selectedMonth, d.bestMonths, d.worstMonths);
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDestination(d.id)}
                  style={{
                    padding: '1.5rem',
                    background: selectedDestination === d.id 
                      ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(184, 134, 11, 0.1) 100%)'
                      : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${selectedDestination === d.id ? '#d4af37' : 'rgba(255,255,255,0.08)'}`,
                    color: '#f5f5f5',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    borderRadius: '4px',
                    position: 'relative'
                  }}
                >
                  <span style={{ 
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    fontSize: '0.6rem',
                    fontFamily: "'Helvetica Neue', sans-serif",
                    letterSpacing: '0.1em',
                    padding: '0.25rem 0.5rem',
                    background: rec.bg,
                    color: rec.color,
                    borderRadius: '2px',
                    fontWeight: '600'
                  }}>
                    {rec.text}
                  </span>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>{d.image}</span>
                  <span style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    display: 'block'
                  }}>{d.name}</span>
                  <span style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: '0.7rem',
                    color: '#888',
                    letterSpacing: '0.1em'
                  }}>{d.country}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Destination Details */}
        {dest && (
          <section style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {/* Tabs */}
            <nav style={{
              display: 'flex',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.2)'
            }}>
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'food', label: 'Local Cuisine' },
                { id: 'traditions', label: 'Traditions' },
                { id: 'hotels', label: 'Accommodations' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '1rem 1.5rem',
                    background: activeTab === tab.id ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2px solid #d4af37' : '2px solid transparent',
                    color: activeTab === tab.id ? '#d4af37' : '#888',
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label.toUpperCase()}
                </button>
              ))}
            </nav>

            <div style={{ padding: '2rem' }}>
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Weather Card */}
                    <div style={{
                      background: 'rgba(255,255,255,0.03)',
                      padding: '1.5rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      <h3 style={{
                        fontFamily: "'Helvetica Neue', sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        color: '#d4af37',
                        marginBottom: '1rem',
                        fontWeight: '500'
                      }}>
                        {getMonthName(selectedMonth).toUpperCase()} WEATHER
                      </h3>
                      <p style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '300',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {dest.weather[currentSeason].temp}
                      </p>
                      <p style={{ color: '#aaa', margin: 0, lineHeight: 1.6 }}>
                        {dest.weather[currentSeason].desc}
                      </p>
                    </div>

                    {/* Flight Pricing Card */}
                    <div style={{
                      background: 'rgba(255,255,255,0.03)',
                      padding: '1.5rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      <h3 style={{
                        fontFamily: "'Helvetica Neue', sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        color: '#d4af37',
                        marginBottom: '1rem',
                        fontWeight: '500'
                      }}>
                        ESTIMATED FLIGHTS (ROUND TRIP)
                      </h3>
                      <p style={{ 
                        fontSize: '2rem', 
                        fontWeight: '300',
                        margin: '0 0 0.5rem 0',
                        color: dest.bestMonths.includes(selectedMonth) ? '#22c55e' : 
                               dest.worstMonths.includes(selectedMonth) ? '#eab308' : '#f5f5f5'
                      }}>
                        {dest.flights[getFlightTier(selectedMonth, dest.bestMonths, dest.worstMonths)]}
                      </p>
                      <p style={{ color: '#888', margin: 0, fontSize: '0.85rem' }}>
                        {dest.bestMonths.includes(selectedMonth) ? 'Shoulder season pricing' :
                         dest.worstMonths.includes(selectedMonth) ? 'Off-season deals available' : 'Peak season rates'}
                      </p>
                    </div>

                    {/* Recommendation Card */}
                    <div style={{
                      background: getRecommendation(selectedMonth, dest.bestMonths, dest.worstMonths).bg,
                      padding: '1.5rem',
                      borderRadius: '6px',
                      border: `1px solid ${getRecommendation(selectedMonth, dest.bestMonths, dest.worstMonths).color}30`
                    }}>
                      <h3 style={{
                        fontFamily: "'Helvetica Neue', sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        color: getRecommendation(selectedMonth, dest.bestMonths, dest.worstMonths).color,
                        marginBottom: '1rem',
                        fontWeight: '500'
                      }}>
                        CONCIERGE RECOMMENDATION
                      </h3>
                      <p style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '400',
                        margin: '0 0 0.5rem 0',
                        fontStyle: 'italic'
                      }}>
                        {dest.bestMonths.includes(selectedMonth) 
                          ? `${getMonthName(selectedMonth)} is perfect for ${dest.name}`
                          : dest.worstMonths.includes(selectedMonth)
                          ? `Consider alternate dates for ${dest.name}`
                          : `${getMonthName(selectedMonth)} works well for ${dest.name}`}
                      </p>
                      <p style={{ color: '#aaa', margin: 0, fontSize: '0.9rem' }}>
                        Best months: {dest.bestMonths.map(m => getMonthName(m).slice(0,3)).join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Food Tab */}
              {activeTab === 'food' && (
                <div>
                  <p style={{ 
                    fontStyle: 'italic', 
                    color: '#aaa', 
                    marginBottom: '2rem',
                    fontSize: '1.1rem'
                  }}>
                    Seasonal specialties you won't find in guidebooks—what locals actually eat.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {dest.localFood.map((f, i) => (
                      <div 
                        key={i}
                        style={{
                          background: f.season.toLowerCase() === currentSeason 
                            ? 'rgba(212, 175, 55, 0.1)' 
                            : 'rgba(255,255,255,0.02)',
                          padding: '1.5rem',
                          borderRadius: '6px',
                          border: f.season.toLowerCase() === currentSeason
                            ? '1px solid rgba(212, 175, 55, 0.3)'
                            : '1px solid rgba(255,255,255,0.05)'
                        }}
                      >
                        <h4 style={{
                          fontFamily: "'Helvetica Neue', sans-serif",
                          fontSize: '0.7rem',
                          letterSpacing: '0.2em',
                          color: f.season.toLowerCase() === currentSeason ? '#d4af37' : '#888',
                          marginBottom: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {f.season.toUpperCase()}
                          {f.season.toLowerCase() === currentSeason && ' ← NOW'}
                        </h4>
                        <p style={{ margin: 0, lineHeight: 1.7, color: '#ccc' }}>
                          {f.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Traditions Tab */}
              {activeTab === 'traditions' && (
                <div>
                  <p style={{ 
                    fontStyle: 'italic', 
                    color: '#aaa', 
                    marginBottom: '2rem',
                    fontSize: '1.1rem'
                  }}>
                    Local celebrations and cultural moments—the authentic experiences most visitors miss.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {dest.traditions.map((t, i) => (
                      <div 
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '120px 1fr',
                          gap: '1.5rem',
                          padding: '1.5rem',
                          background: 'rgba(255,255,255,0.02)',
                          borderRadius: '6px',
                          border: '1px solid rgba(255,255,255,0.05)',
                          alignItems: 'start'
                        }}
                      >
                        <div>
                          <span style={{
                            fontFamily: "'Helvetica Neue', sans-serif",
                            fontSize: '0.65rem',
                            letterSpacing: '0.15em',
                            color: '#d4af37',
                            display: 'block',
                            marginBottom: '0.25rem'
                          }}>
                            {t.month.toUpperCase()}
                          </span>
                          <span style={{
                            fontSize: '1.2rem',
                            fontWeight: '500'
                          }}>
                            {t.event}
                          </span>
                        </div>
                        <p style={{ margin: 0, color: '#aaa', lineHeight: 1.7 }}>
                          {t.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hotels Tab */}
              {activeTab === 'hotels' && (
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      color: '#888'
                    }}>
                      MINIMUM RATING:
                    </span>
                    {[3, 4, 5].map(stars => (
                      <button
                        key={stars}
                        onClick={() => setMinStars(stars)}
                        style={{
                          padding: '0.5rem 1rem',
                          background: minStars === stars ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                          border: `1px solid ${minStars === stars ? '#d4af37' : 'rgba(255,255,255,0.1)'}`,
                          color: minStars === stars ? '#d4af37' : '#888',
                          fontFamily: "'Helvetica Neue', sans-serif",
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          borderRadius: '2px'
                        }}
                      >
                        {stars}+ Stars
                      </button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {dest.hotels.filter(h => h.stars >= minStars).map((h, i) => (
                      <div 
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr auto',
                          gap: '2rem',
                          padding: '1.5rem',
                          background: 'rgba(255,255,255,0.02)',
                          borderRadius: '6px',
                          border: '1px solid rgba(255,255,255,0.05)',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>{h.name}</span>
                            <span style={{ color: '#d4af37', fontSize: '0.9rem' }}>
                              {'★'.repeat(h.stars)}
                            </span>
                          </div>
                          <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>{h.style}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{
                            fontSize: '1.5rem',
                            color: h.review >= 9 ? '#22c55e' : '#eab308',
                            fontWeight: '300',
                            marginBottom: '0.25rem'
                          }}>
                            {h.review}
                          </div>
                          <div style={{
                            fontFamily: "'Helvetica Neue', sans-serif",
                            fontSize: '0.8rem',
                            color: '#888'
                          }}>
                            {h.price}
                          </div>
                        </div>
                      </div>
                    ))}
                    {dest.hotels.filter(h => h.stars >= minStars).length === 0 && (
                      <p style={{ color: '#888', fontStyle: 'italic' }}>
                        No properties meet your minimum rating. Try lowering to 3+ stars.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {!selectedDestination && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic' }}>
              Select a destination above to begin your consultation.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <p style={{
          fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          color: '#555'
        }}>
          CURATED TRAVEL INTELLIGENCE • WEATHER-OPTIMIZED PLANNING • LOCAL AUTHENTICITY
        </p>
      </footer>
    </div>
  );
};

export default TravelConcierge;
