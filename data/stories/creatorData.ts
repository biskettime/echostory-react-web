import { CreatorInfo } from './types';

// Creator database (in-memory storage)
const creators: CreatorInfo[] = [
  {
    id: 'creator_user',
    handle: '@creator_user',
    displayName: 'User Creator',
    // profileImage removed - use creator.png
    bio: 'Default creator for user-generated stories.',
    joinDate: '2024-01-01T00:00:00Z',
    stats: {
      totalStories: 1,
      totalLikes: 0,
      followers: 0,
      following: 0
    },
    badges: ['New Creator']
  },
  {
    id: 'creator_001',
    handle: '@stupid_dog',
    displayName: 'StupidDog',
    // profileImage removed - use creator.png
    bio: 'A creator who loves small everyday stories. Enjoys depicting the human side of imperfect characters.',
    joinDate: '2023-05-15T00:00:00Z',
    stats: {
      totalStories: 12,
      totalLikes: 15420,
      followers: 2340,
      following: 156
    },
    badges: ['Verified', 'Popular Creator'],
    socialLinks: {
      twitter: 'https://twitter.com/stupid_dog_kr',
      website: 'https://stupiddog.blog'
    }
  },
  {
    id: 'creator_002',
    handle: '@camel_yK1q',
    displayName: 'CamelWriter',
    // profileImage removed - use creator.png
    bio: 'A writer interested in diverse cultures and languages. Specializes in Japan-Korea cultural exchange stories.',
    joinDate: '2023-08-22T00:00:00Z',
    stats: {
      totalStories: 8,
      totalLikes: 12350,
      followers: 1890,
      following: 203
    },
    badges: ['Cultural Expert'],
    socialLinks: {
      instagram: 'https://instagram.com/camel_writer'
    }
  },
  {
    id: 'creator_003',
    handle: '@ballet_dreams',
    displayName: 'BalletDreams',
    // profileImage removed to test creator.png
    bio: 'Former ballerina turned writer. Writes about art, perfectionism, and human vulnerability.',
    joinDate: '2023-06-10T00:00:00Z',
    stats: {
      totalStories: 6,
      totalLikes: 9850,
      followers: 1456,
      following: 89
    },
    badges: ['Artist', 'Verified'],
    socialLinks: {
      website: 'https://balletdreams.art'
    }
  },
  {
    id: 'creator_004',
    handle: '@book_lover',
    displayName: 'BookLover',
    // profileImage removed - use creator.png
    bio: 'A librarian who loves classical literature and mysterious stories. Specializes in stories where knowledge and secrets intertwine.',
    joinDate: '2023-04-03T00:00:00Z',
    stats: {
      totalStories: 15,
      totalLikes: 8750,
      followers: 1123,
      following: 234
    },
    badges: ['Scholar', 'Mystery Writer'],
    socialLinks: {
      twitter: 'https://twitter.com/book_lover_kr'
    }
  },
  {
    id: 'creator_005',
    handle: '@coffee_dreams',
    displayName: 'CoffeeDreams',
    // profileImage removed - use creator.png
    bio: 'Former cafe owner turned writer. Depicts warm daily life, small happiness, and journeys toward dreams.',
    joinDate: '2023-07-18T00:00:00Z',
    stats: {
      totalStories: 9,
      totalLikes: 11200,
      followers: 1678,
      following: 145
    },
    badges: ['Lifestyle Writer'],
    socialLinks: {
      instagram: 'https://instagram.com/coffee_dreams_cafe',
      website: 'https://coffeedreams.blog'
    }
  },
  {
    id: 'creator_006',
    handle: '@pixel_queen',
    displayName: 'PixelQueen',
    // profileImage removed - use creator.png
    bio: 'Former pro gamer turned storyteller. Covers gaming culture, esports, and digital generation stories.',
    joinDate: '2023-09-05T00:00:00Z',
    stats: {
      totalStories: 11,
      totalLikes: 13800,
      followers: 2890,
      following: 178
    },
    badges: ['Gaming Expert', 'Rising Star'],
    socialLinks: {
      twitter: 'https://twitter.com/pixel_queen_kr',
      instagram: 'https://instagram.com/pixelqueen_gaming'
    }
  },
  {
    id: 'creator_007',
    handle: '@melody_heart',
    displayName: 'MelodyHeart',
    // profileImage removed - use creator.png
    bio: 'A writer who loves classical music. Delicately portrays the inner lives and artistic conflicts of musicians.',
    joinDate: '2023-03-12T00:00:00Z',
    stats: {
      totalStories: 7,
      totalLikes: 9650,
      followers: 1234,
      following: 67
    },
    badges: ['Music Expert', 'Verified'],
    socialLinks: {
      website: 'https://melodyheart.music'
    }
  },
  {
    id: 'creator_008',
    handle: '@wanderlust_girl',
    displayName: 'WanderlustGirl',
    // profileImage removed - use creator.png
    bio: 'World traveler and blogger. Shares stories of travel, adventure, and free spirits.',
    joinDate: '2023-10-01T00:00:00Z',
    stats: {
      totalStories: 13,
      totalLikes: 12400,
      followers: 3456,
      following: 289
    },
    badges: ['Travel Expert', 'Popular Creator'],
    socialLinks: {
      instagram: 'https://instagram.com/wanderlust_girl_travels',
      website: 'https://wanderlustgirl.travel',
      twitter: 'https://twitter.com/wanderlust_girl'
    }
  }
];

// Creator-related functions
export function getCreatorById(creatorId: string): CreatorInfo | undefined {
  const creator = creators.find(creator => creator.id === creatorId);
  if (creator && !creator.profileImage) {
    return {
      ...creator,
      profileImage: '/images/creator.png'
    };
  }
  return creator;
}

export function getCreatorByHandle(handle: string): CreatorInfo | undefined {
  // Add @ if handle doesn't start with @
  const normalizedHandle = handle.startsWith('@') ? handle : `@${handle}`;
  return creators.find(creator => creator.handle === normalizedHandle);
}

export function getAllCreators(): CreatorInfo[] {
  return creators.map(creator => ({
    ...creator,
    profileImage: creator.profileImage || '/images/creator.png'
  }));
}

export function getPopularCreators(limit: number = 10): CreatorInfo[] {
  return [...creators]
    .sort((a, b) => b.stats.followers - a.stats.followers)
    .slice(0, limit);
}

export function searchCreators(query: string): CreatorInfo[] {
  const lowercaseQuery = query.toLowerCase();
  return creators.filter(creator => 
    creator.handle.toLowerCase().includes(lowercaseQuery) ||
    creator.displayName.toLowerCase().includes(lowercaseQuery) ||
    creator.bio?.toLowerCase().includes(lowercaseQuery)
  );
}

// 크리에이터 통계 업데이트 함수들
export function updateCreatorStats(creatorId: string, stats: Partial<CreatorInfo['stats']>): boolean {
  const creator = creators.find(c => c.id === creatorId);
  if (creator) {
    creator.stats = { ...creator.stats, ...stats };
    return true;
  }
  return false;
}

export function followCreator(creatorId: string): boolean {
  const creator = creators.find(c => c.id === creatorId);
  if (creator) {
    creator.stats.followers += 1;
    return true;
  }
  return false;
}

export function unfollowCreator(creatorId: string): boolean {
  const creator = creators.find(c => c.id === creatorId);
  if (creator && creator.stats.followers > 0) {
    creator.stats.followers -= 1;
    return true;
  }
  return false;
}
