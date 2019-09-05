// Import main style file here.
import '../scss/app.scss';

// Import individual component classes here.
import BoilerPlate from '../../components/boilerplate/boilerplate';
import Navbar from '../../components/navbar/navbar';
import Accordion from '../../components/accordion/accordion';

// Run components and add them to the map
// the component slug being the key.
const components = {
    boilerplate: new BoilerPlate(),
    navbar: new Navbar(),
    accordion: new Accordion(),
};

// Initialize documentation functionalities.
import Documentation from './documentation';
new Documentation( components );
