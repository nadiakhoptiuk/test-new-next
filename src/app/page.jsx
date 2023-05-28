// import { Inter } from 'next/font/google';
import { Gallery } from 'components';
import s from './page.module.css';
import { GalleryFromServer } from 'src/components/GalleryFromServer/GalleryFromServer';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.description}>
        <h2>Gallery 1</h2>
        <div className={s.wrapper}>
          <Gallery />
        </div>

        <h2>Gallery 2</h2>
        <div className={s.wrapper}>
          <GalleryFromServer />
        </div>
      </div>
    </main>
  );
}
