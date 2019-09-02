// This adds functionalities to add higlighted markdown supported documentation
// for Bulmally compontents.

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';

hljs.registerLanguage( 'javascript', javascript );
hljs.registerLanguage( 'scss', scss );

class Documentation {
    /**
     * Constructor for documentation handling.
     *
     * @param {Object} components The component objects map.
     */
    constructor( components ) {
        this.components = components;

        document.addEventListener(
            'DOMContentLoaded',
            () => {
                this.initDocumentation();
            }
        );
    }

    /**
     * Initializes the markdown documentation if on a
     */
    initDocumentation() {
        const pathname = window.location.pathname;

        for ( const slug in this.components ) {
            const component = this.components[ slug ];

            if ( ! pathname.includes( slug ) || ! component.documentation ) {
                // Return, if this component is not currently viewed
                // or the component does not contain documentation.
                continue;
            }

            // Get the container for the markdown document.
            const docContainer = document.getElementById( 'js-markdown' );

            if ( ! docContainer ) {
                continue;
            }

            // Add documentation to the container.
            docContainer.innerHTML = component.documentation;

            // Highlight code blocks.
            docContainer.querySelectorAll( 'code' ).forEach( ( block ) => {
                // Wrap all code blocks with a pre tag.
                const wrapper = document.createElement( 'pre' );
                block.parentNode.insertBefore( wrapper, block );
                wrapper.appendChild( block );

                hljs.highlightBlock( block );
            } );
        }
    }
}

export default Documentation;
