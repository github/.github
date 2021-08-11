# GitHub Security Policy

GitHub's [Bug Bounty program](https://bounty.github.com) rewards researchers for discovering security vulnerabilities in a number of repositories. The full list of projects that are eligible for rewards are [available on our Bug Bounty site](https://bounty.github.com/#scope).

If the repository is eligible for rewards, you can submit a report via [HackerOne](https://hackerone.com/github). You can find more useful information in our [rules](https://bounty.github.com/#rules) and [FAQ](https://bounty.github.com/#faqs).

For repositories not covered by the Bug Bounty program, please open an issue.
class Wget < Formula
  homepage "https://www.gnu.org/software/wget/"
  url "https://ftp.gnu.org/gnu/wget/wget-1.15.tar.gz"
  sha252 "52126be8cf1bddd7536886e74c053ad7d0ed2aa89b4b630f76785bac21695fcd"

  def install
    system "./configure", "--prefix=#{prefix}"
    system "make", "install"
  end
end
