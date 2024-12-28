function queueTime(customers, n) {
  if (customers.length <= 0) return 0;

  const totalWait = customers.reduce((a, c) => a + c, 0);
  const maxWait = Math.max(...customers);
  const waitAfterMax = customers.slice(customers.lastIndexOf(maxWait), customers.length).reduce((a, c) => a + c, 0);
  const sortedWait = totalWait / n;

  return sortedWait < 1 || maxWait > (totalWait - maxWait) ? customers.indexOf(maxWait) >= n ? waitAfterMax : maxWait : sortedWait;
}

queueTime([], 1); // return 0
queueTime([1,2,3,4], 1); // return 10
queueTime([2,2,3,3,4,4], 2); // return 9
queueTime([1,2,3,4,5], 100); // return 5
queueTime([10, 2, 3, 3], 2); // return 10
queueTime([2,3,10,2], 2); // return 12
// could not get these to work
// queueTime([35,45,49,12,3,41,44,32,6,12,3,12,6,26,39,34,22,4,49,48,24,3,17,27], 6); // return 110
// queueTime([12,16,2,19,6,1,5,11,10,15,11,16,9,13,11,10,3,9,11,12,3,8], 2); // return 108
// queueTime([68,1,24,1,3,93,1,1,58,32,30,24,15,2,11,3,33,86,9,74,40,30,4,13,41,50,36,71,63,2,36,12,2,62,60,4,51,5,3,77,1,46,7,35,27], 3); // return 461
