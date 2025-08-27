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
            obj = new Static("Static00","372","155","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_background("#DC0630");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_borderRadius("5px");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","485","155","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("newBoard_st_writer","427","195","152","85",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("newBoard_ed_writer","484","217","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_rtl("");
            this.addChild(obj.name, obj);

            obj = new Static("newBoard_st_content","433","274","152","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("newBoard_ta_content","483","274","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","508","504","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","670","504","75","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
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

        		this.getOwnerFrame().set_formurl("board::Form_Board.xfdl");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_newBoard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
