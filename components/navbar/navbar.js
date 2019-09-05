/**
 * Navbar JS controller.
 */

/**
 * Class Navbar
 */
export default class Navbar {
    /**
     * This method is run when a new instance of the class is created.
     */
    constructor() {
        // This must be set for each component.
        this.documentation = require( './navbar.md' );

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
        this.navbarBurger = document.getElementById( 'js-navbar-burger' );
        this.navbarMenu = document.getElementById( 'js-navbar-menu' );
        if ( this.navbarMenu ) {
            this.dropdownTogglers = this.navbarMenu.querySelectorAll( '.dropdown-toggler' );
        }
    }

    /**
     * Add event listeners.
     */
    events() {
        if ( this.navbarBurger ) {
            this.navbarBurger.addEventListener( 'click', () => this.toggleMenu() );
        }

        if ( this.dropdownTogglers ) {
            for ( let i = 0; i < this.dropdownTogglers.length; i++ ) {
                this.dropdownTogglers[ i ].addEventListener( 'click', ( event ) => this.toggleDropdown( event ) );
            }
        }
    }

    /**
     * Handle menu toggling when the navbar burger is clicked.
     */
    toggleMenu() {
        this.navbarBurger.classList.toggle( 'is-active' );
        this.navbarMenu.classList.toggle( 'is-active' );
        this.toggleAriaExpanded( this.navbarBurger );
    }

    /**
     * Toggles a dropdown menu visibility.
     *
     * @param {Event} event A click event.
     */
    toggleDropdown( event ) {
        const target = event.target;
        const containerId = target.getAttribute( 'aria-controls' );
        const dropdownMenu = this.navbarMenu.querySelector( `#${ containerId }` );

        this.toggleAriaExpanded( target );
        dropdownMenu.classList.toggle( 'is-hidden-touch' );
        this.toggleAncestorActiveState( target, 'has-dropdown' );
    }

    /**
     * Set the 'is-active' state for an ancestor of an element
     * with the matching class name.
     *
     * @param {HTMLElement} child A child element to start the search from.
     * @param {HTMLElement} className A target class name for the ancestor.
     */
    toggleAncestorActiveState( child, className ) {
        let ancestor = child.parentNode;
        while ( ancestor ) {
            if ( ancestor.classList.contains( className ) ) {
                ancestor.classList.toggle( 'is-active' );
                return;
            }
            ancestor = ancestor.parentNode ? ancestor.parentNode : false;
        }
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
