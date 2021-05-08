const fetch = require('node-fetch');

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  async function fetchImages() {
    let page = Math.floor(Math.random() * 38);
    let response = await fetch(`https://picsum.photos/v2/list?page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.length === 0) return fetchImages();
        else return res;
      });
    return response;
  }

  fetchImages().then((data) => {
    const selection = Math.floor(Math.random() * data.length);
    res.send(data[selection].download_url);
  });
};
