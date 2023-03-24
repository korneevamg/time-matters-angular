/**
 * This logger is meant for demosntration purposes only. It reduces the amount of logged messages according to the chosen topics.
 * @param msg string that we want to log
 * @param topic topic that our message belongs to (for all available topics see enum LOG_CONFIG)
 * @param obj object that we want to log
 */

export const log = (msg: string, topic?: string, obj?: unknown) => {
  if (topic && LOG_CONFIG[topic].isVisible) console.log(`%c${topic}`, `background-color: ${LOG_CONFIG[topic].color}; color: white; padding: 2px;`, `${msg}`,);
  if (obj) console.log(obj);
};

type EnumType = { [s: string]: {isVisible: boolean, color: string} };

export const LOG_CONFIG: EnumType = {
  lifecycle: {isVisible: true, color: 'gray'},
  constructor: {isVisible: false, color: 'black'},
  resolver: {isVisible: false, color: 'maroon'},
  canActivate: {isVisible: false, color: 'red'},
  canLoad: {isVisible: false, color: 'purple'},
  appBootstrap: {isVisible: false, color: 'darkcyan'},
  appInitializer: {isVisible: false, color: 'goldenrod'},
  main: {isVisible: false, color: 'blue'},
  file: {isVisible: false, color: 'teal'},
  canDeactivate: {isVisible: false, color: 'darkgreen'},
  beforeunload: {isVisible: false, color: 'fuchsia'},
};
