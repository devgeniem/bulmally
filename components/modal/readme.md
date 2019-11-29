## Modal component

This component provides the needed JavaScript functionalities for the [Bulma modal](https://bulma.io/documentation/components/modal/). Accessibility is implemented with JavaScript making the DOM as simple as possible. There are two modal elements on this page to demonstrate that you can have multiple modals on the same page. All Bulma modal styles are supported.

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

The HTML markup is fairly simple. You need to have a button that controls a corresponding modal. In the modal overlay you may want to have a closing button although it is not necessary. Modals can also be closed with ESC and buttons inside them with __modal-close-button__ classes.

### Requirements

The modal containers should be placed at the bottom of your page markup so that their __aria-role="modal"__ attribute works properly.

```
<!-- A button that controls opening the first modal -->

<button
    class="modal-button button is-large is-info"
    aria-expanded="false"
    aria-controls="js-bulmally-modal-1">
        Open modal
</button>

<!-- Markup of the first modal -->

<div role="dialog"
    id="js-bulmally-modal-1"
    class="modal"
    aria-modal="true"
    aria-labelledby="js-bulmally-modal-1-title">

    <div class="modal-background"></div>

    <div class="modal-content has-background-white">

        <section class="section">

            <h3 id="js-bulmally-modal-1-title" class="h4 title" tabindex="0">Modal heading</h3>

            <div class="content">

                <p>Lorem ipsum dolor sit amet consectetur <a href="">adipisicing elit</a>. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil <a href="">odio nisi iusto</a> ipsa laborum neque fugit.</p>

                <h3>Lorem ipsum dolor sit amet consectetur</h3>

                <figure class="image is-marginless-horizontally">
                    <img src="https://via.placeholder.com/1600x900.png?text=A+sample+image" alt="">
                </figure>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, <a href="">explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil</a> odio nisi iusto ipsa laborum neque fugit.</p>

                <button class="button modal-close-button is-danger is-large"
                    aria-controls="js-bulmally-modal-1">
                    Close modal
                </button>
            </div>

        </section>

    </div>

    <button class="modal-close is-large"
        aria-label="close modal"
        aria-controls="js-bulmally-modal-1"></button>

</div>
```

### SCSS

The only styling changes are made to the focus style of the outer modal closing button.
```
.modal-close {
    &:focus {
        outline: $white dotted .125rem;
    }
}

```

### JavaScript

Bulmally tabs implements the WAI-ARIA [modal design pattern](https://www.w3.org/TR/wai-aria-practices/#dialog_modal). JavaScript code is based on the WAI-ARIA example for [a modal dialog](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html). The implementation provides the following features:

- Modal navigation by pressing the tab key.
- Focusing the first element inside each opened modal.
- Focus looping, so that focusable elements inside the modal can be easily navigated.
- Returning focus back to the original element that opened the modal.

We extended the WAI-ARIA example with the ability to have multiple modal elements on the same page. If you want to have many modals on one page, you need to make sure that each modal gets a unique id and its opening and closing buttons match the modal id in their __aria-controls__ attributes.

```
/**
 * Modal JS controller.
 */

/**
 * Class Modal
 */
export default class Modal {
    /**
     * This method is run when a new instance of the class is created.
     */
    constructor() {
        // This must be set for each component.
        this.documentation = require( './modal.md' );

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
        this.rootEl = document.documentElement;
        this.$modals = [];
        this.$modalButtons = document.querySelectorAll( '.modal-button' );
        this.$modalCloses = document.querySelectorAll( '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .modal-close-button' );
    }

    /**
     * Add event listeners.
     */
    events() {
        // Bind handlers to each modal open button.
        if ( this.$modalButtons.length > 0 ) {
            this.$modalButtons.forEach( ( button ) => {
                const modal = document.getElementById( button.getAttribute( 'aria-controls' ) );
                modal.openingButton = button;
                modal.isOpened = 0;
                this.$modals.push( modal );
                button.addEventListener( 'click', () => {
                    this.openModal( modal );
                    this.toggleAriaExpanded( button );
                } );
            } );
        }

        // Bind handlers to each modal close button.
        if ( this.$modalCloses.length > 0 ) {
            this.$modalCloses.forEach( ( button ) => {
                button.addEventListener( 'click', () => {
                    this.closeModals();
                } );
            } );
        }

        // Bind modal closing handler to ESC key.
        document.addEventListener( 'keydown', ( event ) => {
            const e = event || window.event;
            if ( e.keyCode === 27 ) {
                this.closeModals();
            }
        } );
    }

    /**
     * This handles opening the modal that was associated with
     * the clicked modal opening button.
     *
     * @param {Element} modal The modal that is opened.
     */
    openModal( modal ) {
        this.rootEl.classList.add( 'is-clipped' );
        modal.classList.add( 'is-active' );
        modal.isOpened = 1;

        // Collect each focusable element inside the modal.
        const focusableElements = modal.querySelectorAll( 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]' );

        // Set first and last focusable element as class parameters.
        // Set focus to the first focusable element.
        if ( focusableElements.length ) {
            modal.focusableElements = focusableElements;
            modal.focusableElements.first = focusableElements[ 0 ];
            modal.focusableElements.last = focusableElements[ focusableElements.length - 1 ];
            modal.focusableElements.first.focus();

            // Bind modal focus loop handler to document when modal is opened.
            // If pressed key was 'Tab', call tab handling method.
            document.addEventListener( 'keydown', ( event ) => {
                const e = event || window.event;
                if ( e.keyCode === 9 ) {
                    this.handleModalTabbing( e, modal );
                }
            } );
        }
    }

    /**
     * This closes all modals and sets focus back to the element that was used
     * to open the current visible modal.
     */
    closeModals() {
        this.rootEl.classList.remove( 'is-clipped' );
        this.$modals.forEach( ( modal ) => {
            modal.classList.remove( 'is-active' );
            if ( modal.isOpened ) {
                modal.openingButton.focus();
                this.toggleAriaExpanded( modal.openingButton );
                modal.isOpened = 0;
            }
        } );
    }

    /**
     * This handles Tab key presses and loops focus back to the first
     * focusable element inside the modal. If a user navigates backwards
     * using shift + tab, the loop is handled properly to the opposite direction.
     *
     * @param {event} e Key press event.
     * @param {Element} modal The modal that is currently visible.
     */
    handleModalTabbing( e, modal ) {
        // If shift + tab pushed.
        if ( e.shiftKey ) {
            // Focus the last element if focus was on the first element.
            if ( modal.focusableElements.first === document.activeElement ) {
                e.preventDefault();
                modal.focusableElements.last.focus();
            }
        } else if ( modal.focusableElements.last === document.activeElement ) {
            e.preventDefault();
            modal.focusableElements.first.focus();
        }
    }

    /**
     * Get the toggler's aria-expanded current state and set a new opposite state to it.
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

