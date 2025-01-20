const fs = require('fs');
const path = require('path');

describe('repolinter-ruleset.json', () => {
  let rulesetConfig;

  beforeAll(() => {
    const configPath = path.join(__dirname, '../repolinter-ruleset.json');
    rulesetConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  });

  test('has valid schema version and structure', () => {
    expect(rulesetConfig.$schema).toBeDefined();
    expect(rulesetConfig.version).toBe(2);
    expect(rulesetConfig.rules).toBeDefined();
  });

  test('license rule is properly configured', () => {
    const licenseRule = rulesetConfig.rules['license-file-is-MIT'];
    expect(licenseRule.level).toBe('warning');
    expect(licenseRule.rule.type).toBe('file-contents');
    expect(licenseRule.rule.options.globsAll).toContain('LICENSE*');
    expect(licenseRule.rule.options.content).toBe('MIT License');
  });

  test('readme rule is properly configured', () => {
    const readmeRule = rulesetConfig.rules['readme-file-exists'];
    expect(readmeRule.level).toBe('warning');
    expect(readmeRule.rule.type).toBe('file-existence');
    expect(readmeRule.rule.options.nocase).toBe(true);
    expect(readmeRule.rule.options.globsAny).toContain('README*');
  });

  test('codeowners rule is properly configured', () => {
    const codeownersRule = rulesetConfig.rules['codeowners-file-exists'];
    expect(codeownersRule.level).toBe('warning');
    expect(codeownersRule.rule.type).toBe('file-existence');
    expect(codeownersRule.rule.options.globsAny).toContain('CODEOWNERS*');
  });

  test('format options include disclaimer', () => {
    expect(rulesetConfig.formatOptions).toBeDefined();
    expect(rulesetConfig.formatOptions.disclaimer).toContain('repolinter-action');
  });

  test('all rules have required properties', () => {
    Object.values(rulesetConfig.rules).forEach(rule => {
      expect(rule).toHaveProperty('level');
      expect(rule).toHaveProperty('rule');
      expect(rule).toHaveProperty('fix');
      expect(rule).toHaveProperty('policyInfo');
      expect(rule).toHaveProperty('policyUrl');
    });
  });
});
