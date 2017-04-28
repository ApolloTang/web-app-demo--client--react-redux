import {nameSpace} from  '../config';

const userCatlog = [
  'userCatelog_init',
  `userCatelog_fetch_begin`,
  'userCatelog_fetch_success',
  'userCatelog_fetch_fail',
  'userCatelog_selectUser',
];

const resources = [
  'resources_userCatelog_update',
];

const symbols = [
  ...resources,
  ...userCatlog,
].reduce((acc, eventName) => ({
  ...acc,
  [`${nameSpace}__${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(`${nameSpace}__${eventName}`)
}), {});

function duplicateEventNameError (eventName) {
  throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

