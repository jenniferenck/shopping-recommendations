const Clarifai = require('clarifai');
import CLARIFAI_API from '../env';

// https://clarifai.com/developer/guide/

/* we will need to use the "predict" API 

    INPUTS --> image, what model to use (models contain a group of concepts)
        ** Models are helpful since they act as params for what to look for
        ** You can specify mor params for prediction results

    OUTPUT --> list of concepts contained within image

 * */

const app = new Clarifai.App({ apiKey: CLARIFAI_API });
