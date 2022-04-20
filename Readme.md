
## Testing modules with side effects

Node.js and Jest will cache modules you `require`. To test modules with side effects you’ll need to reset the module registry between tests:

```js
const modulePath = '../module-to-test'

afterEach(() => {
  jest.resetModules()
})

test('first test', () => {
  // Prepare conditions for the first test
  const result = require(modulePath)
  expect(result).toMatchSnapshot()
})

test('second text', () => {
  // Prepare conditions for the second test
  const fn = () => require(modulePath)
  expect(fn).toThrow()
})
```

## Usage with Babel and TypeScript

Add [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) or [ts-jest](https://github.com/kulshekhar/ts-jest). Check their docs for installation instructions.

## Resources

- [Jest site](https://facebook.github.io/jest/)
- [Modern React testing, part 1: best practices](https://blog.sapegin.me/all/react-testing-1-best-practices/) by Artem Sapegin
- [Modern React testing, part 2: Jest and Enzyme](https://blog.sapegin.me/all/react-testing-2-jest-and-enzyme/) by Artem Sapegin
- [Modern React testing, part 3: Jest and React Testing Library](https://blog.sapegin.me/all/react-testing-3-jest-and-react-testing-library/) by Artem Sapegin
- [React Testing Examples](https://react-testing-examples.com/)
- [Testing React Applications](https://youtu.be/59Ndb3YkLKA) by Max Stoiber
- [Effective Snapshot Testing](https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca) by Kent C. Dodds
- [Migrating to Jest](https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e#.pc4s5ut6z) by Kent C. Dodds
- [Migrating AVA to Jest](http://browniefed.com/blog/migrating-ava-to-jest/) by Jason Brown
- [How to Test React and MobX with Jest](https://semaphoreci.com/community/tutorials/how-to-test-react-and-mobx-with-jest) by Will Stern
- [Testing React Intl components with Jest and Enzyme](https://medium.com/@sapegin/testing-react-intl-components-with-jest-and-enzyme-f9d43d9c923e) by Artem Sapegin
- [Testing with Jest: 15 Awesome Tips and Tricks](https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262) by Stian Didriksen
- Taking Advantage of Jest Matchers by Ben McCormick: [Part 1](https://benmccormick.org/2017/08/15/jest-matchers-1/), [Part 2](https://benmccormick.org/2017/09/04/jest-matchers-2/)

---

## You may also like

- [Opinionated list of React components](https://github.com/sapegin/react-components)

## Contributing

Improvements are welcome! Open an issue or send a pull request.

## Sponsoring

This software has been developed with lots of coffee, buy me one more cup to keep it going.

<a href="https://www.buymeacoffee.com/sapegin" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="51" width="217" ></a>

## Author and license

[Artem Sapegin](http://sapegin.me/), a frontend engineer at [Omio](https://omio.com/) and the creator of [React Styleguidist](https://react-styleguidist.js.org/). I also write about frontend at [my blog](https://blog.sapegin.me/).

CC0 1.0 Universal license, see the included [License.md](/License.md) file.