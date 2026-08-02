import { useState, type FormEvent } from 'react'

const EMAIL = 'boss.tyshenko@mail.ru'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setStatus('Заполните имя и сообщение.')
      return
    }
    const subject = encodeURIComponent(`Сотрудничество: ${name}`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('Открываю почтовый клиент...')
  }

  return (
    <div className="glass-card cooperation-box" style={{ padding: '2rem 1.5rem' }}>
      <div className="section-title" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        Сотрудничество / предложения
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Как к вам обращаться</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Опишите ваше предложение..."
          />
        </div>
        <button type="submit" className="email-button" style={{ justifyContent: 'center' }}>
          <i className="fas fa-envelope-open-text" />
          Отправить
          <i className="fas fa-arrow-right" />
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>

      <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.8 }}>
        📩 или напишите напрямую: <a href={`mailto:${EMAIL}`} style={{ color: '#ff8fa8' }}>{EMAIL}</a>
      </p>
    </div>
  )
}
