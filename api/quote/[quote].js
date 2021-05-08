module.exports = (req, res) => {
  const {
    query: { quote },
  } = req;

  res.send('Spinning up a random quote!');
};
