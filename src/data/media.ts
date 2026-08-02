export type MediaType = 'Манга' | 'Аниме'

export interface MediaItem {
  id: string
  name: string
  type: MediaType
  cover: string
  blurb?: string
}


export const mediaItems: MediaItem[] = [
  {
    id: 'm1',
    name: 'One Piece',
    type: 'Манга',
    cover: '/img/One-Piece.jpg',
  },
  {
    id: 'm2',
    name: 'My Hero Academia',
    type: 'Манга',
    cover: '/img/My_Hero_Academia_Poster.png',
  },
  {
    id: 'm3',
    name: 'Blade of the Immortal',
    type: 'Манга',
    cover: '/img/Клинок бессмертного.jpg',
  },
  {
    id: 'm4',
    name: 'Cowboy Bebop',
    type: 'Аниме',
    cover: '/img/Cowboy Bebop.png',
  },
  {
    id: 'm5',
    name: 'Legend of the Galactic Heroes',
    type: 'Аниме',
    cover: '/img/Легенда о героях галактики.png',
  },
  {
    id: 'm6',
    name: 'Samurai Champloo',
    type: 'Аниме',
    cover: '/img/Самурай Чамплу.jpg',
  },
]