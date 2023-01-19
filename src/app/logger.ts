/**
 * This logger is meant for demosntration purposes only. It reduces the amount of logged messages accroding to the chosen topics.
 * @param msg string that we want to log
 * @param topic topic that our message belongs to (for all available topics see enum IS_VISIBLE)
 * @param obj object that we want to log
 */

export const log = (msg: string, topic?: string, obj?: unknown) => {
  if (topic && IS_VISIBLE[topic]) console.log(msg);
  if (obj) console.log(obj);
};

type EnumType = { [s: string]: boolean };

export const IS_VISIBLE: EnumType = {
  lifecycle: true,
  constructor: true,
  resolver: true,
  canActivate: true,
  canLoad: true,
  appInitializer: true,
  main: true,
  file: false,
  canDeactivate: true,
  beforeunload: true,
};
