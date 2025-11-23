
export enum ActivityType {
  VIDEO = 'VIDEO',
  READING = 'READING',
  WRITING = 'WRITING',
  QUIZ_IMAGE = 'QUIZ_IMAGE', // Select image based on text
  QUIZ_TEXT = 'QUIZ_TEXT', // Select text based on image
  SENTENCE_BUILDER = 'SENTENCE_BUILDER',
  AUDIO_RECORD = 'AUDIO_RECORD',
  GAMES = 'GAMES'
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  points: number;
  level: string;
}

export interface LessonStep {
  id: string;
  type: ActivityType;
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
  duration?: string; // e.g., "12:20:00" or "5 درجات"
  content?: any; // Flexible payload for specific activity data
}

export interface Lesson {
  id: string;
  title: string;
  steps: LessonStep[];
}

export interface LevelNode {
  id: number;
  title: string;
  status: 'completed' | 'current' | 'locked';
  icon: string; // url or name
  position: { x: number; y: number }; // Percentage for map placement
}
