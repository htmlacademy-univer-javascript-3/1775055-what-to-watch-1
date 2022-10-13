export type review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
};

export type addReview = {
  comment: string
  rating: number
};

