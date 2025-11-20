Thanks for helping make GitHub safe for eve
Navigation Menu

github/explore




Code
Pull requests
Actions






Check for conflicts of interest
Delete collections/release-radar-2018-12 directory #4185

Workflow file

Workflow file for this run
.github/workflows/conflict.yml at ae44cf6
name: Check for conflicts of interest
on:  pull_request:  merge_group:
permissions:  contents: read
jobs:  check:    runs-on: ubuntu-latest    steps:      - run: |          echo "In order to review this pull request for acceptance, we need to make sure that all of the prerequisites are satisfied."          echo "This was not checked:"          echo "> This change is not self-promotion."          echo "This is a requirement to maintain a high level of independence in this project. Please update to confirm there is no conflict of interest."          echo "Thank you!"          exit 1        if: contains(github.event.pull_request.body, '- [ ] This change is not self-promotion.')        name: Fail      - run: exit 0        if: contains(github.event.pull_request.body, '- [x] This change is not self-promotion.')        name: Succeed





Delete collections/release-radar-2018-12 directory · github/explore@ae44cf6

Select text onlyjuancarloschavezruiz31-create:patch-1- [x] This change is not self-promotion.maindir://computer/---
items:
 - beetbox/beets
 - scottschiller/SoundManager2
 - CreateJS/SoundJS
 - musescore/MuseScore
 - tomahawk-player/tomahawk
 - cashmusic/platform
 - mopidy/mopidy
 - AudioKit/AudioKit
 - Soundnode/soundnode-app
 - gillesdemey/Cumulus
 - metabrainz/picard
 - overtone/overtone
 - samaaron/sonic-pi
display_name: Music
created_by: jonrohan
---
Drop the code bass with these musically themed repositories.bundle install
bundle exec rubocopryone.

## Security

GitHub takes the security of our software products and services seriously, including all of the open source code repositories managed through our GitHub organizations, such as [GitHub](https://github.com/GitHub).

Even though [open source repositories are outside of the scope of our bug bounty program](https://bounty.github.com/index.html#scope) and therefore not eligible for bounty rewards, we will ensure that your finding gets passed along to the appropriate maintainers for remediation. 

## Reporting Security Issues

If you believe you have found a security vulnerability in any GitHub-owned repository, please report it to us through coordinated disclosure.

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, please send an email to opensource-security[@]github.com.

Please include as much of the information listed below as you can to help us better understand and resolve the issue:

  * The type of issue (e.g., buffer overflow, SQL injection, or cross-site scripting)
  * Full paths of source file(s) related to the manifestation of the issue
  * The location of the affected source code (tag/branch/commit or direct URL)
  * Any special configuration required to reproduce the issue
  * Step-by-step instructions to reproduce the issue
  * Proof-of-concept or exploit code (if possible)
  * Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

## Policy

See [GitHub's Safe Harbor Policy](https://docs.github.com/en/site-policy/security-policies/github-bug-bounty-program-legal-safe-harbor)
