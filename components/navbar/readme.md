## Navbar component

This component provides a fully functional navbar implementation for the Bulma navbar component.

### Tests and accessibility status

The accessibility-ready status of this component is: untested.

- [x] Keyboard-only
- [x] VoiceOver & Safari (macOS)
- [x] VoiceOver & Safari (iOS)
- [ ] VoiceOver & Safari (iPadOS)
- [ ] Talkback & Chrome (Android)
- [ ] Narrator & Edge (Windows)
- [ ] NVDA & Firefox (Windows)
- [ ] Windows High Contrast mode

### HTML

The Bulmally navbar follows the Bulma navbar markup with some exceptions. Hoverable dropdowns are not accessible, that is why we do not support them. Instead, we provide an accessible markup for controlling a dropdown menu within the navbar.

The Bulma documentation uses a link as the dropdown toggler. This is bad practice, it should be a button. Bulmally dropdown toggler can be an actual link itself. This is done by adding a container that holds the link and a button for toggling the dropdown menu. This makes the link accessible and uses semantic HTML element for the toggler: a button. The button has a screen reader only text and a down arrow for sighted usage.

```
<nav class="navbar bulmally-navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
            <span class="is-sr-only">Home</span>
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" aria-hidden=true>
        </a>

        <button
            id="js-navbar-burger"
            class="navbar-burger burger"
            aria-expanded="false"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="js-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>

    <div id="js-navbar-menu" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="#">
                Home
            </a>

            <a class="navbar-item" href="#">
                Documentation
            </a>

            <div class="navbar-item has-dropdown level">
                <div class="navbar-dropdown-control">
                    <!-- The link is clickable. -->
                    <a class="navbar-link is-arrowless" href="#">
                        More
                    </a>
                    <!-- This button implements the dropdown toggler. -->
                    <button class="dropdown-toggler icon" aria-expanded=false aria-controls="js-navbar-dropdown-1">
                        <span class="is-sr-only">Open menu</span>
                        <i class="arrow" aria-hidden="true"></i>
                    </button>
                </div>

                <!--
                    Bulma does not hide dropdown menu on touch.
                    We hide it here with the modifier class.
                    Toggling is handled with JS.
                -->
                <div class="navbar-dropdown is-hidden-touch" id="js-navbar-dropdown-1">
                    <a class="navbar-item" href="#">
                        About
                    </a>
                    <a class="navbar-item" href="#">
                        Jobs
                    </a>
                    <a class="navbar-item" href="#">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="#">
                        Report an issue
                    </a>
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary" href="#">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" href="#">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
```

### JavaScript

This JS implementation is written in ES6 and uses VanillaJS to control the states in the DOM. You may use it as it is and use [Babel](https://babeljs.io/) to make it backwards compatible with older browsers. If you do not have Babel in your environment, it should be pretty straightforward to copy the required parts of this code.

```
/**
 * Class Navbar
 */
export default class Navbar {
    /**
     * This method is run automatically when the module is imported,
     * because it exports a new instance of itself.
     */
    constructor() {
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
        const dropdownMenu = this.navbarMenu.querySelector( `#${ containerId }` );

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
```

### SCSS

We use the component class name as the CSS scope for our modifications for the basic Bulma CSS code. We keep the changes to a minimum and most of this code is applied to separate the dropdown toggler from the menu link containing a dropdown menu.

```
// This file contains styles for the navbar component.
.bulmally-navbar {

    // Reset all buttons inside a navbar.
    button {
        background: none;
        border: 0;
    }

    .navbar-burger {
        &:hover {
            background: $navbar-dropdown-item-hover-background-color;
        }
    }

    .navbar-dropdown-control {
        display: flex;
        flex-direction: row;
        align-items: center;

        .navbar-link {
            flex: 1 1 auto;
            padding-right: 1rem;

            &:hover {
                // The link background is controlled on the '.has-dropdown' level.
                background: none;
            }
        }
    }

    .navbar-item {
        &.has-dropdown {
            &:hover,
            &.is-active {
                background-color: $navbar-item-hover-background-color;
            }
        }
    }

    .dropdown-toggler {
        position: relative; // Make the arrow stick to the button.
        flex: 0 0 auto;
        margin-right: .75rem;
        transition: transform $speed $easing;

        &[aria-expanded="true"] {
            transform: rotate(180deg);
        }

        .arrow {
            @extend %arrow;
            width: .75rem;
            height: .75rem;
            margin-top: -.5rem;
            border-color: $navbar-dropdown-arrow;
        }
    }
}
```
