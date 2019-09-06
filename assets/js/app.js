// Import main style file here.
import '../scss/app.scss';

// Import individual component classes here.
import Navbar from '../../components/navbar/navbar';
import Accordion from '../../components/accordion/accordion';
import Tabs from '../../components/tabs/tabs';
import Modal from '../../components/modal/modal';
import Message from '../../components/message/message';

// Run components and add them to the map
// the component slug being the key.
const components = {
    navbar: new Navbar(),
    accordion: new Accordion(),
    tabs: new Tabs(),
    modal: new Modal(),
    message: new Message(),
};

// Initialize documentation functionalities.
import Documentation from './documentation';
new Documentation( components );
