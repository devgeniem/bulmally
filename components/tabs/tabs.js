/**
 * Tabs JS controller.
 */

// For easy reference
const keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    enter: 13,
    space: 32,
};

// Add or subtract depending on key pressed
const direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1,
};

/**
 * Class Tabs
 */
export default class Tabs {
    /**
     * This method is run automatically when the module is imported,
     * because it exports a new instance of itself.
     */
    constructor() {
        // This must be set for each component.
        this.documentation = require( './readme.md' );

        document.addEventListener(
            'DOMContentLoaded',
            () => {
                this.initAllTabs();
            }
        );
    }

    /**
     * Find all tab elements and initialize their functionalities.
     * This method should be run on document ready to initialize all
     * tabs in the DOM after the page is loaded.
     */
    initAllTabs() {
        this.allTabs = document.querySelectorAll( '.bulmally-tabs' );

        if ( ! this.allTabs ) {
            // No tabs found.
            return;
        }

        for ( let i = 0; i < this.allTabs.length; i++ ) {
            this.init( this.allTabs[ i ] );
        }
    }

    /**
     * Initalize a single tabs element.
     *
     * @param {HTMLElement} tabsElement Bulmally tabs container.
     */
    init( tabsElement ) {
        const tabsContainer = tabsElement.querySelector( '.tabs' );
        const tablist = tabsContainer.querySelector( 'ul' );
        const tabs = tablist.querySelectorAll( 'a' );
        const tabListItems = tablist.querySelectorAll( 'li' );

        // Store references to the first and the last tab for focus manipulations.
        // Initialize an array for storing references to all tabs.
        tablist.firstTab = tabs[ 0 ];
        tablist.lastTab = tabs[ tabs.length - 1 ];
        tablist.tabs = [];
        tablist.panels = [];

        // Set tablist role
        tablist.setAttribute( 'role', 'tablist' );

        // Initialize tabs.
        for ( let i = 0; i < tabs.length; i++ ) {
            this.initTab( tabs[ i ], tablist, i );
        }

        for ( let i = 0; i < tabListItems.length; i++ ) {
            // All <li> elements must have a role of presentation.
            tabListItems[ i ].setAttribute( 'role', 'presentation' );
        }

        // Activate the first tab
        this.activateTab( tablist.firstTab );
    }

    /**
     * Initialize functionalities for a tab element.
     *
     * @param {HTMLElement} tab A tab link.
     * @param {HTMLElement} tablist The tablist element for the tab.
     * @param {number} index The current element index in the tab list.
     */
    initTab( tab, tablist, index ) {
        const panelId = tab.hash.slice( 1 );

        // Create a unique id using the tab link's hash
        tab.id = `tab-${ panelId }`;

        // Make a two-way reference of the tab and its tablist.
        tab.tablist = tablist;
        tablist.tabs[ index ] = tab;

        // Store the index.
        tab.index = index;

        // Initialize the corresponding panel.
        tab.panel = document.getElementById( panelId );
        this.initPanel( tab.panel, tab, tablist, index );

        tab.setAttribute( 'role', 'tab' );
        tab.setAttribute( 'aria-selected', 'false' );
        tab.setAttribute( 'aria-controls', panelId );
        tab.setAttribute( 'tabindex', '-1' );

        tab.addEventListener( 'click', ( event ) => this.clickEventListener( event ) );
        tab.addEventListener( 'keydown', ( event ) => this.keydownEventListener( event ) );
        tab.addEventListener( 'keyup', ( event ) => this.keyupEventListener( event ) );
    }

    /**
     * Initalize panel functionalities.
     *
     * @param {HTMLElement} panel The panel element.
     * @param {HTMLElement} tab The corresponding tab element.
     * @param {HTMLElement} tablist The tablist element for the tab.
     * @param {number} index The index in panels.
     */
    initPanel( panel, tab, tablist, index ) {
        if ( index !== 0 ) {
            // Hide all but the first tab.
            panel.hidden = true;
        }

        panel.setAttribute( 'tabindex', '0' );
        panel.setAttribute( 'role', 'tabpanel' );
        panel.setAttribute( 'aria-labelledby', tab.id );

        // Store a reference for the tablist.
        tablist.panels.push( panel );
    }

    /**
     * When a tab is clicked, activateTab is fired to activate it
     *
     * @param {Event} event Event object.
     */
    clickEventListener( event ) {
        // Prevent the default click event.
        event.preventDefault();

        const tab = event.target;
        this.activateTab( tab, false );
    }

