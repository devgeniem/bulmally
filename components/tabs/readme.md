## Tabs component

This component provides the needed JavaScript functionalities for the [Bulma tabs](https://bulma.io/documentation/components/tabs/). Accessibility is implemented with JavaScript making the DOM as simple as possible. There are two tab elements on this page to demonstrate that you can have multiple tabs on the same page. All Bulma tab styles are supported.

### Tests and accessibility status

The accessibility-ready status of this component is: untested.

- [x] Keyboard-only
- [ ] VoiceOver & Safari (macOS)
- [ ] VoiceOver & Safari (iOS)
- [ ] VoiceOver & Safari (iPadOS)
- [ ] Talkback & Chrome (Android)
- [ ] Narrator & Edge (Windows)
- [ ] NVDA & Firefox (Windows)
- [ ] Windows High Contrast mode

### Known issues

- In VO & Safari (macOS), all tabs are navigable with tab key, even though they should be navigable only with arrow keys

### HTML

Bulma uses buttons as tabs. We use anchor links instead. This makes tabs accessible even if JavaScript is not available. Each tab is an anchor link taking the user to the corresponding tab panel. If JavaScript is successfully loaded, all tab containers are queried from the DOM and their functionalities are initialized on the document ready event.

### Requirements

- Add a container for the tabs and the panels with a class named _"bulmally-tabs"_.
- The _href_ attribute of the link must be the id of the tab panel. This enables linking the tab to the panel.
- The tab panels should be placed directly after the tabs to create a logical tab order.

```
<div class="bulmally-tabs">
    <div class="tabs">
        <ul aria-label="Add a description for the tabs here">
            <li class="is-active"><a href="#first">First</a></li>
            <li><a href="#second">Second</a></li>
            <li><a href="#third">Third</a></li>
            <li><a href="#fourth">Fourth</a></li>
        </ul>
    </div>

    <div>
        <div id="first">
            <h2>First</h2>
        </div>
        <div id="second">
            <h2>Second</h2>
        </div>
        <div id="third">
            <h2>Third</h2>
        </div>
        <div id="fourth">
            <h2>Fourth</h2>
        </div>
    </div>

</div>
```

### SCSS

The only styling required is the hidden state of the panels. This is done by using the _"hidden"_ attribute as the CSS selector.

```
.bulmally-tabs {

    &-panel[hidden] {
        display: none;
    }

}
```

### JavaScript

Bulmally tabs implements the WAI-ARIA [tabs design pattern](https://www.w3.org/TR/wai-aria-practices/#tabpanel). JavaScript code is based on the WAI-ARIA example for [manually activated tabs]((https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html)). The implementation provides the following features:

- Tab navigation with arrow keys.
- Tab panel activation by pressing enter or space on the focused tab.
- Tab panel activation on mouse click event.
- Focus handling for all interactions.

We extended the WAI-ARIA example with the ability to have multiple tab elements on the same page. If you create tabs dynamically _(after the document ready event)_, you can initialize their accessibility features by passing the Bulmally tabs element container for the _init()_ method. You can find an example of this in the _initAllTabs()_ method that finds and initializes all Bulmally tab elements on the document ready event.

```
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
        const tablist = tabsElement.querySelector( '.bulmally-tabs-tablist' );
        const tabs = tablist.querySelectorAll( 'a' );
        const tabPanels = tabsElement.querySelectorAll( '.bulmally-tabs-panel' );
        const tabListItems = tablist.querySelectorAll( 'li' );

        // Store references to the first and the last tab for focus manipulations.
        // Initialize an array for storing references to all tabs.
        tablist.firstTab = tabs[ 0 ];
        tablist.lastTab = tabs[ tabs.length - 1 ];
        tablist.tabs = [];
        tablist.panels = [];

        // Tabs must be initialized first.
        for ( let i = 0; i < tabs.length; i++ ) {
            this.initTab( tabs[ i ], tablist, i );
        }

        // After tabs, initalize the corresponding tabs.
        for ( let i = 0; i < tabPanels.length; i++ ) {
            this.initPanel( tabPanels[ i ], tabs[ i ], tablist, i );
        }

        for ( let i = 0; i < tabListItems.length; i++ ) {
            // All <li> elements must have a role of presentation.
            tabListItems[ i ].setAttribute( 'role', 'presentation' );
        }
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

        tab.panel = document.getElementById( panelId );

        tab.role = 'tab';
        tab.setAttribute( 'aria-selected', 'false' );
        tab.setAttribute( 'aria-controls', panelId );
        tab.tabindex = -1;

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
            this.activateTab( event.target, true );
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
```

