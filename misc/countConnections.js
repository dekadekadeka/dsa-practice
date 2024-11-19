// Given a 2D array with inner arrays containing connection status and 2 names,
// return an array containing the names with a minimum of num connections.

// connections - 2D array showing whether 2 names connected/disconnected
// num - number of minimum connections
const countConnections = (connections, num) => {
  const connectionsHash = {};
  const result = [];

  for (let i = 0; i < connections.length; i++) {
    if (connections[i][0] === 'CONNECT') {
      if (connectionsHash[connections[i][1]]) {
        connectionsHash[connections[i][1]] += 1;
      } else {
        connectionsHash[connections[i][1]] = 1;
      }

      if (connectionsHash[connections[i][2]]) {
        connectionsHash[connections[i][2]] += 1;
      } else {
        connectionsHash[connections[i][2]] = 1;
      }
    }

    if (connections[i][0] === 'DISCONNECT') {
      if (connectionsHash[connections[i][1]]) {
        connectionsHash[connections[i][1]] -= 1;
      }

      if (connectionsHash[connections[i][2]]) {
        connectionsHash[connections[i][2]] -= 1;
      }
    }
  }

  for (const [k, v] of Object.entries(connectionsHash)) {
    if (v >= num) {
      result.push(k);
    }
  }

  return result;
}

const connectionsArr = [
  ['CONNECT', 'Bintang', 'Citlali'],
  ['CONNECT', 'Pinta', 'Citlali'],
  ['CONNECT', 'Pinta', 'Taffy'],
  ['DISCONNECT', 'Citlali', 'Pinta'],
  ['CONNECT', 'Bintang', 'Penny'],
  ['DISCONNECT', 'Bintang', 'Citlali'],
  ['CONNECT', 'Coco', 'Taffy'],
  ['CONNECT', 'Bintang', 'Coco'],
  ['CONNECT', 'Bintang', 'Taffy'],
];

countConnections(connectionsArr, 3); // ['Bintang', 'Taffy']
