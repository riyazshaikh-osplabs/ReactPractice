import reactImg from '../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
    console.log('Header is rendering...');

    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1 className='header-title'>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    )
}

export default Header;