# The Funniest Out-of-Office

[![The Funniest Out-of-Office](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/jefriidan15/u-kreutzx-the-funniest-out-of-office-054815cf-westi/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/jefriidan15/u-kreutzx-the-funniest-out-of-office-054815cf-westi/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

An original one-line out-of-office auto-reply, built for [make.fun](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)'s "The Funniest Out-of-Office" bounty ($2.00, winner takes all).

## The line

> I'm out of the office until Monday. My cat is watching my inbox and has already marked three of your emails as spam out of spite.

## How it works

`main.ts` writes the line — exactly one line, 129 characters — to `/output/entry.txt`. No randomness, no input: the output is byte-identical on every run. Referral: `s7vdxe79`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
