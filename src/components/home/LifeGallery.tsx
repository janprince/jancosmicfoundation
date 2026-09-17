import Image from 'next/image';
import Link from 'next/link';

// A small, complete photo story. Keep the photographs in their original proportions.
const supportingMoments = [
  {
    src: '/images/exercise.jpg',
    width: 6720,
    height: 4480,
    alt: 'Dr. Baffour Jan leading members in movement practice on the lawn',
    caption: 'Practice on the lawn',
  },
  {
    src: '/images/masterseated.jpg',
    width: 5472,
    height: 3648,
    alt: 'Dr. Baffour Jan sitting with his eyes closed during the JCF service training',
    caption: 'A moment of stillness',
  },
];

export default function LifeGallery() {
  return (
    <div className="wrap">
      <div className="life-gallery">
        <figure className="life-gallery-lead">
          <Image
            src="/images/studentslistening.jpg"
            alt="Members of the Foundation sitting together on the lawn and listening"
            width={6720}
            height={4480}
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) 62vw, 725px"
          />
          <figcaption>
            <span className="life-gallery-title">Listening together</span>
            <span className="life-gallery-description">
              Members gathered on the lawn during the Foundation’s training programme.
            </span>
          </figcaption>
        </figure>

        <div className="life-gallery-companions">
          {supportingMoments.map((moment) => (
            <figure key={moment.src}>
              <Image
                src={moment.src}
                alt={moment.alt}
                width={moment.width}
                height={moment.height}
                sizes="(max-width: 760px) calc((100vw - 56px) / 2), (max-width: 1200px) 30vw, 365px"
              />
              <figcaption>{moment.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="life-gallery-footer">
        <Link className="button outline" href="/gallery">Explore the photo gallery</Link>
      </div>
    </div>
  );
}
