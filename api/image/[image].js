const Jimp = require('jimp');
const fetch = require('node-fetch');
const { templates } = require('../../src/Logic/templates');
const { fillTemplate } = require('../../src/Logic/generator');

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req, res) => {
  const getQuote = () => {
    const selection = Math.floor(Math.random() * templates.length);
    return fillTemplate(null, null, selection);
  };

  async function fetchImages() {
    let page = Math.floor(Math.random() * 38);
    let images = await fetch(`https://picsum.photos/v2/list?page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.length === 0) return fetchImages();
        else return res;
      });
    let selectedImage = images[Math.floor(Math.random() * images.length)];
    let imageData = await fetch(selectedImage.download_url);
    return imageData;
  }

  const image = await fetchImages();
  const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  const quote = getQuote();
  const textImage = await Jimp.read(image.url).then((imageResponse) =>
    imageResponse.print(font, 10, 10, quote)
  );
  console.log(textImage);
  res.send(textImage);
};
