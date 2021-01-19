import axios from 'axios';

const api = axios.create({ baseURL: 'https://gist.githubusercontent.com/marioandre01/fbacc24d234f4c139e36f94f1dcb5212/raw/2a3df6bc69fa32478033c5dacb1ff52148a1fa10/animeCategory.json' });

export default api;