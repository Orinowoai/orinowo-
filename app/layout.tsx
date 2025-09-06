
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
 title: 'Orinowo — AI Music Studio',
 description: 'Create Afrobeats, UK Drill, and Lofi tracks with AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en">
 <body>
 <header className="header">
 <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
 <a href="/" className="logo">Orinowo</a>
 <nav style={{display:'flex',gap:'24px',alignItems:'center'}}>
 <a href="/pricing" style={{color:'#fff',textDecoration:'none'}}>Pricing</a>
 <a href="/charts" style={{color:'#fff',textDecoration:'none'}}>Charts</a>
 <a href="/blog" style={{color:'#fff',textDecoration:'none'}}>Blog</a>
 <a href="/pricing" className="btn btn-primary">Get Started</a>
 </nav>
 </div>
 </header>

 {children}

 <footer className="footer">
 <div className="container">
 <p>© 2025 Orinowo — AI Music Studio</p>
 </div>
 </footer>
 </body>
 </html>
 );
}

