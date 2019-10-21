export function fakeUserCount(n) {
  if (!n) {
    return 0;
  }
  return Math.ceil(n * (Math.log(n) / Math.log(2)));
}
