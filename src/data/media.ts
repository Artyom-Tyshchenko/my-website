export type MediaType = 'Манга' | 'Аниме'

export interface MediaItem {
  id: string
  name: string
  type: MediaType
  cover: string
  blurb?: string
}

// Чтобы добавить тайтл: положите обложку в public/img/ и добавьте объект сюда.
// В поле cover указывайте только имя файла — путь до него собирается автоматически.
export const mediaItems: MediaItem[] = [
  {
    id: 'm1',
    name: 'One Piece',
    type: 'Манга',
    cover: 'One-Piece.jpg',
  },
  {
    id: 'm2',
    name: 'My Hero Academia',
    type: 'Манга',
    cover: 'My_Hero_Academia_Poster.png',
  },
  {
    id: 'm3',
    name: 'Blade of the Immortal',
    type: 'Манга',
    cover: 'Клинок бессмертного.jpg',
  },
  {
    id: 'm4',
    name: 'Cowboy Bebop',
    type: 'Аниме',
    cover: 'Cowboy Bebop.png',
  },
  {
    id: 'm5',
    name: 'Legend of the Galactic Heroes',
    type: 'Аниме',
    cover: 'Легенда о героях галактики.png',
  },
  {
    id: 'm6',
    name: 'Samurai Champloo',
    type: 'Аниме',
    cover: 'Самурай Чамплу.jpg',
  },
]