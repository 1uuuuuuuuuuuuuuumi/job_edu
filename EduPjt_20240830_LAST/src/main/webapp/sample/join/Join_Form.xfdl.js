(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Join_Form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("join_user", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_pw\" type=\"STRING\" size=\"256\"/><Column id=\"user_name\" type=\"STRING\" size=\"256\"/><Column id=\"user_email\" type=\"STRING\" size=\"256\"/><Column id=\"user_emailChk\" type=\"STRING\" size=\"256\"/><Column id=\"user_addr\" type=\"STRING\" size=\"256\"/><Column id=\"user_recommend\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("join_result", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("join_st_id","270","54","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_id","385","55","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_pw","270","103","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("패스워드");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_pw","385","104","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_name","270","149","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_name","385","150","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_email","270","198","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이메일");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_email","385","199","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_emailChk","270","247","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("인증번호");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_emailChk","385","247","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_addr","270","293","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주소");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_addr","385","293","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_recommend","271","340","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추천인");
            obj.set_background("red");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#fff");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_recommend","386","340","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_idChk","703","54","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("중복체크");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_email","702","197","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("인증");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_emailChk","701","245","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("확인");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_submit","426","428","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("회원가입");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_cancel","584","428","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("취소");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","join_ed_id","value","join_user","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","join_ed_pw","value","join_user","user_pw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","join_ed_name","value","join_user","user_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","join_ed_email","value","join_user","user_email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","join_ed_emailChk","value","join_user","user_emailChk");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","join_ed_addr","value","join_user","user_addr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","join_ed_recommend","value","join_user","user_recommend");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Join_Form.xfdl", function() {
        this.Join_Form_onload = function(obj,e)
        {
        	trace(">>>");
        };


        //중복체크버튼
        this.join_btn_idChk_onclick = function(obj,e)
        {
        	var userId = this.join_user.getColumn(0, "user_id");
        	var pw = this.join_user.getColumn(0, "user_pw");
        	var name = this.join_user.getColumn(0, "user_name");
        	var email = this.join_user.getColumn(0, "user_email");
        	var addr = this.join_user.getColumn(0, "user_addr");
        	var addrChk = this.join_user.getColumn(0, "user_addrChk");
        	var recommend = this.join_user.getColumn(0, "recommend");

        	var strSvcID = "joinUser";		//트랜잭션 아이디
        	var strURL = "svc::joinUser.do";	//url controller에서 받을 주소
        	var strDatasets = "join_user=join_user"; //내가 던질 데이터셋
        	var strOutDatasets = "join_result=join_result"; //내가 받을 데이터셋
        	var strArg = "";					//매개변수로 뭐가 들어가는지
        	var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        	var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        	this.transaction(strSvcID,strURL,strDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Join_Form_onload,this);
            this.join_st_id.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_id.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_st_pw.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_pw.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_st_name.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_name.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_st_email.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_email.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_st_emailChk.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_emailChk.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_st_addr.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_addr.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_st_recommend.addEventHandler("onclick",this.Static00_onclick,this);
            this.join_ed_recommend.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.join_btn_idChk.addEventHandler("onclick",this.join_btn_idChk_onclick,this);
        };
        this.loadIncludeScript("Join_Form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
