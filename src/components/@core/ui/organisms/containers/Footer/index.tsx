import social from 'src/configs/social-media.json';
import FooterView from '../../views/Footer';

const facebook = social.find((s) => {
  return s.name.toLowerCase() === 'Facebook'.toLowerCase();
});
const instagram = social.find((s) => {
  return s.name.toLowerCase() === 'Instagram'.toLowerCase();
});
const linkedin = social.find((s) => {
  return s.name.toLowerCase() === 'Linkedin'.toLowerCase();
});

export default function Footer() {
  return (
    <FooterView
      address="Avenida Ipiranga, nº 6681, prédio 11 | Porto Alegre – RS"
      facebook={facebook?.link}
      instagram={instagram?.link}
      linkedin={linkedin?.link}
    />
  );
}
