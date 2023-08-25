import axios from 'axios';

export const strapi = axios.create({
  baseURL: 'https://strapi.puppy.nrw',
});
