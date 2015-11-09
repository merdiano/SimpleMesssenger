define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/conversation/add",
    "title": "Add users to conversation",
    "name": "Add_users_to_conversation",
    "group": "WebAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "description": "<p>Add users to existing conversation. Can select add to existing conversation or create new one.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>conversationId</p> ",
            "optional": false,
            "field": "conversaton",
            "description": "<p>id of target</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>makeNew</p> ",
            "optional": false,
            "field": "false",
            "description": "<p>to existing one, true to make one new</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "users",
            "description": "<p>array of users ids.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    conversationId: \"563a1130b75fb0d5eb4b5a22\",\n    makeNew: true,\n    users: [\n        \"563a0cc46cb168c8e9c4071a\",\n        \"563a0cc46cb168c8e9c4071a\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    \n{\n    success: 1,\n    data: {\n        ok: true,\n        conversation: {\n            __v: 0,\n            owner: '563a1130b75fb0d5eb4b5a22',\n            name: 'testiCqIm,\n            thename...',\n            created: 1446646065228,\n            _id: '563a1131b75fb0d5eb4b5a2a',\n            avatar: {\n                file: 'EDDggQd7MoK6LpKQQ84PWbQVVdpjexYh',\n                thumb: 'EDDggQd7MoK6LpKQQ84PWbQVVdpjexYh'\n            },\n            users: [\n                '563a1130b75fb0d5eb4b5a22',\n                '563a1130b75fb0d5eb4b5a22',\n                '563a1130b75fb0d5eb4b5a1f',\n                '563a1130b75fb0d5eb4b5a20',\n                '563a1130b75fb0d5eb4b5a21'\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/AddToConversation.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/conversation/new",
    "title": "New Conversation",
    "name": "Create_New_Conversation",
    "group": "WebAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "description": "<p>Create new conversation</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "users",
            "description": "<p>array of users ids.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    users: [\n        \"563a0cc46cb168c8e9c4071d\",\n        \"563a0cc46cb168c8e9c4071a\",\n        \"563a0cc46cb168c8e9c4071b\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    success: 1,\n    data: {\n        ok: true,\n        conversation: {\n            __v: 0,\n            owner: '563a0cc46cb168c8e9c4071d',\n            name: 'testuBfpS,\n            thename...',\n            created: 1446644932895,\n            _id: '563a0cc46cb168c8e9c40720',\n            avatar: {\n                file: '3kjh7pZAUZruXOMMWF4ejG674QZTDMvT',\n                thumb: '3kjh7pZAUZruXOMMWF4ejG674QZTDMvT'\n            },\n            users: [\n                '563a0cc46cb168c8e9c4071d',\n                '563a0cc46cb168c8e9c4071a',\n                '563a0cc46cb168c8e9c4071c',\n                '563a0cc46cb168c8e9c4071b'\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/NewConversation.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/api/v1/conversation/list",
    "title": "Conversation List",
    "name": "Get_conversation_list",
    "group": "WebAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "description": "<p>get conversation list of the user</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true,\n        conversations: [\n            {\n                _id: '563a0e21124f146beadd00a5',\n                owner: '563a0e20124f146beadd00a2',\n                name: 'testm6PO1,thename...',\n                created: 1446645281205,\n                __v: 0,\n                avatar: {\n                    file: 'Ry2TshrAK9BnDUV3kXiA4r1ZxVJzhZP2',\n                    thumb: 'Ry2TshrAK9BnDUV3kXiA4r1ZxVJzhZP2'\n                },\n                users: [\n                    '563a0e20124f146beadd00a2',\n                    '563a0e20124f146beadd009f',\n                    '563a0e20124f146beadd00a0',\n                    '563a0e20124f146beadd00a1'\n                ]\n            },\n            {\n                _id: '563a0e21124f146beadd00a7',\n                owner: '563a0e20124f146beadd00a2',\n                name: 'testm6PO1,thename...',\n                created: 1446645281275,\n                __v: 0,\n                avatar: {\n                    file: 'yNolWLu7sewJFyPaYSic5685GdW0OdB1',\n                    thumb: 'yNolWLu7sewJFyPaYSic5685GdW0OdB1'\n                },\n                users: [\n                    '563a0e20124f146beadd00a2',\n                    '563a0e20124f146beadd009f',\n                    '563a0e20124f146beadd00a0'\n                ]\n            },\n            ....\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/ConversationList.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/api/v1/conversation/leave/[conversationid]",
    "title": "Leave from conversation",
    "name": "Leave_from_conversation",
    "group": "WebAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "description": "<p>Leave from joined conversation.</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    \n{\n    success: 1,\n    data: {\n        ok: true,\n        conversation: {\n            ok: 1,\n            nModified: 1,\n            n: 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/LeaveConversation.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/user/signin",
    "title": "SignIn",
    "name": "Login",
    "group": "WebAPI",
    "description": "<p>Login to the system and get api token</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Users Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true,\n        user: {\n            _id: '563a072bd9b1aef3e668e0da',\n            username: 'testm83pe',\n            email: 'test@test98yYg.com',\n            password: 'ce2fb993e7725577291f7fd1d30a57c7c4989787',\n            created: 1446643499398,\n            __v: 0\n        },\n        token: 'G3zKH48LwfrVfqVWTb8wTEnDmfyE8tBi'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/SignIn.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/user/resetpassword",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "WebAPI",
    "description": "<p>Reset User's password with email address</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of target user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/ResetPassword.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/api/v1/search/user/[keyword]",
    "title": "Search User",
    "name": "Search_User",
    "group": "WebAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "description": "<p>Search user by given keyword</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "keyword",
            "description": "<p>the keyword</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true,\n        users: [\n            {\n                _id: '56360099f28a47ad2561be96',\n                username: 'test3jMGK',\n                email: 'test@testQtHHc.com',\n                password: 'eaa0a8f04e4382fbe239ce574c19ff90a490a5d5',\n                created: 1446379673508,\n                __v: 0,\n                displayName: 'test3jMGKthename',\n                avatar: {\n                    file: 'KvkfjmWME2qpzjxlgYgImp4EoxDFBZKZ',\n                    thumb: 'beLchoMlqnkYmZmpcp0qPkhFFVe2tuyy'\n                }\n            },\n            {\n                _id: '56360099f28a47ad2561be97',\n                username: 'testHJrQJ',\n                email: 'test@testjX8ht.com',\n                password: 'e34e6c3eb2969b535e94882a53b83b3c0267e933',\n                created: 1446379673526,\n                __v: 0,\n                displayName: 'testHJrQJthename',\n                avatar: {\n                    file: '4cBfMNNQJE3kLJimfOmUQhIQiU1sjbOY',\n                    thumb: 'iMItlUCtXC2WSFyEHQBBbVRCimNB1XcZ'\n                }\n            },\n            {\n                _id: '56360099f28a47ad2561be98',\n                username: 'testemUve',\n                email: 'test@testE7ho3.com',\n                ...\n            },\n            ....\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/SearchUser.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "SignUp",
    "name": "SignUp",
    "group": "WebAPI",
    "description": "<p>Signup to system</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>alphanumeric</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>username to use in signin</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>email</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email is used to resend password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>alphanumeric</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>alphanumeric</p> ",
            "optional": false,
            "field": "passwordConfirm",
            "description": "<p>should be same with password</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true,\n        user: {\n            __v: 0,\n            username: 'testz2u72',\n            email: 'test@testHkhbn.com',\n            password: 'c6adee58cf037f4590a7262a3c04678f56eb8f46',\n            created: 1446643127495,\n            _id: '563a05b7886db05ae62527bc'\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/SignUp.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/user/signin/UUID",
    "title": "SignIn with UUID",
    "name": "Sign_in_with_UUID",
    "group": "WebAPI",
    "description": "<p>Login to the system and get api token with UUID and secret</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "secret",
            "description": "<p>Secret Secret should be md5(yyyymmddhhmmss + password)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>display name</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true,\n        user: {\n            __v: 0,\n            username: '',\n            displayName: 'name',\n            email: '',\n            password: '',\n            created: 1446643669338,\n            _id: '563a07d56c486242e73cdc13',\n            loginCredentials: [\n                Object\n            ],\n            token: [\n                Object\n            ]\n        },\n        token: 'F1p2IJzRab4C7B46lQ6t83fDfcTZlHRK'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/SignInUUID.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "get",
    "url": "/test",
    "title": "Test",
    "name": "Test",
    "group": "WebAPI",
    "description": "<p>Just test</p> ",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "test",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/Test.js",
    "groupTitle": "WebAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/user/updateprofile",
    "title": "Updaet Profile",
    "name": "Updaet_Proile",
    "group": "WebAPI",
    "description": "<p>Update profile of request user</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "displayName",
            "description": "<p>Name to display</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>file</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>avatar file</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: 1,\n    data: {\n        ok: true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/WebAPI/UpdateProfile.js",
    "groupTitle": "WebAPI"
  }
] });