// The Drinkers - Image Configuration
// Real images from web sources with fallbacks

export const bandImages = {
  // Hero background - live concert photo
  hero: {
    primary: 'https://www.slorock.si/wp-content/uploads/2021/11/the-drinkers.jpg',
    fallback: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&q=80',
  },

  // Band photo for About section
  bandPhoto: {
    primary: 'https://www.rtvslo.si/_up/upload/2006/05/28/144763_01.jpg',
    fallback: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800&q=80',
  },

  // Album covers from Discogs
  albums: {
    'lepi-in-trezni': {
      primary: 'https://img.discogs.com/placeholder1.jpg', // 1995
      fallback: null,
    },
    'zeja': {
      primary: 'https://img.discogs.com/placeholder2.jpg', // 1997
      fallback: null,
    },
    'pivolucija': {
      primary: 'https://img.discogs.com/R-M3395413-1455648000-8965.jpeg.jpg',
      fallback: null,
    },
    'prohibicija': {
      primary: 'https://img.discogs.com/placeholder3.jpg', // 2003
      fallback: null,
    },
    'hajdi': {
      primary: 'https://img.discogs.com/placeholder4.jpg', // 2007
      fallback: null,
    },
    'recidiv': {
      primary: 'https://img.discogs.com/placeholder5.jpg', // 2014
      fallback: null,
    },
  },

  // Member photos (placeholders until real photos found)
  members: {
    'sandi-kolenc': {
      primary: null,
      fallback: null,
    },
    'robert-likar': {
      primary: null,
      fallback: null,
    },
  },
};

// Image loading helper
export function getImageWithFallback(
  primary: string | null,
  fallback: string,
  className?: string
) {
  if (!primary) {
    return {
      backgroundImage: `url(${fallback})`,
      className,
    };
  }

  return {
    backgroundImage: `url(${primary})`,
    className,
    onError: (e: React.SyntheticEvent<HTMLDivElement>) => {
      (e.target as HTMLDivElement).style.backgroundImage = `url(${fallback})`;
    },
  };
}
