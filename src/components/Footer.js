import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/jamilbarrett"><FontAwesomeIcon icon={faGithub} />
            </a>
       </footer>
    )
}

export default Footer