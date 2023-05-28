import { NextResponse } from 'next/server';
import { getImages } from './data';

export async function GET() {
  const images = await getImages();

  return NextResponse.json(images);
}
