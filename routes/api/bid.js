module.exports = (app) => {
  const bidcontroller = require('../../controller/bidcontroller');

  app.post('/api/bid', bidcontroller.createabid);
  app.get('/api/bid/:id', bidcontroller.getadatabybiderID);
  app.get('/api/bid/byjobid/:id', bidcontroller.getadatabyJobPostedID);
};
