# NETFLIX GPT

- Create react app
- setup tailwind
- Header build
- Routing
- Login form
- Sign up form
- Form validation
- useRef hook
- Deploy app 
- Create a sign up user
- Implement sign in and sign up user API
- Integrated redux with user slice
- create redux
- Implemented Sign out
- update profile
- Bugfix - Fixed display of user profile pic and Display name
- Bugfix - fixed the redirect to "/" if user try to route "/browse" without login and vice versa
- Unsubscribed to the onAuthStateChange call back
- Added hardcoded values to constant file (eg Urls)
- Register to TMDB API and create an app and get access token
- Get data from now playing movies list API
- Custom hook for now playing data movies
- created movie slice
- update store with movie data
- Planning for main and secondary container
- fetch data for the trailer video
- update store with with video data
- embedded the yt video
- make it autoplay and mute
- made main container looking good
- Build secondary component
- Build movie list
- Build movie card
- TMDB Image CDN URL
- Use custom hooks for diff movie types(eg popular  , upcoming etc)
- Made Browse page better
- GPT Search Feature
- GPT Search page
- GPT Search bar
- Multilingual feature
- Integrate Gemini GPT Apis
- GPT search API call
- Fetched GPT movies suggestion from TMDB
- Created GPT slice added data in redux
- Reused MovieList component to render GPT Searched Movies
- Memoization
- Adding .env file
- Made our App responsive

### Architecture of the app

- Sign In/Sign up page
    - Sign In / sign up form
    - redirect browse page


- Browse Page( After Auth)
  -Header
  - Main Movie
    - Trailer
    - Movie title / description
    - Movie Suggestions
        - Movie list * N

- Netflix-GPT Page
    - Search bar
    - Movie suggestion
