import fs from 'fs'
import { join, resolve } from 'path'

export function getLatestConventionalChangelog(
  conventionalChangelogFile = join(process.cwd(), './CHANGELOG.md'),
) {
  const content = fs.readFileSync(
    resolve(process.cwd(), conventionalChangelogFile),
    'utf8',
  )
  const latestChangelog =
    content.match(/(?:^|\n)(#+\s+\[?\d.+?)(?:\n#+\s+\[?\d|$)/s)?.[1] ?? ''
  return latestChangelog.trim()
}
