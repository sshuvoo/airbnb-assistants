export interface Review {
  id: string
  name: string
  avatar: string
  feedback: string
  rating: number
}

const reviewDataSet: Review[] = [
  {
    id: crypto.randomUUID(),
    name: 'Jenny Wilson',
    avatar: '/images/reviews/jenny-wilson.png',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Esther Howard',
    avatar: '/images/reviews/esther-howard.png',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Robert Fox',
    avatar: '/images/reviews/robert-fox.png',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
]

export const reviewsData = [
  ...reviewDataSet,
  ...reviewDataSet.map((review) => ({ ...review, id: crypto.randomUUID() })),
  ...reviewDataSet.map((review) => ({ ...review, id: crypto.randomUUID() })),
]
