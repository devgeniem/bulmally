/**
 * Accordion JS controller.
 */

/**
 * Class Accordion
 */
export default class Accordion {
    /**
     * This method is run when a new instance of the class is created.
     */
    constructor() {
        // This must be set for each component.
        this.documentation = require( './readme.md' );

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
        this.mainContainer = document.getElementById( 'js-bulmally-accordion' );

        if ( this.mainContainer ) {
            this.dropdownTogglers = this.mainContainer.querySelectorAll( '.accordion-title-button' );
            this.dropdowns = this.mainContainer.querySelectorAll( '.accordion-content' );

            // Hide all toggleable elements with JS.
            for ( let i = 0; i < this.dropdowns.length; i++ ) {
                this.dropdowns[ i ].classList.add( 'is-hidden' );
            }
        }
    }

    /**
     * Add event listeners.
     */
    events() {
        if ( this.dropdownTogglers ) {
            for ( let i = 0; i < this.dropdownTogglers.length; i++ ) {
                this.dropdownTogglers[ i ].addEventListener( 'click', () => this.toggleDropdown( this.dropdownTogglers[ i ] ) );
            }
        }
    }

    /**
     * Toggles a dropdown content visibility.
     *
     * @param {HTMLButtonElement} clickedToggler The toggler button that was clicked.
     */
    toggleDropdown( clickedToggler ) {
        const containerId = clickedToggler.getAttribute( 'aria-controls' );
        const dropDownContent = this.mainContainer.querySelector( `#${ containerId }` );

        this.toggleAriaExpanded( clickedToggler );
        dropDownContent.classList.toggle( 'is-hidden' );
    }

    /**
     * Get the toggler's aria-expanded current state and set a new opposite state to it.
     * Also set the opened container's aria-hidden state to the new value's opposite.
     *
     * @param {HTMLElement} toggler The toggler element.
     */
    toggleAriaExpanded( toggler ) {
        const ariaExpandedState = toggler.getAttribute( 'aria-expanded' ) === 'false' ? true : false;
        toggler.setAttribute( 'aria-expanded', ariaExpandedState );
    }

    /**
     * Run when the document is ready.
     */
    docReady() {
        this.cache();
        this.events();
    }
}
