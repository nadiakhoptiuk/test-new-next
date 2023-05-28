import Image from 'next/image';
import { getImages } from 'app/(server)/api/images/data';
import s from './GalleryFromServer.module.css';

export const GalleryFromServer = async () => {
  const gallery = await getImages();

  return (
    <ul className={s.imageList}>
      {gallery &&
        gallery?.hits?.map(img => (
          <li key={img.id} className={s.imageItem}>
            <Image
              alt={img.alt}
              src={img.webformatURL}
              width={500}
              height={300}
              className={s.image}
            />
          </li>
        ))}
    </ul>
  );
};
