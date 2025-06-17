# Iestate
Real Estate Viewing

A simple prototype of a real estate frontend that allows users to explore building towers, select floors, and view apartment layouts.

## Features

- View a list of towers (A, B, C) as clickable cards
- Select a tower to view up to 15 floors
- Select a floor to view the apartments
- View full details of the selected apartment
- Responsive layout and smooth animations on hover

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- React Router DOM 
- JSON for static data

## Dynamic Data Handling

To avoid manually duplicating floor and apartment data:
- Only one real floor is defined per tower in `data.json`
- Remaining floors (up to 15) are **simulated** using the first one
- Apartment IDs are dynamically generated 
