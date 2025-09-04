(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_pw\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASS\" type=\"STRING\" size=\"256\"/><Column id=\"SALT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","286","242","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디 : ");
            obj.set_background("white");
            obj.set_borderRadius("8px");
            obj.set_textAlign("center");
            obj.set_font("bold 23px 맑은 고딕");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","286","324","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 : ");
            obj.set_background("white");
            obj.set_borderRadius("8px");
            obj.set_textAlign("center");
            obj.set_font("bold 23px 맑은 고딕");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_id","416","247","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_pw","416","329","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","440","430","145","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_borderRadius("12px");
            obj.set_font("bold 23px 맑은 고딕");
            obj.set_color("navy");
            obj.set_background("white");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","280","520","522","67",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(주) 에이치씨엔씨에 오신걸 환영 합니다.");
            obj.set_font("bold 16pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ed_id","value","ds_user","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ed_pw","value","ds_user","user_pw");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {

        this.Form_Main_onload = function(obj,e)
        {
        	trace(">>>");
        };

        this.Button00_onclick = function(obj,e)
        {
        	var userId = this.ds_user.getColumn(0, "user_id");
        	var userPw = this.ds_user.getColumn(0, "user_pw");



        	if(userId == null || userId =='undefined' || userId == ''){
        		this.alert("아이디 입력");
        		return;
        	}

        	if(userPw == null || userPw =='undefined' || userPw == ''){
        		this.alert("비밀번호 입력");
        		return;
        	}

        	//return;

        	var strSvcID = "selectUser";		//트랜잭션 아이디
        	var strURL = "svc::selectUser.do";	//url controller에서 받을 주소
        	var strDatasets = "ds_user=ds_user";
        	var strOutDatasets = "ds_login=ds_login";
        	var strArg = "";					//변수선언
        	var callBack = "fn_callBack";
        	var inAsync = true;					//동기 비동기 그런거

        	this.transaction(strSvcID,strURL,strDatasets,strOutDatasets,strArg,callBack,inAsync);


        };


        this.fn_callBack = function(id, errCode, errMsg){

        	if(id === "selectUser"){

        		var glbAd = nexacro.getApplication();

        		if(errCode < 0){
        			this.alert("로그인 중 오류 발생 : " + errMsg);
        			return;
        		}

        		var userId = this.ds_login.getColumn(0, "USER_ID");
        		var userName = this.ds_login.getColumn(0, "NAME");

        		if(userName != null && userName != ''){
        			//this.alert("로그인 성공!");
        			//0번째 행의 "user_id"컬럼에 3번째 매개변수를 저장하겠따.
        			glbAd.gds_userInfo.setColumn(0, "user_id", userId);

        			trace(userId);

        			this.ds_login.clear();

        			var objApp = nexacro.getApplication();
        			objApp.mainframe.VFrameSet00.TopFrame.set_visible(true);
        			objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_visible(true);
        			objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("product::Form_ProductMain.xfdl");

        			//this.getOwnerFrame().set_formurl("board::Form_Board.xfdl");

        		} else {
        			this.alert("아이디 또는 비밀번호가 올바르지 않습니다.");

        			this.ds_login.clear();
        		}
        	}

        };



        this.ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_id.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
