interface SocialLink {
  href: string
  icon: string
  label: string
}

const socials: SocialLink[] = [
  { href: 'https://www.youtube.com/@GoldenAsterisk', icon: 'fab fa-youtube', label: 'YouTube' },
  { href: 'https://github.com/Artyom-Tyshchenko', icon: 'fab fa-github', label: 'GitHub' },
]

export default function SocialLinks() {
  return (
    <>
      <div className="social-links">
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="social-icon">
            <i className={s.icon} /> <span>{s.label}</span>
          </a>
        ))}
      </div>
      <p style={{ fontSize: '0.7rem', marginTop: '0.7rem', opacity: 0.5 }}>
        youtube.com/@GoldenAsterisk • github.com/Artyom-Tyshchenko
      </p>
    </>
  )
}
