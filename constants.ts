
import { ActivityType, Lesson, LevelNode, User } from './types';

export const MOCK_USER: User = {
  id: '1',
  name: 'احمد محمود',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  points: 500,
  level: 'المستوى الاول'
};

// Map Nodes matching the visual path
export const LEVEL_NODES: LevelNode[] = [
  { id: 1, title: '', status: 'completed', icon: '🦒', position: { x: 15, y: 40 } },
  { id: 2, title: '', status: 'completed', icon: '🦏', position: { x: 25, y: 65 } },
  { id: 3, title: '', status: 'completed', icon: '🐨', position: { x: 35, y: 40 } },
  { id: 4, title: '', status: 'completed', icon: '🐢', position: { x: 45, y: 65 } },
  { id: 5, title: '', status: 'completed', icon: '🐼', position: { x: 55, y: 40 } },
  { id: 6, title: '', status: 'completed', icon: '🐶', position: { x: 65, y: 65 } },
  { id: 7, title: '', status: 'completed', icon: '🦀', position: { x: 75, y: 40 } },
  { id: 8, title: '', status: 'current', icon: '🐠', position: { x: 82, y: 65 } }, // Active Red Fish
  { id: 9, title: '', status: 'locked', icon: '🐳', position: { x: 90, y: 45 } },
];

export interface LevelCardData {
  id: number;
  title: string;
  icon: string;
  lessonCount: number;
  completedCount: number;
  color: string; // Tailwind class or hex
  isLocked: boolean;
}

export const LEVELS_DATA: LevelCardData[] = [
  { id: 1, title: 'المستوى الاول', icon: '🐳', lessonCount: 4, completedCount: 2, color: 'bg-[#FBC02D]', isLocked: false },
  { id: 2, title: 'المستوى الثاني', icon: '🐠', lessonCount: 6, completedCount: 1, color: 'bg-[#F57F17]', isLocked: false },
  { id: 3, title: 'المستوى الثالث', icon: '🦀', lessonCount: 6, completedCount: 0, color: 'bg-gray-300', isLocked: true },
  { id: 4, title: 'المستوى الرابع', icon: '🐶', lessonCount: 4, completedCount: 0, color: 'bg-gray-300', isLocked: true },
  { id: 5, title: 'المستوى الخامس', icon: '🐼', lessonCount: 6, completedCount: 0, color: 'bg-gray-300', isLocked: true },
  { id: 6, title: 'المستوى السادس', icon: '🦏', lessonCount: 6, completedCount: 0, color: 'bg-gray-300', isLocked: true },
];

export const UPCOMING_SESSIONS = [
  {
    id: 1,
    title: 'جلسة شرح الاعراب',
    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد...',
    time: '6:00م الى 7:00م',
    tag: 'غدا',
    isAvailable: true
  },
  {
    id: 2,
    title: 'جلسة شرح الاعراب',
    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد...',
    time: '6:00م الى 7:00م',
    tag: 'غدا',
    isAvailable: true
  },
  {
    id: 3,
    title: 'جلسة شرح الاعراب',
    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد...',
    time: '6:00م الى 7:00م',
    tag: 'غدا',
    isAvailable: true
  }
];

export const MOCK_LESSON: Lesson = {
  id: 'lesson-1',
  title: 'المستوى الاول',
  steps: [
    {
      id: 'step-1',
      type: ActivityType.QUIZ_TEXT,
      title: 'حرف الجيم',
      isCompleted: true,
      isLocked: false,
      duration: '5 درجات',
      content: {
        question: 'اين هو حرف (الجيم) من بين الحروف التالية:',
        options: ['يحب', 'الجبن', 'الفأر'],
        correctAnswer: 'الجبن'
      }
    },
    {
      id: 'step-2',
      type: ActivityType.VIDEO,
      title: 'فيديو تدريبي',
      isCompleted: false,
      isLocked: false,
      duration: '12:20:00',
      content: {
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://picsum.photos/800/400'
      }
    },
    {
      id: 'step-3',
      type: ActivityType.READING,
      title: 'الكتاب',
      isCompleted: false,
      isLocked: false,
      duration: '1',
      content: {
        text: 'أومأ فلافيلو برأسه في سعادة وقال: "نعم بالطبع!". قال بامبي متعجباً: "أهلاً! أنفك الطويل هذا رائع جداً".',
        image: 'https://picsum.photos/id/237/400/500' // Dog image as placeholder
      }
    },
    {
      id: 'step-4',
      type: ActivityType.WRITING,
      title: 'تدريبات',
      isCompleted: false,
      isLocked: false,
      duration: '3',
      content: {
        prompt: 'Exercises Container',
        placeholder: ''
      }
    },
    {
      id: 'step-games',
      type: ActivityType.GAMES,
      title: 'العاب',
      isCompleted: false,
      isLocked: false,
      duration: '10 دقائق',
      content: {}
    }
  ]
};
