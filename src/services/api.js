import axios from 'axios';

const apiKey = 'Cevgw4CyvPl6GgL8jxkSMOWQ30JKK573VFf7QVheFnLyIHyn6hxrAPYSvkHhAAYeQLYOFH3gfkbwxKySuzU8jXx3BV9PgABgAp4WeHlT1aronHy7KfVhCuj-niQVXXYx'

const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

const opts = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
}

export const findZoos = async (location) => {
  const response = await axios.get(`${baseURL}?categories=zoos&location=${location}`, opts);
  return response.data.businesses
}