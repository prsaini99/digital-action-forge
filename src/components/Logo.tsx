
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({ className = '', variant = 'dark' }: LogoProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Logo image failed to load, using fallback');
    // Set a fallback or placeholder
    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNjM2NkYxIi8+Cjx0ZXh0IHg9IjUwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+Q1RBPC90ZXh0Pgo8L3N2Zz4K';
  };

  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/ccf98407-84db-4be9-9a46-d989de048de5.png" 
        alt="Call to Action Logo" 
        className={`h-32 ${variant === 'light' ? 'brightness-100' : 'brightness-100'}`}
        onError={handleImageError}
        onLoad={() => console.log('Logo loaded successfully')}
      />
    </Link>
  );
};

export default Logo;