    /**
     * Handle keydown on tabs
     *
     * @param {Event} event Event object.
     */
    keydownEventListener( event ) {
        const key = event.keyCode;
        const tablist = event.target.tablist;

        switch ( key ) {
        case keys.end:
            event.preventDefault();
            // Activate last tab
            this.focusLastTab( tablist );
            break;
        case keys.home:
            event.preventDefault();
            // Activate first tab
            this.focusFirstTab( tablist );
            break;

        // Up and down are in keydown to prevent page scroll.
        case keys.up:
        case keys.down:
            this.determineOrientation( event );
            break;
        case keys.enter:
        case keys.space:
            event.preventDefault();
            this.activateTab( event.target, false );
            break;
        }
    }

    /**
     * Handle keyup on tabs
     *
     * @param {Event} event Event object.
     */
    keyupEventListener( event ) {
        const key = event.keyCode;

        switch ( key ) {
        case keys.left:
        case keys.right:
            this.determineOrientation( event );
            break;
        }
    }

    /**
     * When a tablist's aria-orientation is set to vertical,
     * only up and down arrow should function.
     * only up and down arrow should function.
     *
     * @param {Event} event The event object.
     */
    determineOrientation( event ) {
        const key = event.keyCode;
        const vertical = event.target.tablist.getAttribute( 'aria-orientation' ) === 'vertical';
        let proceed = false;

        if ( vertical ) {
            if ( key === keys.up || key === keys.down ) {
                event.preventDefault();
                proceed = true;
            }
        } else if ( key === keys.left || key === keys.right ) {
            proceed = true;
        }

        if ( proceed ) {
            this.switchTabOnArrowPress( event );
        }
    }

    /**
     * Either focus the next, previous, first, or last tab
     * depending on the key pressed.
     *
     * @param {Event} event Event object.
     */
    switchTabOnArrowPress( event ) {
        const pressed = event.keyCode;

        if ( direction[ pressed ] ) {
            const target = event.target;
            const tablist = target.tablist;
            const tabs = tablist.tabs;
            if ( target.index !== undefined ) {
                if ( tabs[ target.index + direction[ pressed ] ] ) {
                    tabs[ target.index + direction[ pressed ] ].focus();
                } else if ( pressed === keys.left || pressed === keys.up ) {
                    this.focusLastTab( tablist );
                } else if ( pressed === keys.right || pressed === keys.down ) {
                    this.focusFirstTab( tablist );
                }
            }
        }
    }

    /**
     * Activates any given tab panel
     *
     * @param {HTMLElement} tab A tab element.
     * @param {boolean} setFocus Whether to set focus.
     */
    activateTab( tab, setFocus ) {
        // Deactivate all other tabs
        this.deactivateTabs( tab.tablist );

        // Remove tabindex attribute.
        tab.removeAttribute( 'tabindex' );

        // Set the tab as selected.
        tab.setAttribute( 'aria-selected', 'true' );

        // Set Bulma class.
        tab.parentNode.classList.add( 'is-active' );

        // Remove hidden attribute from tab panel to make it visible.
        tab.panel.removeAttribute( 'hidden' );

        // Set focus when required.
        if ( setFocus ) {
            tab.panel.focus();
        }
    }

    /**
     * Deactivate all tabs and tab panels
     *
     * @param {HTMLElement} tablist The tablist element.
     */
    deactivateTabs( tablist ) {
        for ( let t = 0; t < tablist.tabs.length; t++ ) {
            tablist.tabs[ t ].parentNode.classList.remove( 'is-active' );
            tablist.tabs[ t ].setAttribute( 'tabindex', '-1' );
            tablist.tabs[ t ].setAttribute( 'aria-selected', 'false' );
        }

        for ( let p = 0; p < tablist.panels.length; p++ ) {
            tablist.panels[ p ].setAttribute( 'hidden', 'hidden' );
        }
    }

    /**
     * Focus on the first tab in the tablist of the given tab.
     *
     * @param {HTMLElement} tablist A tablist element.
     */
    focusFirstTab( tablist ) {
        tablist.firstTab.focus();
    }

    /**
     * Focus on the last tab in the tablist of the given tab.
     *
     * @param {HTMLElement} tablist A tablist element.
     */
    focusLastTab( tablist ) {
        tablist.lastTab.focus();
    }
}
