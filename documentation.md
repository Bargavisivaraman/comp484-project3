# Complete MDN Documentation Reference

## JavaScript Methods and Properties Used

### Console Methods
- **console.log()**
  - **Description:** Outputs a message to the web console
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Console/log
  - **Used in:** Task 1 - Verification

---

### Document Object Model (DOM) Selection

- **document.getElementById()**
  - **Description:** Returns an element object representing the element whose id property matches the specified string
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  - **Used in:** Tasks 3, 4, 5, 7, 8, 10

- **document.querySelector()**
  - **Description:** Returns the first Element within the document that matches the specified selector
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  - **Alternative implementation for:** Task 3

- **document.querySelectorAll()**
  - **Description:** Returns a static NodeList representing a list of elements matching the specified group of selectors
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  - **Used in:** Task 9

---

### Element Properties

- **Element.innerHTML**
  - **Description:** Gets or sets the HTML or XML markup contained within the element
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  - **Used in:** Tasks 3, 8

- **Element.textContent**
  - **Description:** Represents the text content of a node and its descendants
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  - **Alternative for:** Task 3

- **HTMLElement.style**
  - **Description:** Returns a CSSStyleDeclaration object representing the element's inline style attribute
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
  - **Used in:** Task 7, Task 9

- **Element.setAttribute()**
  - **Description:** Sets the value of an attribute on the specified element
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
  - **Used in:** Task 4

- **HTMLElement.dataset**
  - **Description:** Provides read/write access to custom data attributes (data-*) on elements
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
  - **Alternative for:** Task 4

---

### classList Methods

- **Element.classList**
  - **Description:** Returns a live DOMTokenList collection of the class attributes of the element
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  - **Used in:** Tasks 5, 7, 10

- **classList.toggle()**
  - **Description:** Toggles a class value; removes it if it exists, adds it if it doesn't
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
  - **Used in:** Tasks 5, 10

- **classList.contains()**
  - **Description:** Returns a boolean indicating whether the given class exists in the element's class list
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains
  - **Used in:** Task 7

- **classList.add()**
  - **Description:** Adds specified class values to the element's class list
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
  - **Alternative for:** Task 5

- **classList.remove()**
  - **Description:** Removes specified class values from the element's class list
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
  - **Used in:** Task 10, Alternative for Task 5

---

### Event Handling

- **EventTarget.addEventListener()**
  - **Description:** Sets up a function to be called whenever the specified event is delivered to the target
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  - **Used in:** Tasks 5, 10, Extra Features

- **Event.preventDefault()**
  - **Description:** Tells the user agent that if the event does not get explicitly handled, its default action should not be taken
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  - **Used in:** Task 6

- **Event object**
  - **Description:** Represents an event which takes place in the DOM
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Event
  - **Used in:** Tasks 5, 6

---

### Dynamic Content Creation

- **document.createElement()**
  - **Description:** Creates the HTML element specified by tagName
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  - **Used in:** Task 8

- **Node.appendChild()**
  - **Description:** Adds a node to the end of the list of children of a specified parent node
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  - **Used in:** Task 8

- **Element.append()**
  - **Description:** Inserts a set of Node objects or strings after the last child of the Element
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  - **Alternative for:** Task 8

- **Element.remove()**
  - **Description:** Removes the element from the DOM
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
  - **Used in:** Extra Feature - Clear Timestamps

---

### Timing Functions

- **setInterval()**
  - **Description:** Repeatedly calls a function with a fixed time delay between each call
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  - **Used in:** Task 10

- **clearInterval()**
  - **Description:** Cancels a timed, repeating action previously established by a call to setInterval()
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  - **Used in:** Task 10

---

### Date and Time

- **Date()**
  - **Description:** Creates a JavaScript Date instance that represents a single moment in time
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  - **Used in:** Task 8, Extra Features

- **Date.prototype.toLocaleTimeString()**
  - **Description:** Returns a string with a language-sensitive representation of the time portion of the date
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
  - **Used in:** Task 8

- **Date.prototype.toLocaleDateString()**
  - **Description:** Returns a string with a language-sensitive representation of the date portion
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  - **Used in:** Extra Feature - Current Date Display

---

### Iteration Methods

- **for loop**
  - **Description:** Creates a loop that consists of three optional expressions
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  - **Used in:** Task 9

- **Array.prototype.forEach()**
  - **Description:** Executes a provided function once for each array element
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  - **Alternative for:** Task 9, Used in Extra Features

- **for...of statement**
  - **Description:** Creates a loop iterating over iterable objects
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  - **Alternative for:** Task 9

---

### Web Storage API (Extra Features)

- **Window.localStorage**
  - **Description:** Allows you to access a Storage object for the Document's origin; stored data persists even after the browser is closed
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  - **Used in:** Extra Feature - Dark Mode Persistence

- **Storage.setItem()**
  - **Description:** Adds a key to the storage, or updates that key's value if it already exists
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
  - **Used in:** Extra Feature - Dark Mode Persistence

- **Storage.getItem()**
  - **Description:** Returns a key's value from storage
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
  - **Used in:** Extra Feature - Dark Mode Persistence

---

### Additional DOM Methods (Extra Features)

- **Element.scrollIntoView()**
  - **Description:** Scrolls the element's parent container so that the element is visible to the user
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  - **Used in:** Extra Feature - Smooth Scroll

---

### CSS Properties Accessed via JavaScript

- **backgroundColor**
  - **CSS Property:** background-color
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
  - **Used in:** Task 7

- **color**
  - **CSS Property:** color
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/CSS/color
  - **Used in:** Task 9

- **fontWeight**
  - **CSS Property:** font-weight
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
  - **Used in:** Extra Feature - Hover Effects

- **transition**
  - **CSS Property:** transition
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/CSS/transition
  - **Used in:** Extra Feature - Animations

- **display**
  - **CSS Property:** display
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/CSS/display
  - **Used in:** Task 2 (via .hidden class)

---

## Event Types Used

- **click event**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  - **Used in:** Tasks 5, 10

- **dblclick event**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
  - **Used in:** Task 10, Extra Features

- **keypress event**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
  - **Used in:** Extra Feature - Keyboard Shortcuts

- **mouseenter event**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
  - **Used in:** Extra Feature - Hover Effects

- **mouseleave event**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
  - **Used in:** Extra Feature - Hover Effects

---

## JavaScript Language Features

- **Arrow Functions**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  - **Used in:** Alternative implementations

- **Template Literals**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  - **Used in:** Extra Features - String interpolation

- **let statement**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  - **Used in:** Throughout for variable declarations

- **const statement**
  - **MDN Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  - **Used in:** Throughout for constant declarations

---

## Summary Table

| Method/Property | Task(s) | MDN Documentation |
|----------------|---------|-------------------|
| console.log() | 1 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) |
| getElementById() | 3,4,5,7,8,10 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) |
| querySelectorAll() | 9 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) |
| innerHTML | 3, 8 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) |
| setAttribute() | 4 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) |
| classList.toggle() | 5, 10 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) |
| classList.contains() | 7 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains) |
| addEventListener() | 5, 10 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) |
| preventDefault() | 6 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) |
| style.backgroundColor | 7 | [Link](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) |
| createElement() | 8 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) |
| appendChild() | 8 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) |
| toLocaleTimeString() | 8 | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) |
| for loop | 9 | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) |
| setInterval() | 10 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) |
| clearInterval() | 10 | [Link](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) |