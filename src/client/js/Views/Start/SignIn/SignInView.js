var Backbone = require('backbone');
var template = require('./SignIn.hbs');
var _ = require('lodash');
var SHA256 = require("crypto-js/sha256");

var Utils = require('../../../lib/utils');
var Const = require('../../../lib/consts');
var Config = require('../../../lib/init');
var loginUserManager = require('../../../lib/loginUserManager');
var socketIOManager = require('../../../lib/SocketIOManager');

var BaseView = require('../BaseView');
var SignInClient = require('../../../lib/APIClients/SignInClient');

var SignInView = BaseView.extend({

    initialize: function(options) {
        
        this.container = options.container;
        this.render();
    },

    render: function() {
        
        $(this.container).html(template());

        this.onLoad();

        return this;

    },

    onLoad: function(){

        var self = this;

        $('#form-signin input').unbind().on('keyup',function(e){

            if (e.keyCode == 13) {
                
                $('#form-signin #btn-signin').click();
                
            }

        });
        
		$('#form-signin #btn-signin').unbind().on('click',function(){
						
			if(!_.isEmpty($(this).attr('disabled')))
			    return;
                
			self.dismissAlerts();

			$(this).attr('disabled','disabled');
			
			self.validate(function(err){
				
				self.resetValidationAlert();
				
				if(!_.isEmpty(err.name)){
					$('#form-signin .username').addClass('has-error');
					$('#form-signin .username .help-block').text(err.name);
				}

				
				if(!_.isEmpty(err.password)){
					$('#form-signin .password').addClass('has-error');
					$('#form-signin .password .help-block').text(err.password);
				}
				
				var validationSuccess = _.isEmpty(err.name) && _.isEmpty(err.password);
				
				if(!validationSuccess){
                    $(this).removeAttr('disabled') 				
					return;
				}

        		var username = $('#form-signin input[name="username"]').val();
        		var password = $('#form-signin input[name="password"]').val();
                //todo use sha256 algo as android uses it
        		var passwordHashed = hash = SHA256(password);
                
                SignInClient.send({
                    
                    username:username,
                    password:passwordHashed
                                        
                },function(data){
                    
                    Utils.goPage("main");
                    loginUserManager.setUser(data.user);
                    loginUserManager.setToken(data.token);
                    
                    // login to socket
                    socketIOManager.emit("join",{user:data.user._id});
                    
                    $('#form-signin #btn-signin').removeAttr('disabled');				
                    
                },function(errorCode){
                    self.showError(errorCode);
                    $('#form-signin #btn-signin').removeAttr('disabled');	
                })

                
			});
			
		});
		
    },

	resetValidationAlert : function(){
		
		$('#form-signin .username').removeClass('has-error');
		$('#form-signin .username .help-block').text('');

		$('#form-signin .password').removeClass('has-error');
		$('#form-signin .password .help-block').text('');

	},
	
    validate: function(callBack){

		var name = $('#form-signin input[name="username"]').val();
		var password = $('#form-signin input[name="password"]').val();
		
		var err = {
		    general : '',
			name : ''
		}
		
		if(_.isEmpty(name))
			err.name = Utils.l10n("Please input user name.");
		
		if(_.isEmpty(password))
			err.password = Utils.l10n("Please input password.");
		
		callBack(err);
		
    }

});

module.exports = SignInView;
