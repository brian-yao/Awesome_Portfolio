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
        links: {
            github: 'Lorem, ipsum dolor.',
            demo: 'Lorem ipsum dolor sit amet.',
        },
        id: 0,
    },
    {
        title: 'React Music Player',
        description:
            'Music player app built using React and CSS. Loads music data from pre-curated JSON file.',
        image: music,
        links: {
            github: 'Lorem, ipsum dolor.',
            demo: 'Lorem ipsum dolor sit amet.',
        },
        id: 1,
    },
    {
        title: 'React Gaming Site',
        description:
            'Animated web page built using React, Redux, CSS, and HTML. The game data is pulled using API from rawg.io',
        image: gaming,
        links: {
            github: 'Lorem, ipsum dolor.',
            demo: 'Lorem ipsum dolor sit amet.',
        },
        id: 2,
    },
    {
        title: 'Online Shopping Demo ',
        description:
            'Online Shop demo built using PHP and html, with some javascript.',
        image: shop,
        links: {
            github: 'Lorem, ipsum dolor.',
            demo: 'Lorem ipsum dolor sit amet.',
        },
        id: 3,
    },
    {
        title: 'To Do List App',
        description:
            'Simple todo list app built using Javascript, html and css.',
        image: checklist,
        links: {
            github: 'Lorem, ipsum dolor.',
            demo: 'Lorem ipsum dolor sit amet.',
        },
        id: 4,
    },
    {
        title: 'To be Added',
        description: 'This is a test message, hello.',
        image: tech,
        links: {
            github: 'Lorem, ipsum dolor.',
            demo: 'Lorem ipsum dolor sit amet.',
        },
        id: 5,
    },
];

export default projectData;
