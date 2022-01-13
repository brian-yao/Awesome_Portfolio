import tech from '../images/sample-pic.jpg';
import cat from '../images/cat.jpg';
import music from '../images/music-player.jpg';
import gaming from '../images/gaming.jpg';
import checklist from '../images/checklist.jpg';
import shop from '../images/shopping.jpg';

const projectData = [
    {
        title: 'Cat Voter',
        description:
            'User can vote to "like" or "nope" a cat and it will be saved to their list using session storage. The saved cats are then pulled from stored array and displayed on screen. Uses the Cat API, built using HTML CSS and JS.',
        image: cat,
        github: 'Lorem, ipsum dolor.',
        demo: 'https://cat-voter-app.web.app/',

        id: 0,
    },
    {
        title: 'React Music Player',
        description:
            'Music player app built using React and CSS. Loads music data from pre-curated JSON file.',
        image: music,
        demo: 'https://vibrant-lovelace-352795.netlify.app/',
        id: 1,
    },
    {
        title: 'React Gaming Site',
        description:
            'Animated web page built using React, Redux, CSS, and HTML. The game data is pulled using API from rawg.io',
        image: gaming,
        demo: 'https://brian-react-gaming.netlify.app',
        id: 2,
    },
    {
        title: 'Online Shopping Demo ',
        description:
            'Online Shop demo built using PHP and html, with some javascript.',
        image: shop,
        demo: 'http://eve.kean.edu/~yaob/CPS5920/',
        id: 3,
    },
    {
        title: 'To Do List App',
        description:
            'Simple todo list app built using Javascript, html and css.',
        image: checklist,
        demo: 'https://todolist-byao.web.app',
        id: 4,
    },
    {
        title: 'Movie List App',
        description: 'This is a test message, hello.',
        image: tech,
        github: 'Lorem, ipsum dolor.',
        demo: 'https://brian-movie-app.netlify.app',
        id: 5,
    },
];

export default projectData;
