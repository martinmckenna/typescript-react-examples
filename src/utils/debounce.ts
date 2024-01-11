export const debounce = <Callback extends (...args: any[]) => void>(
  callback: Callback,
  delay = 400
): Callback => {
  let timer: NodeJS.Timeout;

  return ((...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  }) as Callback;
};

export const add = (a: number, b: number) => {
  return a + b;
};

// const thing = debounce(add)

// const thing2 = debounce('fdsaf')

// export const addArray = <T extends number[]>(...args: T) => {
//   return args.reduce((acc, eachArg) => acc + eachArg, 0);
// };

// export const addArrayFixed = <T extends [number, number, number]>(
//   ...args: T
// ) => {
//   return args.reduce((acc, eachArg) => acc + eachArg, 0);
// };

// const addedArray = addArrayFixed(1, 3, 4, 3, 5, 'fdsaf')
