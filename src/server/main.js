var socket = require('socket.io');
var express = require('express');
var http = require('http');
var spika = require('../../modules_customised/spika');

var Conf = require('./lib/init.js');

// initialization
var app = express();
var server = http.createServer(app);
var port = Conf.port;
var io = socket.listen(server);

var WebAPI = require('./WebAPI/WebAPIMain');
var DatabaseManager = require('./lib/DatabaseManager');
var PushNotificationManager = require('./lib/pushnotification/PushNotificationManager');

var SpikaServer = new spika(app,io,{

    config:{
        chatDatabaseUrl : Conf.databaseUrl,
        port: Conf.port,
        uploadDir: Conf.uploadPath,
        imageDownloadURL: "/spika/media/images/",
        noavatarImg: "/spika/img/noavatar.png",
        urlPrefix: '/spika',
        sendAttendanceMessage: false
    },
    listeners:{

        onNewMessage:function(obj){

            PushNotificationManager.onNewMessage(obj);

        },
        onNewUser:function(obj){

            console.log("onNewUser",obj);

        },
        OnUserTyping:function(obj){

            console.log("OnUserTyping ",obj);

        },
        OnMessageChanges:function(obj){

            console.log("OnMessageChanges ",obj);

        }

    }

});

DatabaseManager.init(function(success){

    if(!success){

        console.log('Failed to connect DB');
        process.exit(1);

    } else {

        WebAPI.init(app);

        server.listen(Conf.port, function(){
            console.log('Server listening on port ' + Conf.port + '!');
        });

    }

});
