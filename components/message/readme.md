## Message component

Bulma describes the [message component](https://bulma.io/documentation/components/message/) as a colored message block, to emphasize part of your page. Bulmally implements the closing functionality for it. We also modify the message HTML markup a little to make it semantically better.

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

Instead of an article, we encourage to use a section tag for the message container. Heading should be inside a header element and the heading should have a heading tag with a level following the structure of your page. As an example, we use _h2_ since the element probably does not contain the main heading of a page. Inside the delete button, you should add a descriptive text inside the span element targeted for screen readers. Using a span element instead of _aria-label_ we support language translators that do not translate HTML attributes _(e.g. Google Translate)_.

```
<section class="bulmally-message message">
    <header class="message-header">
        <h2>Hello World</h2>
        <button class="delete">
            <span class="is-sr-only">Close message</span>
        </button>
    </header>
    <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </div>
</section>
```

### JavaScript

JavaScript handles removing the element and moving focus to the next sibling of the message element. If the message element has no siblings, focus is moved to the parent element. We encourage placing the message element so that is has a text element next to it. This makes the focus change logical for a screen reader to announce it after the previously focused delete button and the whole message element is removed from the DOM.

If you create messages dynamically, the _Message_ class has static methods for initalizing new message components. The _initMessages()_ method has an example of how to initalize a single message component.

```
/**
 * Class Message
 */
export default class Message {
    /**
     * Construct the component handler.
     */
    constructor() {
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
```

### SCSS

The heading of the message element should be inside a heading tag. Bulma styles headings without any weight by default. We set the correct weight with this simple override.

```
.bulmally-message {

    .message-header {
        h1, h2, h3, h4, h5, h6 {
            // Override heading weight.
            font-weight: $message-header-weight;
        }
    }

}
```
