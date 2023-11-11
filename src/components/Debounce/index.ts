export function Debounce(fn: (...args: any[]) => {}, timer: any) {
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, timer);
  }
}