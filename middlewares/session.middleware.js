var Session = require("../models/session.model");
var shortid = require("shortid");

module.exports = async function (req, res, next) {
  if (!req.signedCookies.sessionId) {
    var sessionId = shortid.generate();
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    var session = await Session.find();
    session.push({
      id: sessionId,
    });
  }

  next();
};
