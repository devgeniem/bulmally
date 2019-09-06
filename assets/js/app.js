// Import main style file here.
import '../scss/app.scss';

// Import individual component classes here.
import BoilerPlate from '../../components/boilerplate/boilerplate';
import Navbar from '../../components/navbar/navbar';
import Accordion from '../../components/accordion/accordion';
import Tabs from '../../components/tabs/tabs';
import Message from '../../components/message/message';

// Run components and add them to the map
// the component slug being the key.
const components = {
    boilerplate: new BoilerPlate(),
    navbar: new Navbar(),
    accordion: new Accordion(),
    tabs: new Tabs(),
    message: new Message(),
};

// Initialize documentation functionalities.
import Documentation from './documentation';
new Documentation( components );
