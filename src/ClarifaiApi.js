const Clarifai = require('clarifai');
import CLARIFAI_API from '../env';

const app = new Clarifai.App({ apiKey: CLARIFAI_API });
