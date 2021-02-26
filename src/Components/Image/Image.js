import { useState, useEffect } from 'react';

import './Image.css';

export default function Image({ width }) {
  const [toggle, setToggle] = useState(false);
  const [imageList, setImageList] = useState(null);
  const [imageId, setImageId] = useState(0);

  function handleClick() {
    setToggle(!toggle);
  }

  useEffect(() => {
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

    if (!imageList) {
      let newImageList = fetchImages();
      newImageList.then((res) => {
        setImageList(res);
      });
    }
    if (toggle) {
      let newImageList = fetchImages();
      newImageList.then((res) => {
        setImageList(res);
      });

      setToggle(!toggle);
    }
  }, [toggle, imageList]);

  useEffect(() => {
    if (imageList)
      setImageId(imageList[Math.floor(Math.random() * imageList.length)].id);
  }, [imageList]);

  return (
    <div
      id={'image-background'}
      onClick={() => handleClick()}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(https://picsum.photos/id/${imageId}/${width})`,
        backgroundSize: 'cover',
        width: `${width}px`,
        height: `${width}px`,
        zIndex: '5',
      }}
      key={toggle}
    ></div>
  );
}
