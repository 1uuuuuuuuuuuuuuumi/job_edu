(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_UserList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_users", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level", this);
            obj._setContents("<ColumnInfo><Column id=\"LEVEL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEVEL_CODE\">01</Col><Col id=\"LEVEL\">일반</Col></Row><Row><Col id=\"LEVEL_CODE\">02</Col><Col id=\"LEVEL\">브론즈</Col></Row><Row><Col id=\"LEVEL_CODE\">03</Col><Col id=\"LEVEL\">실버</Col></Row><Row><Col id=\"LEVEL_CODE\">04</Col><Col id=\"LEVEL\">골드</Col></Row><Row><Col id=\"LEVEL_CODE\">05</Col><Col id=\"LEVEL\">플레티넘</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","180",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_users");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"126\"/><Column size=\"234\"/><Column size=\"129\"/><Column size=\"111\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"등급\"/><Cell col=\"6\" text=\"포인트\"/><Cell col=\"7\" text=\"휴면유무\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BIRTH_DAY\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ADDRESS\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:LEVEL\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:POINT\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:IS_USE\" edittype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","20",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #CDCDCD");
            obj.set_background("#F6F6F6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","89","17","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","359","17","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","628","17","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_innerdataset("ds_level");
            obj.set_codecolumn("LEVEL_CODE");
            obj.set_datacolumn("LEVEL");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1180","17","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","1092","17","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_font("bold 13pt \"굴림\"");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","1004","17","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","7","37","107","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("•회원ID");
            obj.set_font("bold 13pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","288","37","107","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("•이름");
            obj.set_font("bold 13pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","556","37","107","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("•등급");
            obj.set_font("bold 13pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","927","38","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","142","95","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("회원조회");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_total","125","143","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("| ");
            obj.set_font("bold 15pt \"돋움\"");
            obj.set_color("#7ec0e3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1180","130","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("+");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","1230","130","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("-");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_search","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Combo00","value","ds_users","LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Grid00","binddataset","ds_users","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_UserList.xfdl", function() {

        this.Form_UserList_onload = function(obj,e)
        {
        	this.userList();
        };

        this.userList = function(){
        		var strSvcID = "userList";		//트랜잭션 아이디
        		var strURL = "svc::userList.do";	//url controller에서 받을 주소
        		var strInDatasets = ""; //내가 던질 데이터셋
        		var strOutDatasets = "ds_users=ds_users"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        }

        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {
            if(svcID === "userList" && errorCode === 0) {
                this.calculateTotalCount();

        		var newRow = this.ds_level.insertRow(0);
        		this.ds_level.setColumn(newRow, "LEVEL_CODE", "00");
        		this.ds_level.setColumn(newRow, "LEVEL", "-전체-");

        		this.Div00.form.Combo00.set_value("00");
            }

        	trace("fn_callBack: " + svcID + " / errorCode: " + errorCode);

            if (svcID === "searchUserList" && errorCode === 0) {
                trace(" 총 : " + this.ds_users.getRowCount());
                this.calculateTotalCount();

            }

        };

        this.calculateTotalCount = function() {
            var rowCount = this.ds_users.getRowCount();
            if(this.st_total) {
                this.st_total.set_text(" | 총 " + rowCount + "건");
            } else {
                trace("sta_total is undefined");
            }
        };



        this.Button01_onclick = function(obj,e)
        {
        	this.ds_users.addRow();
        };

        this.Button02_onclick = function(obj,e)
        {
        	var row = this.Grid00.getSelectedRows()

        	this.ds_users.deleteRow(row);
        };

        //조회
        this.Div00_Button02_onclick = function(obj,e)
        {



        	var strSvcID = "searchUserList";
        	var strURL = "svc::searchUserList.do";
        	var strInDatasets = "ds_search=ds_search"; //내가 던질 데이터셋
        	var strOutDatasets = "ds_users=ds_users"; //내가 받을 데이터셋
        	var strArg = "";					//매개변수로 뭐가 들어가는지
        	var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        	var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        };

        //저장
        this.Div00_Button01_onclick = function(obj,e)
        {
        		var strSvcID = "saveUser";		//트랜잭션 아이디
        		var strURL = "svc::saveUser.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_users=ds_users:U"; //:U가 상태가 변화된 행만 서버에 데이터 전송
        		var strOutDatasets = ""; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기

        };

        this.Div00_Combo00_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "LEVEL", this.Div00.form.Combo00.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_UserList_onload,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button02_onclick,this);
            this.st_total.addEventHandler("onclick",this.Static01_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Form_UserList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
