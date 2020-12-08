# GitHub Security Policy

Software security researchers are increasingly engaging with Internet companies to hunt down vulnerabilities. Our bounty program gives a tip of the hat to these researchers and provides rewards of $30,000 or more for critical vulnerabilities.

If you’ve found a vulnerability, [submit it here](https://github.com/Mythx1337).

You can find useful information in our [rules](https://bounty.github.com/#rules), [scope](https://bounty.github.com/#scope), [targets](https://bounty.github.com/#scope) and [FAQ](https://bounty.github.com/#faqs).




---
title: Sudo mode
intro: '{% data variables.product.product_name %} asks you for your password before you can modify your email address, authorize third-party applications, or add new public keys, or initiate other *sudo-protected* actions.'
redirect_from:
  - /articles/sudo-mode
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

After you've performed a sudo-protected action, you'll only be asked to re-authenticate again after a few hours of inactivity. Every sudo-protected action resets this timer.

![Sudo Mode Dialog](/assets/images/help/settings/sudo_mode_popup.png)

### Further reading

- [Unix `sudo` command](http://en.wikipedia.org/wiki/Sudo)
