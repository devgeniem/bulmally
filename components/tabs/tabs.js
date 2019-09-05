/**
 * Tabs JS controller.
 */

/**
 * Class Tabs
 */
export default class Tabs {
    /**
     * This method is run automatically when the module is imported,
     * because it exports a new instance of itself.
     */
    constructor() {
        this.cache();

        // This must be set for each component.
        this.documentation = require( './tabs.md' );

        document.addEventListener(
            'DOMContentLoaded',
            () => {
                this.docReady();
            }
        );
    }

    /**
     * Cache dom elements for use in the class's methods
     */
    cache() {
    }

    /**
     * Add event listeners.
     */
    events() {}

    /**
     * Run when the document is ready.
     */
    docReady() {
        this.cache();
        this.events();
    }
}
