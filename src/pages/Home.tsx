import SocialLinks from '../components/SocialLinks'

export default function Home() {
  return (
    <div className="glass-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
      <div className="avatar-frame">
        <img className="avatar-img" src="/public/img/I.jpg" alt="Артём Тыщенко" />
      </div>
      <div className="tagline">✦ ТВОЙ ПУТЬ — ТВОИ ПРАВИЛА ✦</div>
      <h1>Артём Тыщенко</h1>
      <p style={{ fontSize: '1rem', marginTop: '0.3rem', opacity: 0.8 }}>
        контент-креатор · разработчик · отаку
      </p>
      <SocialLinks />
    </div>
  )
}
