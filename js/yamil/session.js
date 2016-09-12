
var Session = 
{
    'c' : 0,
    'FunctionList' : new Array(),
    'Core': function()
    {
        try
        {
            var obj = request.Create();
            obj.url = "js/yamil/session.php";
            obj.parm = 
            {
                'type': Session.global.type,
                'id' : Session.global.id,
                'data' : Session.global.data
            }
            obj.async = true;
            obj.responseFunc = function()
            {
                for(var item in Session.FunctionList)
                {
                    Session.FunctionList[item](obj);
                }
                Session.FunctionList.length = 0;
                Session.FunctionList = [];
            };
            request.Start(obj);
            return true;
        }
        catch(e)
        {
            return false;
        }
    },
    /* Remove if session exist */
    'Remove' : function(_sessionID, _function)
    {
        if(typeof _function === 'function')
            this.FunctionList[this.c++] = _function;
        
        Session.global.Clean();
        Session.global.Set('REMOVE', _sessionID, null);
        return this.Core();
    },
    /* Check if session exist */
    'Check': function(_sessionID, _function)
    {
        if(typeof _function === 'function')
            this.FunctionList[this.c++] = _function;
        
        Session.global.Clean();
        Session.global.Set('CHECK', _sessionID, null);
        return this.Core();
    },
    /* Asign session's data */
    'Set': function(_sessionID, _sessionData, _function)
    {
        if(typeof _function === 'function')
            this.FunctionList[this.c++] = _function;
        
        Session.global.Clean();
        Session.global.Set('SET', _sessionID, _sessionData);
        return this.Core();
    },
    /* Get session's data */
    'Get': function(_sessionID, _function)
    {
        if(typeof _function === 'function')
            this.FunctionList[this.c++] = _function;
        
        Session.global.Clean();
        Session.global.Set('GET', _sessionID, null);
        return this.Core();
    }
}

Session.global = 
{
    'type' : null,
    'id' : null,
    'data' : null,
    
    'Set' : function(_type, _id, _data)
    {
        this.type = _type;
        this.id = _id;
        this.data = _data;
    },
    
    'Clean' : function()
    {
        this.type = null;
        this.id = null;
        this.data = null;
    }
}