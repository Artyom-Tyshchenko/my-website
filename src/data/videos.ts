export interface VideoItem {
  id: string
  embedId: string
  title: string
}

// Чтобы добавить видео: вставьте новый объект с ID из ссылки YouTube (после /embed/)
export const videos: VideoItem[] = [
  {
    id: 'v1',
    embedId: '_j1wYtThX7I?si=DY_Lc_RJfZC3OYzj',
    title: 'Обзор Deus Ex',
  },
  {
    id: 'v2',
    embedId: 'GTaBrepmNYQ?si=wVMzGAxMp-fhx36k',
    title: 'ANIME OPENING QUIZE OLD EDITION',
  },
  {
    id: 'v3',
    embedId: 'pN5OOscCn_M?si=TlDily_0EA4eVa4w',
    title: '8Д озвучка ЦЦЕЕЗАААРРЬЬ на Новогоднем конкурсе озвучки от CustomStories',
  },
]
