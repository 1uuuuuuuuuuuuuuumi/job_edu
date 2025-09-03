(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_TestLogin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_pw\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("static_login","223","250","142","53",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","200","327","189","87",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("패스워드");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_login","405","247","375","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_password","410","336","373","54",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("button_login","370","495","146","68",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            this.addChild(obj.name, obj);

            obj = new Button("button_join","577","493","143","72",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원가입");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edit_login","value","dsLogin","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edit_password","value","dsLogin","user_pw");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_TestLogin.xfdl", function() {

        //로그인
        this.button_login_onclick = function(obj,e)
        {
        		var strSvcID = "selectUser";		//트랜잭션 아이디
        		var strURL = "svc::selectUser.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_user=dsLogin"; //내가 던질 데이터셋
        		var strOutDatasets = "dsLogin=ds_login"; //내가 받을 데이터셋(뒤에꺼만바꾸기)
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edit_login.addEventHandler("onchanged",this.edit_login_onchanged,this);
            this.button_login.addEventHandler("onclick",this.button_login_onclick,this);
        };
        this.loadIncludeScript("Form_TestLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
