#  Where it's @ - React Individual Exam

This is an individual exam project in React. The goal is to build an application where users can search for events, buy tickets, and access their purchased tickets to scan upon arrival at the event.

## Requirements

Use of the following techniques in React:

- Pages & Components
- useState & useEffect
- Props
- API-management
- Routing between pages
- Advanced state management with Zustand

To achieve a higher grade (VG), the following additional requirements must be met:

- Use of three external libraries (not counting axios and zustand), with explanation in this readme file of how they work and why I think that they fit this particular project.

- Good use of separation between Pages and Components.

## Tech stack

The main tech stacks used in this project are:

### React

A JavaScript library for building user interfaces.

### Zustand

A global state management library for React. Required use for this project.

### Axios

A promise-based HTTP-client for node.js, making it easier to query results from an API. Also required use for this project.

### Swiper.js

A library that enables swiping gestures with ease. I chose this library because of its popularity, ease of use (I've used it in a previous project), and because I felt that enabling swipe navigation between pages would create a more user-friendly experience. Swiper.js is well-documented, highly customizable, and integrates smoothly with React. In this project, it's used to allow users to swipe between different views, mimicking the behavior of native mobile apps and enhancing the overall UX.

### Font Awesome

An icon library. Used for the very few icons that are featured in the app. I chose this library again because of its popularity and vast library of different icons to use. It's easy to integrate with React and offers both free and premium icons, making it a flexible choice for most design needs. In this project, it helped add simple, recognizable symbols that improve usability without overwhelming the interface.

### UUID

A library to generate unique IDs, used for identifying elements such as tickets and events. I chose UUID because it provides reliable and universally unique identifiers without the need for a database. This is especially useful in frontend-heavy apps where client-side identification is needed. In this project, UUIDs ensure that each ticket and event has a consistent and conflict-free reference.

### react-barcode

A React component for generating barcodes. I chose this library because it made it very simple to create and display barcodes dynamically based on user data. It integrates directly into JSX and offers customization options like format, width, and font size. In this app, it's used to generate scannable barcodes for each confirmed ticket, simulating a real-world digital ticketing experience.