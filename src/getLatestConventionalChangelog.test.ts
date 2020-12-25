import { getLatestConventionalChangelog } from './getLatestConventionalChangelog'
import { join } from 'path'

const resolve = (file: string) => join(__dirname, file)

test('表现正常', () => {
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG1.md')),
  ).toMatchSnapshot('CHANGELOG1')
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG2.md')),
  ).toMatchSnapshot('CHANGELOG2')
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG3.md')),
  ).toMatchSnapshot('CHANGELOG3')
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG4.md')),
  ).toMatchSnapshot('CHANGELOG4')
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG5.md')),
  ).toMatchSnapshot('CHANGELOG5')
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG6.md')),
  ).toMatchSnapshot('CHANGELOG6')
  expect(
    getLatestConventionalChangelog(resolve('./__fixtures__/CHANGELOG7.md')),
  ).toMatchSnapshot('CHANGELOG7')
})
