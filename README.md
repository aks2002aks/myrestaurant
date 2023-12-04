![image](https://github.com/aks2002aks/myrestaurant/assets/102814881/e8e24089-b5ea-4f78-8b4a-d61e0a9f6794)![image](https://github.com/aks2002aks/myrestaurant/assets/102814881/23f2e194-81b0-465c-96f4-1be9d86e6776)# Restaurant Web App

Welcome to the Restaurant Web App repository! This web application is designed to showcase various features related to a restaurant, including ambiance, awards, chef information, events, menu, reviews, and sustainability.

You can Visit this website on vercel

[Visit My Website]([https://www.example.com](https://myrestaurant-olive.vercel.app/))

## Table of Contents

- [Images](#images)
- [Components](#components)
- [Pages](#pages)
- [API](#api)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Images

![Slider](https://ibb.co/TgpMC81)
![Events](https://ibb.co/nDVYdjn)
![Location](https://ibb.co/hZwcdtm)
![ShortMenu](https://ibb.co/mR0YXb1)
![Menu](https://ibb.co/JxD9TZh)
![Awards](https://ibb.co/rp6Mvkj)
![Ambiance](https://ibb.co/ThYgddv)
![Chef](https://ibb.co/SsKsps9)
![SusatianbilityInitiatives](https://ibb.co/h1Bv3Xf)
![Reviews](https://ibb.co/7QqPT6y)


## Components

The project includes the following components:

- Ambiance: `ambiance.jsx`
- Awards: `awards.jsx`
- Chef: `chef.jsx`
- Events: `event.jsx`
- Footer: `footer.jsx`
- Location: `location.jsx`
- Menu: `foodItem.jsx`, `menuFull.jsx`, `restaurantMenu.jsx`, `shortMenu.jsx`
- Navbar: `navbar.jsx`
- Reviews: `rating.jsx`, `review.jsx`
- Slider: `Images.js`, `slider.js`
- Sustainability: `sustainability.jsx`
- Layout: `Layout.jsx`

## Pages

- Ambiance: `ambiance.jsx`
- Awards: `awards.jsx`
- Chef: `chef.jsx`
- Events: `event.jsx`
- Footer: `footer.jsx`
- Location: `location.jsx`
- Menu: `foodItem.jsx`, `menuFull.jsx`, `restaurantMenu.jsx`, `shortMenu.jsx`
- Navbar: `navbar.jsx`
- Reviews: `rating.jsx`, `review.jsx`
- Slider: `Images.js`, `slider.js`
- Sustainability: `sustainability.jsx`
- Layout: `Layout.jsx`

## API

The project fetches data from a backend API that provides information about the restaurant. The API returns the following structure:

```json
{
  "restaurant": {
    "name": "Epicurean Symphony",
    "location": {
      "address": "123 Gourmet Avenue, Culinary Metropolis",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "chef": {
      "name": "Chef Isabella Culinary Maestro",
      "bio": "An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.",
      "signature_dish": "Mango Tango Fusion"
    },
    "awards": [
      {
        "year": 2023,
        "organization": "Michelin Guide",
        "award": "Three Michelin Stars"
      },
      // ... (Other awards)
    ],
    "ambiance": {
      "description": "Epicurean Symphony offers a sophisticated and cozy ambiance, with contemporary decor and soft lighting, creating the perfect setting for an unforgettable dining experience."
    },
    "sustainability": {
      "initiatives": [
        {
          "name": "Farm-to-Table",
          "description": "We source our ingredients locally to support farmers and ensure the freshest, seasonal produce in our dishes."
        },
        // ... (Other sustainability initiatives)
      ]
    },
    "events": {
      "upcoming_events": [
        {
          "name": "Culinary Artistry Showcase",
          "date": "2023-12-15",
          "description": "Join us for a night of culinary artistry as Chef Isabella presents her latest creations in an exclusive tasting event."
        },
        // ... (Other upcoming events)
      ]
    },
    "online_presence": {
      "website": "https://www.epicureansymphony.com",
      "social_media": {
        "facebook": "https://www.facebook.com/epicureansymphony",
        "instagram": "https://www.instagram.com/epicureansymphony",
        "twitter": "https://www.twitter.com/epicureansymph"
      }
    },
    "menu": {
      "categories": [
        // ... (Menu categories and items)
      ],
      "seasonal_menu": {
        // ... (Seasonal menu details)
      }
    },
    "reviews": [
      // ... (Customer reviews)
    ]
  }
}
```

## API Routes
The project uses the following API functions:

- `getRestaurantAmbiance.js`
- `getRestaurantAwards.js`
- `getRestaurantChef.js`
- `getRestaurantEvents.js`
- `getRestaurantLocation.js`
- `getRestaurantMenu.js`
- `getRestaurantName.js`
- `getRestaurantReviews.js`
- `getRestaurantSocials.js`
- `getRestaurantSustainability.js`


## File Structure

The project file structure is organized as follows:



## Usage

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm run dev`.

## Dependencies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributing

Feel free to contribute to the project by opening issues or pull requests. Your input is highly appreciated.

## License

This project is licensed under the [MIT License](LICENSE).

