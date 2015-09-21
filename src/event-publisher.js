import Subscription from './subscription'

export default class EventPublisher {
  constructor() {
    this.subscriptions = [];
  }

  /**
   * @param {String} type
   * @param {Function} callback
   * @return {EventPublisher}
   */
  on(type, callback) {
    this.subscriptions.push(new Subscription({ callback, type }));
    return this;
  }

  /**
   * @param {String} type
   * @param {Object=} payload
   */
  publish(type, payload = {}) {
    this.subscriptions.filter((subscription) => {
      return subscription.matchWith(type);
    }).forEach((subscription) => {
      subscription.callback({ ...payload, type });
    });
  }

  /**
   * @param {String} type
   * @param {Function} callback
   * @return {EventPublisher}
   */
  subscribe(callback) {
    this.subscriptions.push(new Subscription({ callback }));
    return this;
  }
}
