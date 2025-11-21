export type UUID = `${string}-${string}-${string}-${string}-${string}`;
export type UserRole = 'student' | 'tutor';

export interface User {
  user_id: UUID
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: UserRole;
  registration_date: Date;
}

export interface Student extends User {
  student_id: UUID
  school_grade: number;
  city: string; 
  lessons?: Lesson[];
  reviews?: Review[];
}

export interface Tutor extends User {
  tutor_id: UUID
  education: string;
  experience_years: number;
  city: string;
  rating: number;
  tutorSubjects?: TutorSubject[];
  schedules?: Schedule[];
  reviews?: Review[];
}

export interface Schedule {
  schedule_id: UUID
  tutor_id: UUID
  day_of_week: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
  tutor?: Tutor;
  lessons?: Lesson[];
}

export interface Subject {
  subject_id: UUID
  name: string;
  category: string;
  tutorSubjects?: TutorSubject[];
}

export interface TutorSubject {
  tutor_subject_id: UUID
  tutor_id: UUID
  subject_id: UUID
  price: number;
  format_online: boolean;
  format_offline: boolean;
  tutor?: Tutor;
  subject?: Subject;
  lessons?: Lesson[];
}

export interface Lesson {
  lesson_id: UUID
  student_id: UUID
  tutor_subject_id: UUID
  schedule_id: UUID
  lesson_date: Date;
  duration_minutes: number;
  student?: Student;
  tutorSubject?: TutorSubject;
  schedule?: Schedule;
}

export interface Review {
  review_id: UUID
  tutor_id: UUID
  student_id: UUID
  rating: number;
  comment: string;
  is_anonymous: boolean; 
  created_date: Date;
  tutor?: Tutor;
  student?: Student;
}