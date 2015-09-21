export default class Subscription {
  constructor({ callback, type }) {
    this.callback = callback;
    this.type = type;
  }

  /**
   * @param {String} type
   * @return {Boolean}
   */
  matchWith(type) {
    return !this.type || this.type === type;
  }
}
