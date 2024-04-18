const { delay } = require('../src/utils/promiseUtils');

describe('delay', () => {
  // beforeAll(() => {
  //   jest.useFakeTimers();
  // });
  // afterAll(() => {
  //   jest.useRealTimers();
  // });
  // test('should delay for the specified time', async () => {
  //   const delayTime = 1000; // 1 second
  //   const start = new Date().getTime();
  //   const result = await delay(delayTime);
  //   const end = new Date().getTime();
  //   const duration = end - start;
  //   expect(duration).toBeGreaterThanOrEqual(delayTime);
  //   expect(duration).toBeLessThan(delayTime + 100); // Allow small delta
  // }, 10000);
  // test('should delay multiple times correctly', async () => {
  //   const delayTime1 = 500; // 0.5 seconds
  //   const delayTime2 = 1000; // 1 second
  //   const start = new Date().getTime();
  //   await delay(delayTime1);
  //   const midTime = new Date().getTime();
  //   await delay(delayTime2);
  //   const end = new Date().getTime();
  //   const duration1 = midTime - start;
  //   const duration2 = end - midTime;
  //   expect(duration1).toBeGreaterThanOrEqual(delayTime1);
  //   expect(duration1).toBeLessThan(delayTime1 + 100);
  //   expect(duration2).toBeGreaterThanOrEqual(delayTime2);
  //   expect(duration2).toBeLessThan(delayTime2 + 100);
  // }, 10000);
});
