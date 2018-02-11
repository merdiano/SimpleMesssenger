var _ = require('lodash');
var mongoose = require('mongoose');

var Const = require("../lib/consts");
var Config = require("../lib/init");

var BaseModel = require('./BaseModel');
var UserModel = function(){};

var DatabaseManager = require('../lib/DatabaseManager');

_.extend(UserModel.prototype,BaseModel.prototype);

UserModel.prototype.init = function(mongoose){
    
    this.schema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        created: Number,
        displayName: String,
        token : {
            token: String,
            generated: Number
        },
        avatar : {
            file : String,
            thumb : String
        },
        device : {
            pushToken : String,
            deviceType : String,
            appVersion : String
        },
        loginCredentials : {
            UUID : String
        },
        telNumber : String,
        additionalInfo: {}
    });
    this.model = mongoose.model(Config.dbCollectionPrefix + "users",this.schema);

}

UserModel.get = function(){
    
    return DatabaseManager.getModel('User').model;
    
}

     
// class methods
UserModel.getUsersById = function(userIds,callBack){
    
    var model = DatabaseManager.getModel('User').model;

    model.find({ _id: { "$in" : userIds } },function (err, result) {

        if (err) throw err;
                             
        if(callBack)
            callBack(result);    
    
    });
    
};

UserModel.getUserById = function(userId,callBack){
    
    var model = DatabaseManager.getModel('User').model;

    model.findOne({ _id: userId },function (err, result) {

        if (err) throw err;
                             
        if(callBack)
            callBack(result);    
    
    });
    
};

UserModel.getUsersByIdForResponse = function(userIds,callBack){
    
    var model = DatabaseManager.getModel('User').model;

    var query = DatabaseManager.getModel('User').model
                    .find({ _id: { "$in" : userIds } })
                    .select({
                        "_id": 1,
                        username : 1,
                        displayName : 1,
                        avatar : 1,
                        telNumber : 1,
                        additionalInfo : 1,
                    });

    query.exec(function (err, result) {

        if (err)
            throw err;
                
        if(callBack)
            callBack(result);    
    
    });

    
};


module["exports"] = UserModel;
