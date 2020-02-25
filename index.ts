require('dotenv').config();

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import {settings} from './config'

const app = express();

// mongoose connection
mongoose.connect(settings.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${settings.PORT}`)
);

app.listen(settings.PORT, () =>
    console.log(`The server is running on port ${settings.PORT}`)
);
