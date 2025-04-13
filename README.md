# 🎬 Movies Search App

A simple React-based movie search application that uses the [TMDb API](https://www.themoviedb.org/documentation/api) to let users view popular movies, search for movies, and view details such as title, poster, and release date.

## 🚀 Features

- Search for any movie by title
- Display posters, titles, release years, and more
- Responsive and fast UI built with React + Vite & Node Modules
- Clean design with minimal setup

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rayyanshuda/movies-search.git
cd movies-search
```

### 2. Install Dependencies
```
npm install
```

## 🔐 TMDb API Key Setup
This project uses an API key from The Movie Database (TMDb).

### 👉 Steps to Get Your API Key:
Go to https://www.themoviedb.org/signup and create an account.

Visit your account settings → API → Apply for an API key.

Once you have the key, copy it.

## ⚙️ Add the Key to a .env File
This project uses Vite, so your API key should be prefixed with VITE_.

There's a sample ``` .env_sample file ``` but create a ```.env``` file in the project root, and paste the following (replace with your actual key):

```
VITE_MOVIE_API_KEY = your_tmdb_api_key_here
```


### 3. Run The App Locally
```
npm run dev
```
Open your browser and go to your local host to view the app!
