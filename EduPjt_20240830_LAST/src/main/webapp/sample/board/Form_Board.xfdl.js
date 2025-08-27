(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SECOND_REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","41","58","172","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시판입니다.");
            obj.set_font("bold 18pt/normal \"맑은 고딕\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","225","1190","435",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_font("17px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\"/><Cell col=\"2\" text=\"bind:BOARD_WRITER\"/><Cell col=\"3\" text=\"bind:REG_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","40","135","1190","71",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("2px solid #0A4DA6");
            this.addChild(obj.name, obj);

            obj = new Static("board_st_title","31","17","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("14px/normal \"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("board_search_ed_title","67","24","207","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_writer","294","17","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_font("14px/normal \"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("board_search_ed_writer","339","25","229","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_regDate","607","16","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성일자");
            obj.set_font("14px/normal \"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("board_search_cd_firstDate","667","24","177","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_displayinvalidtext("invalid value");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","849","17","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_font("14px/normal \"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("board_search_cd_secondDate","864","24","178","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1068","21","70","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_borderRadius("10px");
            obj.set_background("#0A4DA6");
            obj.set_color("white");
            obj.set_font("bold 14px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","527","43","136","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("글쓰기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.board_search_ed_title","value","ds_search","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.board_search_ed_writer","value","ds_search","BOARD_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.board_search_cd_firstDate","value","ds_search","FIRST_REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.board_search_cd_secondDate","value","ds_search","SECOND_REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board.xfdl", function() {

        this.Form_Board_onload = function(obj,e)
        {
        	this.fn_search();

        	this.ds_search.setColumn(0, "FIRST_REG_DATE", 20250101);
        	this.ds_search.setColumn(0, "SECOND_REG_DATE", 20251231);
        };

        //조회 함수
        this.fn_search = function(){
        		var strSvcID = "readBoardList";
        		var strURL = "svc::readBoardList.do";
        		var strInDatasets = "";
        		var strOutDatasets = "ds_list=ds_list";
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        this.fn_callBack = function(svcId, errCD, errMSG){
        	if(svcId === "readBoardList"){

        	}
        	else if(svcId === "searchBoard"){
        		this.ds_search.clear();
        	}
        	else if(svcId === "searchBoardList"){

        	}
        }


        this.Grid00_oncellclick = function(obj,e)
        {
        	var boardIdx = this.ds_list.getColumn(e.row, "BOARD_CODE");

        	var boardIdx2 = this.ds_list.getColumn(this.ds_list.rowposition, "BOARD_CODE");

        	popup = new nexacro.ChildFrame;

        	var surl = "board::Form_BoardDetail.xfdl";

        	var param = {
        		boardIdx : boardIdx2
        	};

        	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_showtitlebar("상세보기");
        	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        		var strSvcID = "searchBoardList";
        		var strURL = "svc::searchBoardList.do";
        		var strInDatasets = "ds_search=ds_search"; //내가 던질 데이터셋
        		var strOutDatasets = "ds_list=ds_list"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("board::Form_newBoard.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_onload,this);
            this.addEventHandler("onsetfocus",this.Form_Board_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
