import { CreatorInfo } from './types';

// 크리에이터 데이터베이스 (메모리 저장)
const creators: CreatorInfo[] = [
  {
    id: 'creator_user',
    handle: '@creator_user',
    displayName: 'User Creator',
    // profileImage 제거 - creator.png 사용
    bio: '사용자가 생성한 스토리의 기본 크리에이터입니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '일상의 소소한 이야기를 좋아하는 창작자입니다. 완벽하지 않은 캐릭터들의 인간적인 면을 그리는 것을 즐깁니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '다양한 문화와 언어에 관심이 많은 작가입니다. 특히 일본-한국 문화 교류 스토리를 전문으로 합니다.',
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
    // profileImage 제거하여 creator.png 테스트
    bio: '전직 발레리나 출신 작가. 예술과 완벽주의, 그리고 인간의 취약함에 대한 이야기를 씁니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '고전 문학과 신비로운 이야기를 사랑하는 도서관 사서. 지식과 비밀이 얽힌 스토리를 전문으로 합니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '카페 사장 출신 작가. 따뜻한 일상과 소소한 행복, 그리고 꿈을 향한 여정을 그립니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '프로게이머 출신 스토리텔러. 게임 문화와 e스포츠, 그리고 디지털 세대의 이야기를 다룹니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '클래식 음악을 사랑하는 작가. 음악가들의 내면과 예술적 갈등을 섬세하게 그려냅니다.',
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
    // profileImage 제거 - creator.png 사용
    bio: '세계 여행가이자 블로거. 여행과 모험, 그리고 자유로운 영혼의 이야기를 전합니다.',
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

// 크리에이터 관련 함수들
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
  // handle이 @로 시작하지 않으면 추가
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
