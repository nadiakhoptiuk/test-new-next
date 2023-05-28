import Image from 'next/image';
import gallery from 'utils/gallery.json';
import s from './Gallery.module.css';

export const Gallery = () => {
  return (
    <ul className={s.imageList}>
      {gallery.map((img, index) => (
        <li key={index} className={s.imageItem}>
          <Image
            alt={img.alt}
            src={img.src}
            width={500}
            height={300}
            className={s.image}
          />
        </li>
      ))}
    </ul>
  );
};
