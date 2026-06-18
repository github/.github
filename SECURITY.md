Thanks for helping make GitHub safe for everyone.

## Security

GitHub takes the security of our software products and services seriously, including all of the open source code repositories managed through our GitHub organizations, such as [GitHub](https://github.com/GitHub).

Even though [open source repositories are outside of the scope of our bug bounty program](https://bounty.github.com/scope) and therefore not eligible for bounty rewards, we will ensure that your finding gets passed along to the appropriate maintainers for remediation.

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
Status: 200
{
  "type": "object",
  "required": [
    "schemas",
    "totalResults",
    "Resources",
    "startIndex",
    "itemsPerPage"
  ],
  "properties": {
    "schemas": {
      "type": "array",
      "description": "The URIs that are used to indicate the namespaces of the list SCIM schemas.",
      "items": {
        "type": "string",
        "enum": [
          "urn:ietf:params:scim:api:messages:2.0:ListResponse"
        ]
      }
    },
    "totalResults": {
      "type": "integer",
      "description": "Number of results found"
    },
    "Resources": {
      "type": "array",
      "description": "Information about each provisioned account.",
      "items": {
        "allOf": [
          {
            "type": "object",
            "required": [
              "schemas",
              "active",
              "emails"
            ],
            "properties": {
              "schemas": {
                "type": "array",
                "description": "The URIs that are used to indicate the namespaces of the SCIM schemas.",
                "items": {
                  "type": "string",
                  "enum": [
                    "urn:ietf:params:scim:schemas:core:2.0:User"
                  ]
                }
              },
              "externalId": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "A unique identifier for the resource as defined by the provisioning client."
              },
              "active": {
                "type": "boolean",
                "description": "Whether the user active in the IdP."
              },
              "userName": {
                "type": "string",
                "description": "The username for the user."
              },
              "name": {
                "type": "object",
                "properties": {
                  "formatted": {
                    "type": "string",
                    "description": "The full name, including all middle names, titles, and suffixes as appropriate, formatted for display."
                  },
                  "familyName": {
                    "type": "string",
                    "description": "The family name of the user."
                  },
                  "givenName": {
                    "type": "string",
                    "description": "The given name of the user."
                  },
                  "middleName": {
                    "type": "string",
                    "description": "The middle name(s) of the user."
                  }
                }
              },
              "displayName": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "A human-readable name for the user."
              },
              "emails": {
                "type": "array",
                "description": "The emails for the user.",
                "items": {
                  "type": "object",
                  "required": [
                    "value"
                  ],
                  "properties": {
                    "value": {
                      "type": "string",
                      "description": "The email address."
                    },
                    "type": {
                      "type": "string",
                      "description": "The type of email address."
                    },
                    "primary": {
                      "type": "boolean",
                      "description": "Whether this email address is the primary address."
                    }
                  }
                }
              },
              "roles": {
                "type": "array",
                "description": "The roles assigned to the user.",
                "items": {
                  "type": "object",
                  "required": [
                    "value"
                  ],
                  "properties": {
                    "display": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    },
                    "value": {
                      "type": "string",
                      "description": "The role value representing a user role in GitHub.",
                      "enum": [
                        "user",
                        "27d9891d-2c17-4f45-a262-781a0e55c80a",
                        "guest_collaborator",
                        "1ebc4a02-e56c-43a6-92a5-02ee09b90824",
                        "enterprise_owner",
                        "981df190-8801-4618-a08a-d91f6206c954",
                        "ba4987ab-a1c3-412a-b58c-360fc407cb10",
                        "billing_manager",
                        "0e338b8c-cc7f-498a-928d-ea3470d7e7e3",
                        "e6be2762-e4ad-4108-b72d-1bbe884a0f91"
                      ]
                    },
                    "primary": {
                      "type": "boolean",
                      "description": "Is the role a primary role for the user."
                    }
                  }
                }
              }
            }
          },
          {
            "type": "object",
            "required": [
              "id",
              "meta"
            ],
            "properties": {
              "id": {
                "type": "string",
                "description": "The internally generated id for the user object."
              },
              "groups": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "string"
                    },
                    "$ref": {
                      "type": "string"
                    },
                    "display": {
                      "type": "string"
                    }
                  }
                },
                "description": "Provisioned SCIM groups that the user is a member of."
              },
              "meta": {
                "type": "object",
                "description": "The metadata associated with the creation/updates to the user.",
                "required": [
                  "resourceType"
                ],
                "properties": {
                  "resourceType": {
                    "type": "string",
                    "description": "A type of a resource",
                    "enum": [
                      "User",
                      "Group"
                    ]
                  },
                  "created": {
                    "type": "string",
                    "description": "A date and time when the user was created."
                  },
                  "lastModified": {
                    "type": "string",
                    "description": "A data and time when the user was last modified."
                  },
                  "location": {
                    "type": "string",
                    "description": "A URL location of an object"
                  }
                }
              }
            }
          }
        ]
      }
    },
    "startIndex": {
      "type": "integer",
      "description": "A starting index for the returned page"
    },
    "itemsPerPage": {
      "type": "integer",
      "description": "Number of objects per page"
    }
  }
}
Provision a SCIM enterprise user
Creates an external identity for a new SCIM// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /scim/v2/enterprises/{enterprise}/Users', {
  enterprise: 'ENTERPRISE',
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})https://cli.github.com/manual/gh_api# GitHub CLI api
# https://cli.github.com/manual/gh_api

gh api \
  -H "Accept: application/scim+json" \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  /scim/v2/enterprises/ENTERPRISE/UsersOctokit.jshttps://github.com/octokit/core.js#readmeTopic :: System :: Hardware :: Universal Serial Bus (USB) :: Communications Device Class (CDC)Topic :: System :: Hardware :: Universal Serial Bus (USB) :: Audio/Video (AV)
See [GitHub's Safe Harbor Policy](https://docs.github.com/en/site-policy/security-policies/github-bug-bounty-program-legal-safe-harbor)
