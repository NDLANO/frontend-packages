export default [
  {
    test: `('fetch' in window)`,
    feature: 'fetch',
  },
  {
    test: `('includes' in Array.prototype)`,
    feature: 'Array.prototype.includes',
  },
  {
    test: `('fill' in Array.prototype)`,
    feature: 'Array.prototype.fill',
  },
  {
    test: `('open' in document.createElement('details'))`,
    feature: 'details',
  },
  {
    test: `('assign' in Object)`,
    feature: 'Object.assign',
  },
  {
    test: `('includes' in String.prototype)`,
    feature: 'String.prototype.includes',
  },
  {
    test: `('startsWith' in String.prototype)`,
    feature: 'String.prototype.startsWith',
  },
  {
    test: `('isInteger' in Number.prototype)`,
    feature: 'Number.prototype.isInteger',
  },
];
