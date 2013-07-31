
$(document).ready(function ()
{
	window.DMO_Controler.Init();
	window.DMO_Console.Init();
	window.DMO_Account.Login();
	TEST_GetTestData();
}
);

window.DMO_Config =
{

	RunLeavel : "D1",
	Console :
	{
		ConsoleCotrolId : "Console",
		Enable : true
	}

}
window.DMO_Controler =
{
	Init : function ()
	{
		switch (window.DMO_Config.RunLeavel)
		{
		case "D1":
			break;
		case "D2":
			this.LoadJS("cordova.js");
			break;
		default:
			alert("Unexpected RunLeavelCode!");
			break;

		}
	},
	LoadJS : function (_ScriptName)
	{
		$.ajax(
		{
			url : "JavaScript/" + _ScriptName,
			type : "GET",
			dataType : "script",
			async : false

		}
		);
	}

};

window.DMO_Console =
{
	Init : function ()
	{
		if (window.DMO_Config.RunLeavel == "D1")
		{
			this.Log = function (_Messege)
			{
				if (window.DMO_Config.Console.Enable)
				{
					console.log(_Messege);
				}
			};
		}
		else if (window.DMO_Config.RunLeavel == "D2")
		{
			$("body").append($("<div id='" + window.DMO_Config.Console.ConsoleCotrolId + "'style='width:80%;height:40%;position:absolute;right:0;bottom:0;background-color:yellow;color:blue;'></div>"));
			this.Log = function (_Messege)
			{
				if (window.DMO_Config.Console.Enable)
				{
					$("#" + window.DMO_Config.Console.ConsoleCotrolId).append(_Messege + "<br/>");
				}
			}

		}
	}
}
window.DMO_Account =
{
	Init : function ()  {},
	Login : function (_username, _password)
	{
		var username = _username || " ";
		var password = _password || " ";
		document.cookie = "LastLoginUser"+"=;expires="+(new Date(0)).toGMTString();
		document.cookie = "SysLogin"+"=;expires="+(new Date(0)).toGMTString();
		document.cookie = "DomAuthSessId"+"=;expires="+(new Date(0)).toGMTString();
		
		$.ajax(
		{
			url : "http://10.80.230.199/names.nsf?Login",
			type : "POST",
			dataType : "html",
			async : false,
			data :
			{
				"%%ModDate" : "0000000000000000",
				"Remote_Addr" : "10.81.229.9",
				"Path" : "/ldfiles/ldimges/login/",
				"jspath" : "/ldfiles/ldjs/",
				"csspath" : "/ldfiles/ldcss/",
				"imgepath" : "/ldfiles/ldimges/login/",
				"Username" : "13jyanxch",
				"Password" : "12345s6",
				"Submit" : "%B5%C7%C2%BC",
				"RedirectTo" : "/officedata/ldconfig.nsf?open",
				"$PublicAccess" : "1",
				"reasonType" : "2",
				"SaveOptions" : "0"
			},
			success : function (_data)
			{
				if (_data.indexOf("/officedata/ldconfig.nsf/Homepage?OpenForm") != -1)
				{
					window.DMO_Console.Log("LoginSuccess!");
				}
				else
				{
						window.DMO_Console.Log("WrongPassword!");
				}

			},
			error : function (_data)
			{
				window.DMO_Console.Log("Error!" + _data);
			}

		}
		);
	}
}
/* TEST Area */
var TEST_GetTestData = function ()
{
	window.DMO_Console.Log("TEST_GetTestData");
	$.ajax(
	{
		url : "http://10.80.230.199/officedata/fwnbffk.nsf/ToDoDocForHomepage?ReadViewEntries&RestrictToCategory=%u95EB%u4FEE%u6625/%u516C%u53F8%u9886%u5BFC/%u6C34%u7535%u5341%u4E09%u5C40/SINOHYDRO",
		type : "GET",
		cache:false,
		dataType : "xml",
		async : false,
		success : function (_data)
		{
			window.DMO_Console.Log(_data);
		},
		error : function (_data)
		{
			window.DMO_Console.Log(_data);
		}

	}
	);
}
