import assert from 'assert'
import EventPublisher from '../lib/index.js'

describe('EventPublisher', () => {
  describe('#on', () => {
    it('subscribes specified events', (done) => {
      const eventPublisher = new EventPublisher();
      eventPublisher.on('x', (event) => {
        fail();
      });
      eventPublisher.on('y', (event) => {
        assert.deepEqual(event, { a: 'b', type: 'y' });
        done();
      });
      eventPublisher.publish('y', { a: 'b' });
    });
  });

  describe('#subscribe', () => {
    it('subscribes all events', (done) => {
      const eventPublisher = new EventPublisher();
      eventPublisher.subscribe((event) => {
        assert.deepEqual(event, { a: 'b', type: 'x' });
        done();
      });
      eventPublisher.publish('x', { a: 'b' });
    });
  });
});
