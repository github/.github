# AGENTS.md

## Cursor Cloud specific instructions

This is a GitHub organization `.github` repository containing community health files (Markdown docs and a repolinter config). There is no application code, no build step, and no services to run.

### Repository contents

- `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` — community health files
- `profile/README.md` — GitHub organization profile page
- `config/repolinter-ruleset.json` — repolinter rules for enforcing repo standards (MIT license, README, CODEOWNERS)

### Available dev tools

- **repolinter**: `repolinter lint --rulesetFile config/repolinter-ruleset.json --dryRun .` — runs repo policy checks using the custom ruleset. Use `--dryRun` to avoid auto-creating fix files (e.g. a `CODEOWNERS` file). The ruleset checks 3 rules: `license-file-is-MIT`, `readme-file-exists`, and `codeowners-file-exists`.
- **markdownlint**: `markdownlint '*.md' 'profile/*.md'` — lints Markdown files (many pre-existing warnings are expected)

### Known issues

- `CONTRIBUTING.md` references `script/bootstrap` and `script/cibuild` commands that do not exist in this repository — they are generic placeholder instructions.
- Running `repolinter lint` without `--dryRun` may invoke fix rules (e.g. `codeowners-file-exists` will create `CODEOWNERS` if it is missing, `license-file-is-MIT` will overwrite `LICENSE`). Both files are tracked in this repo, so if a fix run mutates them unintentionally, restore the original with `git restore CODEOWNERS LICENSE` rather than `rm`-ing tracked files. Use `--dryRun` to avoid this.

### No build, no tests, no dev server

There are no dependencies, no test suite, no build step, and no dev server to run. Changes are Markdown-only and can be validated visually or with repolinter.
