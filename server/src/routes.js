module.exports = (app) => {
  app.post("/register", (req, res) => {
    res.send({
      message: `Your Email = ${req.body.email}, Username = ${req.body.username}`,
    });
  });
};
