define({ "api": [
  {
    "type": "post",
    "url": "/password/change",
    "title": "",
    "name": "ChangePassword",
    "group": "Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Security token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's desired password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>User's desired password confirmation.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PasswordController.js",
    "groupTitle": "Password"
  },
  {
    "type": "post",
    "url": "/password/forgot",
    "title": "",
    "name": "ForgotPassword",
    "group": "Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PasswordController.js",
    "groupTitle": "Password"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  }
] });
