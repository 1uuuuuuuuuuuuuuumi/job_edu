(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_BoardDetail");
            this.set_titletext("New Form");
            this.set_background(" #F2CC0C");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("result_data", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("b_detail_st_title","382","215","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_background("#DC0630");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("b_detail_ed_title","502","215","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("onclick").set("Common_onclick");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("b_detail_st_title00","382","270","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_background("#DC0630");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("b_detail_ed_title00","501","270","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("onclick").set("Common_onclick");
            obj.set_borderRadius("5px");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("b_detail_st_title00_00","382","325","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_textAlign("center");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_background("#DC0630");
            obj.set_color("#ffffff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","500","325","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","532","576","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            obj.set_background(" #0A4DA6");
            obj.set_borderRadius("10px");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","712","576","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_borderRadius("10px");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#ffffff");
            obj.set_background("#bbbbbb");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","391","61","311","79",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("★ 상세 페이지 ★");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","383","140","421","55",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#74BF04");
            obj.set_border("2px solid #0A4DA6");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","276","10","115","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("목록으로가기");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_borderRadius("10px");
            obj.set_background(" #0A4DA6");
            obj.set_color("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","26","10","202","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("black");
            obj.set_background("rgba(255, 255, 255, 0.5)");
            obj.set_borderRadius("5px");
            obj.set_padding("5px");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","b_detail_ed_title","value","ds_board","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","b_detail_ed_title00","value","ds_board","BOARD_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","TextArea00","value","ds_board","BOARD_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Static01","text","ds_board","REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_BoardDetail.xfdl", function() {


        this.Form_BoardDetail_onload = function(obj,e)
        {
        	//부모(From_Board.xfdl)로한테 받은 파라미터를 변수에 저장함.
        	var boardIdx = this.parent.boardIdx;

        	this.ds_search.setColumn(0, "BOARD_CODE", boardIdx);

        		var strSvcID = "getBoard";		//트랜잭션 아이디
        		var strURL = "svc::getBoard.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_search=ds_search"; //내가 던질 데이터셋
        		var strOutDatasets = "ds_board=ds_board"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기

        };


        this.Button00_00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Button00_onclick = function(obj,e)
        {
        		var strSvcID = "updateBoard";		//트랜잭션 아이디
        		var strURL = "svc::updateBoard.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_board=ds_board"; //내가 던질 데이터셋
        		var strOutDatasets = "result_data=result_data"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };

        this.fn_callBack = function(svcId, errCD, errMSG){
        	if(svcId === "updateBoard"){
        		var message = this.result_data.getColumn(0, "message");
        		var resultValue = this.result_data.getColumn(0, "result_value");

        		this.alert(message);
        		this.reload();

        		this.result_data.clearData();
        	}
        	else if(svcId === "deleteBoard"){
        		var message = this.result_data.getColumn(0, "message");
        		var resultValue = this.result_data.getColumn(0, "result_value");

        		this.alert(message);
        		this.close();

        		this.result_data.clearData();
        	}
        }
        this.Button00_01_onclick = function(obj,e)
        {
        	if(this.confirm("삭제하시겠습니까?")){
        		var strSvcID = "deleteBoard";		//트랜잭션 아이디
        		var strURL = "svc::deleteBoard.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_board=ds_board"; //내가 던질 데이터셋
        		var strOutDatasets = "result_data=result_data"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        	} else {

        	}
        };


        this.Div00_Static01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_BoardDetail_onload,this);
            this.b_detail_st_title.addEventHandler("onclick",this.Common_onclick,this);
            this.b_detail_st_title00.addEventHandler("onclick",this.Common_onclick,this);
            this.b_detail_st_title00_00.addEventHandler("onclick",this.Common_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
        };
        this.loadIncludeScript("Form_BoardDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
