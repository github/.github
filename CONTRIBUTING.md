env/*
*/venv/*
.venv/*
.python-version
.terraform
terraform.tfstate*
terraform.tfvars
*.auto.tfvars
.terraform.tfstate.lock.info
.terraform.lock.hcl
!tests/**/terraform.tfvars
__pycache__
.pytest_cache
.test.lock
.idea
.idx/dev.nix
backend.tf
backend-config.hcl
credentials.json
key.json
terraform-ls.tf
bundle.zip
.DS_Store
fixture_*
fast/configs
fast/**/[0-9]*providers.tf
fast/**/terraform.tfvars
fast/**/terraform.tfvars.json
fast/**/terraform-*.auto.tfvars.json
fast/**/[0-9]*.auto.tfvars*
node_modules
fast/**/globals.auto.tfvars.json
cloud_sql_proxy
env/
fast-cleaner binary
tools/fast-cleaner/fast-cleane




## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the project's open source license.

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## Submitting a pull request

0. Fork and clone the repository
0. Configure and install the dependencies: `script/bootstrap`
0. Make sure the tests pass on your machine: `script/cibuild`
0. Create a new branch: `git checkout -b my-branch-name`
0. Make your change, add tests, and make sure the tests still pass
0. Push to your fork and submit a pull request
0. Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow standards for style and code quality.
- Write tests.
- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
