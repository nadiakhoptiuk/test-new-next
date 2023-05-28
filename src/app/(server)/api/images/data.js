import { refs } from 'utils/refs';

const searchParams = value =>
  new URLSearchParams({
    key: process.env.API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: value.trim(),
    per_page: refs.IMAGES_PER_PAGE,
    page: 1,
  });

export const getImages = async () => {
  return await fetch(`${process.env.API_URL}?&${searchParams('nature')}`).then(
    res => res.json(),
  );
};
