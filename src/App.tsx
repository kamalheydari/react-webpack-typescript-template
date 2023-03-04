import "./styles/global.css";
import Image from "./assets/react-image.png";
import Icon from "./assets/music.svg";
export default function App() {
  return (
    <div>
      <h1>React typescript Webpack Starter Template</h1>
      <p>mode : <b>{process.env.NODE_ENV}</b></p>
      <img src={Image} alt='React Logo' width={450} height={250} />
      <img src={Icon} alt='Music Logo' />
    </div>
  );
}
