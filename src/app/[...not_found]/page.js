import { notFound } from 'next/navigation';

export default function NotFoundCatchAll() {
  notFound();
}

export async function generateStaticParams() {
  return [];
}