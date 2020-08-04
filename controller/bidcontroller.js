const bid = require('../model/Biding');

exports.createabid = async (req, res) => {
  const data = req.body;
  try {
    const savebeed = await bid.create(data);

    // {
    //     "Bidingpostid":"5f23df5229cf0120a8a4c946",
    //     "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ":"5f15362038097d33cce92c90",
    //     "BidingDescription":"asdasdasdasasdasdasdasdasd",
    //     "BidingPrice":"65",
    //     "jobposteduserID":"5f191836568121324c7a577c"
    // }
    res
      .status(200)
      .send({Message: 'Sucesfully BId sucessfull', data: savebeed});
  } catch (err) {
    res
      .status(400)
      .send({Message: 'Not Able to Bid On this Project', data: err});
  }
};

exports.getadatabybiderID = async (req, res) => {
  const ID = req.params.id;
  const findObj = {BiderUserID: ID};
  try {
    const Data = await bid.find(findObj);
    res.status(200).send({Message: 'SucessFully Fetched a data', data: Data});
  } catch (err) {
    res
      .status(400)
      .send({Message: 'Not Able to Bid On this Project', data: err});
  }
};
exports.getadatabyJobPostedID = async (req, res) => {
  const ID = req.params.id;
  const findObj = {Bidingpostid: ID};
  //data which is send by JOB ID
  try {
    const Data = await bid.find(findObj);
    const filtereddata = Data.map((el) => {
      const Fldata = {
        BidingPrices: el.BidingPrice,
        BiderUserid: el.BiderUserID,
      };
      return Fldata;
    });
    res
      .status(200)
      .send({Message: 'SucessFully Fetched a data', data: filtereddata});
  } catch (err) {
    res
      .status(400)
      .send({Message: 'Not Able to Bid On this Project', data: err});
  }
};

exports.getadatabyJobPostedUserID = async (req, res) => {};
