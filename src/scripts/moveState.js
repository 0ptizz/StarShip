const UP = Symbol('up');
const DOWN = Symbol('down');
const STOP = Symbol('stop');

export default class State {
    static get UP() { return UP; }
    static set UP(v) { throw "Exception : constant UP cannot be modified"; }
    static get DOWN() { return DOWN; }
    static set DOWN(v) { throw "Exception : constant DOWN cannot be modified"; }
    static get STOP() { return STOP; }
    static set STOP(v) { throw "Exception : constant STOP cannot be modified"; }
}