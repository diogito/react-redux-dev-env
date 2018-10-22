import express from 'express';
import path from 'path';
import open from 'open';
import expressStaticGzip from 'express-static-gzip';

/* eslint-disable no-console */

const port = 5000;
const app = express();


//app.use(express.static('dist'));

app.use('/', expressStaticGzip(path.join('dist'), {
  enableBrotli: true,
  orderPreference: ['br']
}));

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
