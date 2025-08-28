(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_newBoard");
            this.set_titletext("New Form");
            this.set_background(" #F2CC0C");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("result_data", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","382","210","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_background("#DC0630");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","502","210","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("newBoard_st_writer","382","267","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_background("#DC0630");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("newBoard_ed_writer","502","267","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_rtl("");
            this.addChild(obj.name, obj);

            obj = new Static("newBoard_st_content","382","325","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_background("#DC0630");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("newBoard_ta_content","502","324","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","533","564","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_background(" #0A4DA6");
            obj.set_borderRadius("10px");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","695","564","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_borderRadius("10px");
            obj.set_background("#bbbbbb");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","382","128","420","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#74BF04");
            obj.set_border("2px solid #0A4DA6");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","457","125","268","63",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("★ 작성 페이지 ★");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_list","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","newBoard_ed_writer","value","ds_list","BOARD_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","newBoard_ta_content","value","ds_list","BOARD_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_newBoard.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        		var strSvcID = "insertNewBoard";		//트랜잭션 아이디
        		var strURL = "svc::insertNewBoard.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_list=ds_list"; //내가 던질 데이터셋
        		var strOutDatasets = "result_data=result_data"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };

        this.fn_callBack = function(svcId, errCD, errMSG){
        	if(svcId === "insertNewBoard"){

        		this.alert(this.result_data.getColumn(0, "message"));
        		this.result_data.clearData();

        		this.close();
        	}
        }
        this.Button00_00_onclick = function(obj,e)
        {
        	//목록으로 돌아가기
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("Form_newBoard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
