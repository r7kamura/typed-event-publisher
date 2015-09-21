# typed-event-publisher
An event publisher implementation that communicates based on type property.

## Install
```sh
npm install typed-event-publisher
```

## Usage
```js
import EventPublisher from 'typed-event-publisher'

const eventPublisher = new EventPublisher();

// Subscribe all events
eventPublisher.subscribe((event) => {
  ...
});

// Subscribe foo events
eventPublisher.on('foo', (event) => {
  ...
});

eventPublisher.publish('foo');
eventPublisher.publish('bar');
eventPublisher.publish('baz', { boo });
```

### Import
Import in your favorite style.

```js
// Pattern 1: Using a default export
import EventPublisher from 'typed-event-publisher'

// Pattern 2: Using named exports
import { EventPublisher, Subscription } from 'typed-event-publisher'

// Pattern 3: Using both a default export and named exports
import EventPublisher, { Subscription } from 'typed-event-publisher'
```

## For contributors
```sh
# Set up
npm install

# Compile JavaScript files
npm run compile

# Watch changes of JavaScript files
npm run watch

# Run tests
npm run test
```
