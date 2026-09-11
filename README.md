# Travel Itinerary Planner V2

An independent second version of the original Travel Itinerary Planner. It keeps the visual identity of Version 1 while bringing over the core itinerary-building logic from Roamwise. Gemini runs through the backend, so the API key is never exposed in the browser.

## Included in V2

- Start by describing a trip in natural language or use the guided planner
- Plan one destination or a multi-city journey
- Three guided steps: trip basics, travellers and transport, and preferences
- Destination autocomplete while typing
- Start date, trip length, adults and children
- Pace, budget, arrival method, local transportation, dining and interests
- Gemini-generated day-by-day itinerary
- Curated fallback when Gemini is unavailable
- Edit, regenerate and print controls

## Deliberately not included

- Accounts and saved trips
- Destination content hubs
- Advanced mobility and senior-traveller profiles
- Hotel, flight and activity booking

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Add `GEMINI_API_KEY` to `.env.local`. Never prefix the key with `VITE_`.
3. Install dependencies with `pnpm install`.
4. Run `pnpm dev`.
5. Open `http://localhost:3001`.

The API key is read only by the Express/Vercel backend and is never bundled into browser code.
