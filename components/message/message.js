/**
 * Message JS controller.
 */

/**
 * Class Message
 */
export default class Message {
    /**
     * Construct the component handler.
     */
    constructor() {
        // This must be set for each component.
        this.documentation = require( './readme.md' );

        document.addEventListener(
            'DOMContentLoaded',
            () => {
                this.initMessages();
            }
        );
    }

    /**
     * Find all message elements and initalize their closing functionality.
     */
    initMessages() {
        const messages = document.querySelectorAll( '.bulmally-message' );

        for ( let i = 0; i < messages.length; i++ ) {
            Message.initMessage( messages[ i ] );
        }
    }

    /**
     * Initializes closing functionalities for a message element.
     *
     * @param {HTMLElement} messageElement A message element.
     */
    static initMessage( messageElement ) {
        const deleteButton = messageElement.querySelector( '.delete' );
        deleteButton.message = messageElement;

        deleteButton.addEventListener( 'click', Message.delete );
    }

    /**
     * Handles the click event of a delete button and deletes the message.
     * Focus is set on the next element before deleting the element.
     *
     * @param {Event} event An event object.
     */
    static delete( event ) {
        const message = event.target.message;
        let focusTo = message.nextElementSibling;

        if ( ! focusTo ) {
            // If there's no sibling for the message,
            // move focus to the parent node.
            focusTo = message.parentNode;
        }

        // Force ability to give focus on the sibling.
        if ( focusTo.tabIndex !== 0 ) {
            focusTo.setAttribute( 'tabindex', -1 );
        }
        focusTo.focus();

        message.remove();
    }
}
