import InstagramIcon from '@material-ui/icons/Instagram';
import PersonIcon from '@material-ui/icons/Person';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-main">
      <a
        href="https://instagram.com/inspiratiobot"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
      <a href="https://alexbannow.com" target="_blank" rel="noreferrer">
        <PersonIcon />
      </a>
      <a href="https://github.com/rbannal86" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
    </footer>
  );
}
