
$(document).ready(function ()
{
    window.DMO_Controler.Init();
    window.DMO_Console.Init();

}
);
$(document).load(function ()
{

}
);


window.DMO_Controler =
{
    Init: function ()
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
    LoadJS: function (_ScriptName)
    {
        $.ajax(
		{
		    url: "JavaScripts/" + _ScriptName,
		    type: "GET",
		    dataType: "script",
		    async: false

		}
		);
    }

};

window.DMO_Console =
{
    Init: function ()
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
        } else if (window.DMO_Config.RunLeavel == "D2")
        {
            $("body").append($("<div id='" + window.DMO_Config.Console.ConsoleCotrolId + "'style='width:80%;height:40%;position:absolute;right:0;bottom:0;z-index:9999;background-color:yellow;color:blue;'></div>"));
            this.Log = function(_Messege)
            {
                if (window.DMO_Config.Console.Enable)
                {
                    $("#" + window.DMO_Config.Console.ConsoleCotrolId).append(_Messege + "<br/>");
                }
            };

        }
    }
};
window.DMO_Account =
{
    Identification: function(_username, _password,_callback)
    {
        _username = _username || " ";
        _password = _password || " ";

        $.ajax(
            {
                url: window.DMO_Config.URL.LoginURL,
                type: "POST",
                dataType: "text",
                timeout: 5000,
                context: this,
                async: true,
                cache: false,
                data: "Username=" + _username + "&Password=" + _password,
                success: function(_data)
                {
                    if (_data.indexOf("/officedata/ldconfig.nsf/Homepage?OpenForm") != -1)
                    {
                        window.DMO_Console.Log("LoginSuccess!");
                        _callback({ success: true });
                    } else
                    {
                        window.DMO_Console.Log("WrongPassword!");
                        _callback({ success: false, cause: "WrongPassword!", code: 0x0001 });
                    }

                },
                error: function(_data)
                {
                    window.DMO_Console.Log("Error!" + _data);
                    _callback({ success: false, cause: "CanNotConnect!", code: 0x0002 });
                }
            });

    }
};




/* TEST Area */
var TEST_GetTestData = function()
{
    window.DMO_Console.Log("TEST_GetTestData");
    $.ajax(
        {
            url: "http://10.80.230.199/officedata/fwnbffk.nsf/ToDoDocForHomepage?ReadViewEntries&RestrictToCategory=%u95EB%u4FEE%u6625/%u516C%u53F8%u9886%u5BFC/%u6C34%u7535%u5341%u4E09%u5C40/SINOHYDRO",
            type: "GET",
            cache: false,
            dataType: "xml",
            async: false,
            success: function(_data)
            {

                var Obj = _data.childNodes[0];
                for (var i = 1; i < Obj.childNodes.length; i += 2)
                {
                    //	window.DMO_Console.Log(Obj.childNodes[i].childNodes[5]);

                    var testStr = Obj.childNodes[i].childNodes[1].textContent;
                    testStr += "     " + Obj.childNodes[i].childNodes[5].textContent;
                    $("#testid")[0].append += (testStr);
                }
            },
            error: function(_data)
            {
                window.DMO_Console.Log(_data);
            }
        }
    );
};
var testfunc2 = function()
{
    window.DMO_Console.Log("StartLogin!");
    window.DMO_Account.Login();
    window.DMO_Console.Log("End!");
    TEST_GetTestData();
};
var testfunc3 = function()
{
    window.DMO_Console.Log("StartLogin!");
    window.DMO_Account.Login();
    window.DMO_Console.Log("End!");
    $.ajax(
        {
            url: "http://10.80.230.199/officedata/fwrun.nsf/NewOpinionDialog?OpenForm&ParentUNID=5D5CB2790D0C94D548257BB7003F8B8D&Seq=1&OpinionType=%E7%AD%BE%E5%8F%91%E6%84%8F%E8%A7%81&OpinionField=qfyj",
            type: "POST",
            dataType: "html",
            timeout: 5000,
            async: false,
            data:
            {
                "__Click": "0",
                "SaveOptions": "0",
                "QUERY_STRING_DECODED": "OpenForm % 26ParentUnid % 3D5D5CB2790D0C94D548257BB7003F8B8D % 26OpinionType % 3D % C7 % A9 % B7 % A2 % D2 % E2 % BC % FB % 26OpinionField % 3Dqfyj",
                "ParentUnid": "5D5CB2790D0C94D548257BB7003F8B8D",
                "UnitName": null,
                "MainDbName": "officedata % 5Cldconfig.nsf",
                "CommonOpinion": null,
                "OpinionType": "% C7 % A9 % B7 % A2 % D2 % E2 % BC % FB",
                "OpinionUnid": "null",
                "OpinionField": "qfyj",
                "User": null,
                "Noter": null,
                "Index": null,
                "UserField": null,
                "DateField": null,
                "OpinionMode": "0",
                "OpinionBody": escape("我是陈德丞哈哈哈！")
            }
        }
    );

};
