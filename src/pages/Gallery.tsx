import { useMemo, useState } from 'react'
import { mediaItems, type MediaType } from '../data/media'

const FILTERS: Array<MediaType | 'Все'> = ['Все', 'Манга', 'Аниме']

export default function Gallery() {
  const [filter, setFilter] = useState<MediaType | 'Все'>('Все')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered = useMemo(
    () => (filter === 'Все' ? mediaItems : mediaItems.filter((m) => m.type === filter)),
    [filter],
  )

  const selected = mediaItems.find((m) => m.id === selectedId) ?? null

  return (
    <div>
      <div className="section-title">
        <i className="fas fa-book-open" style={{ marginRight: '10px' }} />
        Манга & Аниме · моя коллекция
      </div>

      <div className="media-filter">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="media-grid">
        {filtered.map((item) => (
          <div className="media-item" key={item.id} onClick={() => setSelectedId(item.id)}>
            <img
              className="cover-img"
              src={item.cover}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/130x180/222/white?text=${encodeURIComponent(item.name)}`
              }}
            />
            <div className="media-name">{item.name}</div>
            <div className="media-type">{item.type}</div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelectedId(null)}>
          <div className="glass-card modal-box" onClick={(e) => e.stopPropagation()}>
            <img
              className="cover-img"
              src={selected.cover}
              alt={selected.name}
              style={{ width: '150px', height: '210px' }}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/150x210/222/white?text=${encodeURIComponent(selected.name)}`
              }}
            />
            <h3 style={{ marginTop: '0.8rem' }}>{selected.name}</h3>
            <div className="media-type" style={{ marginTop: '0.3rem' }}>{selected.type}</div>
            <p style={{ marginTop: '0.8rem', opacity: 0.85, fontSize: '0.9rem' }}>
              {selected.blurb ?? 'Один из моих любимых тайтлов!'}
            </p>
            <button className="modal-close" onClick={() => setSelectedId(null)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
