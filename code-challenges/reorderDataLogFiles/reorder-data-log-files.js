'use strict';

const reorderLogFiles = logs => {
  if (!Array.isArray(logs)) {
    return 'ERROR';
  }
  let digits = [];
  let alpha = [];

  for (let i = 0; i < logs.length; i++) {
    logs[i] = logs[i].split(' ');
    if (!isNaN(logs[i][1])) {
      digits.push(logs[i].join(' '));
    } else {
      let id = logs[i][0];
      let rest = logs[i].slice(1).join(' ');
      alpha.push({ id, rest });
    }
  }

  alpha.sort((a, b) => {
    if (a.rest > b.rest) return 1;
    if (a.rest < b.rest) return -1;
    if (a.rest === b.rest && a.id > b.id) return 1;
    if (a.rest === b.rest && a.id < b.id) return -1;
  });

  logs = alpha.map(element => `${element.id} ${element.rest}`);
  logs = logs.concat(digits);
  return logs;
};

module.exports = reorderLogFiles;
