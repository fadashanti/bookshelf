interface Book {
  id: number;
  title: string; 
  author: string; 
  genre: string; 
  rating: number; 
  total_copies: number; 
  available_copies: number; 
  description: string; 
  color: string; 
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}

// interface Book {
//   id: string;
//   title: string;
//   author: string;
//   genre: string;
//   rating: number;
//   totalCopies: number;
//   availableCopies: number;
//   description: string;
//   coverColor: string;
//   coverUrl: string;
//   videoUrl: string;
//   summary: string;
//   createdAt: Date | null;
// }

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  totalCopies: number;
  videoUrl: string;
  summary: string;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}