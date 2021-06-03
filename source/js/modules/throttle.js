export const throttle = (func, ms) => {
  let isThrottled = false;
  let savedArgs;

  const wrapper = (...arg) => {
    if (isThrottled) { // (2)
      savedArgs = arg;
      return;
    }

    func(...arg); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper(...savedArgs);
        savedArgs = null;
      }
    }, ms);
  };

  return wrapper;
};
