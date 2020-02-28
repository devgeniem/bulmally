## Accordion component

This component provides an accordion functionality with added accessible JS implementation.

### Tests and accessibility status

The accessibility-ready status of this component is: untested.

- [x] Keyboard-only
- [x] VoiceOver & Safari (macOS)
- [x] VoiceOver & Safari (iOS)
- [ ] VoiceOver & Safari (iPadOS)
- [ ] Talkback & Chrome (Android)
- [ ] Narrator & Edge (Windows)
- [ ] NVDA & Firefox (Windows)
- [x] Windows High Contrast mode

### HTML

The Bulmally accordion's titles are inside a button so that they are focusable and clickable.

```
<div id="js-bulmally-accordion" class="bulmally-accordion">
    <div class="columns is-multiline">

        <div class="column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop">
            <div class="accordion-row box">
                <h3 class="h4 accordion-title">
                    <!-- This controls the section. Toggling the state is done with JS -->
                    <button
                        id="accordion-title-button-1"
                        class="accordion-title-button"
                        aria-expanded="false"
                        aria-controls="accordion-content-1">

                        <div class="level is-mobile">
                            <div class="level-left can-shrink">
                                <span class="level-item can-shrink accordion-title-text">
                                    This heading is clickable
                                </span>
                            </div>
                            <div class="level-right">
                                <span class="level-item icon accordion-title-icon">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </button>
                </h3>

                <!-- The ID of this element has to be dynamically added. -->
                <div id="accordion-content-1" class="accordion-content">
                    <div class="content is-small">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.</p>

                        <h3>Lorem ipsum dolor sit amet consectetur</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Next accordion row -->

        <div class="column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop">
            <div class="accordion-row box">
                <h3 class="h4 accordion-title">
                    <!-- This controls the section. Toggling the state is done with JS -->
                    <button
                        id="accordion-title-button-1"
                        class="accordion-title-button"
                        aria-expanded="false"
                        aria-controls="accordion-content-1">

                        <div class="level is-mobile">
                            <div class="level-left can-shrink">
                                <span class="level-item can-shrink accordion-title-text">
                                    This heading is clickable
                                </span>
                            </div>
                            <div class="level-right">
                                <span class="level-item icon accordion-title-icon">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </button>
                </h3>

                <!-- The ID of this element has to be dynamically added. -->
                <div id="accordion-content-1" class="accordion-content">
                    <div class="content is-small">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.</p>

                        <h3>Lorem ipsum dolor sit amet consectetur</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
```

### JavaScript

This JS implementation is written in ES6 and uses VanillaJS to control the states in the DOM. You may use it as it is and use [Babel](https://babeljs.io/) to make it backwards compatible with older browsers. If you do not have Babel in your environment, it should be pretty straightforward to copy the required parts of this code.

```
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
        this.documentation = require( './accordion.md' );

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
        }

        // Hide all toggleable elements with JS.
        for ( let i = 0; i < this.dropdowns.length; i++ ) {
            this.dropdowns[ i ].classList.add( 'is-hidden' );
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
```

### SCSS

We use the component class name as the CSS scope for our modifications to the basic Bulma CSS code.

```
// This file contains all styles for the accordion element.
.bulmally-accordion {

    .accordion-title-button {
        appearance: none;

        background-color: $white;
        border: 0;
        box-shadow: none;
        width: 100%;

        &[aria-expanded="true"] {
            .icon {
                transform: rotate(-180deg);
            }
        }
    }

    .accordion-title-icon {
        transition: transform .2s ease;
    }

    .accordion-content {
        margin-top: 1.25rem;
        padding-top: 1.25rem;
        border-top: .0625rem solid $grey-lighter;
    }

    .can-shrink {
        flex-shrink: 1;
    }
}
```
