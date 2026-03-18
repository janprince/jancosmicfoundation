import { getGalleryItems } from '@/lib/api';
import GalleryPageContent from './GalleryPageContent';

export default async function GalleryPage() {
  const items = await getGalleryItems();
  return <GalleryPageContent items={items} />;
}
