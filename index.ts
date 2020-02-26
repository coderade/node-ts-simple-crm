

require('dotenv').config();

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import {settings} from './config'
import Messenger from "./src/controllers/messegerController";

const app = express();

let message = new Messenger(settings.PORT).print();

// mongoose connection
mongoose.connect(settings.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(message)
);

app.listen(settings.PORT, () =>
    console.log(message)
);
