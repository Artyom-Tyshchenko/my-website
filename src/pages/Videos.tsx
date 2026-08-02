import { videos } from '../data/videos'

export default function Videos() {
  return (
    <div>
      <div className="section-title">
        <i className="fab fa-youtube" style={{ marginRight: '10px' }} />
        Видеоплеер · избранное
      </div>
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
