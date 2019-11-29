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
