
$(document).ready(function ()
{
	window.DMO_Controler.Init();
	window.DMO_Console.Init();
	window.window.DMO_Account.Login();
}
);

window.DMO_Config =
{
	RunLeavel : "D1",
	Console :
	{
		ConsoleCotrolId : "Console",
		Enable : "false"
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
				console.log(_Messege);
			};
		}
		else if (window.DMO_Config.RunLeavel == "D2")
		{
			//TODO: Add Web Console Context Here
		}
	}
};
window.DMO_Account =
{
	Init : function ()
	{},
	Login : function (_username, _password)
	{
		var username = _username || "";
		var password = _password || "";
		$.ajax(
		{
			url : "http://10.80.230.199/names.nsf?open",
			type : "POST",
			dataType : "html",
			async : false,
			data :
			{
				"%%ModDate" : "0000000000000000",
				"Remote_Addr" : "10.81.229.24",
				"Path" : "/ldfiles/ldimges/login/",
				"jspath" : "/ldfiles/ldjs/",
				"csspath" : "/ldfiles/ldcss/",
				"imgepath" : "/ldfiles/ldimges/login/",
				"Username" : $.url.encode("闫修春"),
				"Password" : "123456",
				"RedirectTo" : "/officedata/ldconfig.nsf?open",
				"$PublicAccess" : "1",
				"reasonType" : "2",
				"SaveOptions" : "0"
			},
			success : function (_data)
			{
				window.DMO_Console.Log("LoginSuccess!");
			},
			error : function ()
			{}
			
		}
		);
	}
}
/* TEST Area */
var TEST_GetTestData=function()
{
		$.ajax(
		{
			url : "http://10.80.230.199/officedata/fwnbffk.nsf/ToDoDocForHomepage?ReadViewEntries&RestrictToCategory=%u95EB%u4FEE%u6625/%u516C%u53F8%u9886%u5BFC/%u6C34%u7535%u5341%u4E09%u5C40/SINOHYDRO",
			type : "GET",
			dataType : "xml",
			async : false,
			success : function (_data)
			{
				window.DMO_Console.Log(_data);
			},
			error : function ()
			{}
			
		});
}
	
	
	
	
	
