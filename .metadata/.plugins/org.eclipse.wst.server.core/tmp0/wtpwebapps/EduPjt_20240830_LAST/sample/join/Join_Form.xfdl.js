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
            this.set_background(" #F2CC0C");
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
            obj = new Static("join_st_id","398","144","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_id","513","145","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_pw","398","193","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("패스워드");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#fff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_pw","513","194","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_name","398","239","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#fff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_name","513","240","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_email","398","288","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이메일");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#fff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_email","513","289","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_emailChk","398","337","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("인증번호");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#fff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_emailChk","513","337","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_addr","398","383","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주소");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#fff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_addr","513","383","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_recommend","399","430","110","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추천인");
            obj.set_background("#DC0630");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#fff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_recommend","514","430","307","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("13px 맑은 고딕");
            obj.set_padding("5px");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_idChk","831","144","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("중복체크");
            obj.set_borderRadius("10px");
            obj.set_background("#74BF04");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_email","830","287","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("인증");
            obj.set_borderRadius("8px");
            obj.set_background("#74BF04");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_emailChk","829","335","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("확인");
            obj.set_borderRadius("8px");
            obj.set_background("#74BF04");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_submit","498","534","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("회원가입");
            obj.set_borderRadius("10px");
            obj.set_color("#ffffff");
            obj.set_background(" #0A4DA6");
            obj.set_font("bold 14px 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_cancel","656","534","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("취소");
            obj.set_borderRadius("10px");
            obj.set_background("#bbbbbb");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px 맑은 고딕");
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
        	var strSvcID = "idChk";		//트랜잭션 아이디
        	var strURL = "svc::idChk.do";	//url controller에서 받을 주소
        	var strInDatasets = "idChk=join_user"; //내가 던질 데이터셋
        	var strOutDatasets = "join_result=idChk_result"; //내가 받을 데이터셋
        	var strArg = "";					//매개변수로 뭐가 들어가는지
        	var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        	var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };

        this.fn_callBack = function(svcId, errCD, errMSG){
        	if(svcId == "idChk"){
        		var message = this.join_result.getColumn(0, "message");

        		this.alert(message);

        		this.join_result.clearData();
        	}
        	else if(svcId == "joinUser"){
        		var message = this.join_result.getColumn(0, "message");
        		var resultValue = this.join_result.getColumn(0, "result_value");

        		this.alert(message);

        		if(resultValue === 1){
        			this.getOwnerFrame().set_formurl("board::Form_Board.xfdl");
        		} else {
        			this.reload(); //화면 새로고침
        		}

        		this.join_result.clearData();
        	}
        };


        this.join_btn_submit_onclick = function(obj,e)
        {
        	var strSvcID = "joinUser";		//트랜잭션 아이디
        	var strURL = "svc::joinUser.do";	//url controller에서 받을 주소
        	var strInDatasets = "join_user=join_user"; //내가 던질 데이터셋
        	var strOutDatasets = "join_result=join_result"; //내가 받을 데이터셋
        	var strArg = "";					//매개변수로 뭐가 들어가는지
        	var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        	var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
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
            this.join_btn_submit.addEventHandler("onclick",this.join_btn_submit_onclick,this);
        };
        this.loadIncludeScript("Join_Form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
