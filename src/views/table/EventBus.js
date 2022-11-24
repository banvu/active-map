const EventBus = {
  events: {},
  listen(event, callback) {
    this.events[event] = callback;
  },
  emit(event, ...args) {
    // eslint-disable-next-line no-prototype-builtins
    if (Object(this.events).hasOwnProperty(event)) {
      this.events[event](...args);
    }
  },
};

export default EventBus;
