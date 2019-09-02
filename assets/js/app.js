// Import main style file here.
import '../scss/app.scss';

// Import individual component classes here.
import BoilerPlate from '../../components/boilerplate/boilerplate.js';

// Run components and add them to the map
// the component slug being the key.
const components = {
    boilerplate: new BoilerPlate(),
};

// Initialize documentation functionalities.
import Documentation from './documentation';
new Documentation( components );
