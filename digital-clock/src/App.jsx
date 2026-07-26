import React, { useState, useEffect } from 'react';
import { Plus, X, Settings, Search, Globe, Clock } from 'lucide-react';

const DigitalClock = () => {
  const [timezones, setTimezones] = useState([
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Asia/Dubai',
    'America/Los_Angeles'
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [showAnalog, setShowAnalog] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favTimezones')) || []);

  const commonTimezones = [
    { name: 'New York', tz: 'America/New_York' },
    { name: 'Los Angeles', tz: 'America/Los_Angeles' },
    { name: 'Chicago', tz: 'America/Chicago' },
    { name: 'Toronto', tz: 'America/Toronto' },
    { name: 'São Paulo', tz: 'America/Sao_Paulo' },
    { name: 'London', tz: 'Europe/London' },
    { name: 'Paris', tz: 'Europe/Paris' },
    { name: 'Berlin', tz: 'Europe/Berlin' },
    { name: 'Amsterdam', tz: 'Europe/Amsterdam' },
    { name: 'Moscow', tz: 'Europe/Moscow' },
    { name: 'Dubai', tz: 'Asia/Dubai' },
    { name: 'Bangkok', tz: 'Asia/Bangkok' },
    { name: 'Singapore', tz: 'Asia/Singapore' },
    { name: 'Hong Kong', tz: 'Asia/Hong_Kong' },
    { name: 'Shanghai', tz: 'Asia/Shanghai' },
    { name: 'Tokyo', tz: 'Asia/Tokyo' },
    { name: 'Sydney', tz: 'Australia/Sydney' },
    { name: 'Auckland', tz: 'Pacific/Auckland' },
    { name: 'UTC', tz: 'UTC' },
    { name: 'Delhi', tz: 'Asia/Kolkata' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeInZone = (timezone) => {
    try {
      return new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
    } catch {
      return new Date();
    }
  };

  const formatTime = (date, format24 = false) => {
    if (format24) {
      return date.toLocaleTimeString('en-US', { hour24: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const getUTCOffset = (timezone) => {
    const date = getTimeInZone(timezone);
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const offset = (date - utcDate) / (1000 * 60 * 60);
    return offset >= 0 ? `+${offset}` : `${offset}`;
  };

  const getTzName = (tz) => {
    const match = commonTimezones.find(t => t.tz === tz);
    return match ? match.name : tz.split('/')[1]?.replace('_', ' ') || tz;
  };

  const addTimezone = (tz) => {
    if (!timezones.includes(tz)) {
      setTimezones([...timezones, tz]);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const removeTimezone = (tz) => {
    setTimezones(timezones.filter(t => t !== tz));
  };

  const toggleFavorite = (tz) => {
    if (favorites.includes(tz)) {
      const newFavs = favorites.filter(f => f !== tz);
      setFavorites(newFavs);
      localStorage.setItem('favTimezones', JSON.stringify(newFavs));
    } else {
      const newFavs = [...favorites, tz];
      setFavorites(newFavs);
      localStorage.setItem('favTimezones', JSON.stringify(newFavs));
    }
  };

  const filteredTimezones = commonTimezones.filter(tz =>
    tz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tz.tz.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const AnalogClockDisplay = ({ timezone }) => {
    const date = getTimeInZone(timezone);
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

    return (
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Clock face */}
          <circle cx="50" cy="50" r="48" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />

          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x1 = 50 + 40 * Math.cos(angle);
            const y1 = 50 + 40 * Math.sin(angle);
            const x2 = 50 + 45 * Math.cos(angle);
            const y2 = 50 + 45 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#06b6d4" strokeWidth="2" />;
          })}

          {/* Hour hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 20 * Math.sin((hourDegrees * Math.PI) / 180)}
            y2={50 - 20 * Math.cos((hourDegrees * Math.PI) / 180)}
            stroke="#a855f7"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 30 * Math.sin((minuteDegrees * Math.PI) / 180)}
            y2={50 - 30 * Math.cos((minuteDegrees * Math.PI) / 180)}
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1="50"
            y1="50"
            x2={50 + 32 * Math.sin((secondDegrees * Math.PI) / 180)}
            y2={50 - 32 * Math.cos((secondDegrees * Math.PI) / 180)}
            stroke="#ef4444"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Center dot */}
          <circle cx="50" cy="50" r="2" fill="#a855f7" />
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-purple-500" />
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Digital Clock
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIs24Hour(!is24Hour)}
                className="bg-purple-600/30 hover:bg-purple-600/50 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                {is24Hour ? '24H' : '12H'}
              </button>
              <button
                onClick={() => setShowAnalog(!showAnalog)}
                className="bg-cyan-600/30 hover:bg-cyan-600/50 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                {showAnalog ? 'Digital' : 'Analog'}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search timezone or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
          )}

          {/* Filtered Results */}
          {showSearch && searchQuery && filteredTimezones.length > 0 && (
            <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
              {filteredTimezones.map(tz => (
                <button
                  key={tz.tz}
                  onClick={() => addTimezone(tz.tz)}
                  className="bg-purple-600/30 hover:bg-purple-600/50 p-2 rounded text-sm transition truncate"
                >
                  {tz.name}
                </button>
              ))}
            </div>
          )}

          {/* Add Timezone Button */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-4 py-2 rounded-lg font-semibold transition"
          >
            <Plus size={20} /> Add Timezone
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {timezones.length === 0 ? (
          <div className="text-center py-20">
            <Globe className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-4">No timezones selected</p>
            <button
              onClick={() => setShowSearch(true)}
              className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg font-semibold transition"
            >
              Add a Timezone
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {timezones.map(tz => {
              const timeInZone = getTimeInZone(tz);
              const isFavorite = favorites.includes(tz);

              return (
                <div
                  key={tz}
                  className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{getTzName(tz)}</h3>
                      <p className="text-sm text-gray-400 mt-1">{tz}</p>
                      <p className="text-xs text-purple-400 mt-1">UTC {getUTCOffset(tz)}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFavorite(tz)}
                        className="text-yellow-400 hover:scale-125 transition"
                      >
                        {isFavorite ? '⭐' : '☆'}
                      </button>
                      <button
                        onClick={() => removeTimezone(tz)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {showAnalog ? (
                    <AnalogClockDisplay timezone={tz} />
                  ) : (
                    <div className="text-center mb-4">
                      <p className="text-5xl font-bold text-white font-mono tracking-wider">
                        {formatTime(timeInZone, is24Hour).split(' ')[0]}
                      </p>
                      {!is24Hour && (
                        <p className="text-2xl text-cyan-400 font-semibold mt-2">
                          {formatTime(timeInZone, is24Hour).split(' ')[1]}
                        </p>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-gray-400 text-center">
                    {timeInZone.toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default DigitalClock;