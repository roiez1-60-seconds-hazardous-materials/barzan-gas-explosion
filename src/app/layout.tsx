import './globals.css';
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: '60 שניות חומ״ס — אסון הגז בברזאן, קטר: תחקיר הנדסי-מבצעי',
  description: 'רועי צוקרמן — מומחה לחומ״ס וטב״ק | תחקיר אירוע כשל תהליכי ופיצוץ ענן אדים (VCE) במתקן הגז הטבעי ברזאן בראס לאפן',
  openGraph: {
    title: '60 Seconds HazMat — Barzan Gas Plant Disaster',
    description: 'Engineering & Operational Investigation: Vapor Cloud Explosion (VCE) at Barzan Natural Gas Plant, Ras Laffan | Roie Zukerman',
    url: 'https://barzan-gas-explosion.vercel.app',
    siteName: '60 Seconds HazMat',
    images: [{ url: 'https://barzan-gas-explosion.vercel.app/images/og-image.png', width: 1200, height: 630, alt: '60 Seconds HazMat — Barzan' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '60 Seconds HazMat — Barzan Gas Disaster', description: 'Engineering & Operational Investigation: VCE at Barzan Natural Gas Plant', images: ['https://barzan-gas-explosion.vercel.app/images/og-image.png'] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="he"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Heebo:wght@300;400;500;700;800;900&family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/></head><body>{children}<Analytics/></body></html>;
}
