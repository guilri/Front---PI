import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <span>© 2026 Pastelaria Ze Mario · Centro, São Paulo</span>
        <div className="footer-links">
          <span>Ajuda: (11) 3333-2020</span>
          <Link to="/admin">Administração</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
