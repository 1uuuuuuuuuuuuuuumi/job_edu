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
            this.set_background(" #F2CC0C");
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
            obj = new Static("Static00","46","58","377","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("★ 루미랜드 게시판 ★");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","45","225","92.97%","435",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_useselcolor("false");
            obj.set_border("2px solid  #0A4DA6");
            obj.set_borderRadius("5px");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"144\"/><Column size=\"309\"/><Column size=\"309\"/><Column size=\"309\"/><Column size=\"309\"/></Columns><Rows><Row size=\"52\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\" background=\"#74BF04\" font=\"bold 20px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"1\" text=\"제목\" background=\"#74BF04\" font=\"bold 20px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"2\" text=\"작성자\" background=\"#74BF04\" font=\"bold 20px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"3\" text=\"내용\" background=\"#74BF04\" font=\"bold 20px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"4\" text=\"작성일자\" background=\"#74BF04\" font=\"bold 20px 맑은 고딕\" padding=\"5px 0px\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" color=\"black\" textAlign=\"center\" cursor=\"pointer\" font=\"bold 15px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\" edittype=\"normal\" color=\"black\" cursor=\"pointer\" textAlign=\"center\" font=\"bold 15px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"2\" text=\"bind:BOARD_WRITER\" edittype=\"normal\" color=\"black\" cursor=\"pointer\" textAlign=\"center\" font=\"bold 15px 맑은 고딕\" padding=\"5px 0px\"/><Cell col=\"3\" text=\"bind:BOARD_CONTENT\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:REG_DATE\" edittype=\"date\" color=\"black\" cursor=\"pointer\" textAlign=\"center\" font=\"bold 15px 맑은 고딕\" padding=\"5px 0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","45","135","1190","71",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("2px solid #0A4DA6");
            obj.set_background("#74BF04");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("board_st_title","29","17","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("board_search_ed_title","67","20","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_writer","293","17","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("board_search_ed_writer","349","20","200","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_regDate","588","16","79","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성일자");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("board_search_cd_firstDate","664","19","177","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_displayinvalidtext("invalid value");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","846","16","54","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("board_search_cd_secondDate","864","19","178","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1068","19","77","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_borderRadius("10px");
            obj.set_background("#0A4DA6");
            obj.set_color("white");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","1330","109","100","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("글쓰기");
            obj.set_background("#DC0630");
            obj.set_font("bold 14px 맑은 고딕");
            obj.set_color("#ffffff");
            obj.set_cursor("pointer");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1022","80","100","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행 추가");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_background("white");
            obj.set_color("#dc0630");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1134","80","100","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행 삭제");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_background("white");
            obj.set_color("#dc0630");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","910","80","100","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_background("#DC0630");
            obj.set_color("white");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_borderRadius("5px");
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
        this.registerScript("Form_Board_copy0.xfdl", function() {

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


        // 한 행 클릭했을 때 이벤트
        // this.Grid00_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	var boardIdx = this.ds_list.getColumn(e.row, "BOARD_CODE");
        //
        // 	var boardIdx2 = this.ds_list.getColumn(this.ds_list.rowposition, "BOARD_CODE");
        //
        // 	popup = new nexacro.ChildFrame;
        //
        // 	var surl = "board::Form_BoardDetail.xfdl";
        //
        // 	var param = {
        // 		boardIdx : boardIdx2
        // 	};
        //
        // 	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        // 	popup.set_dragmovetype("all");
        // 	popup.set_showtitlebar("상세보기");
        // 	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        // };

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

        //더블클릭할 때 이벤트
        // this.Grid00_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	var boardIdx = this.ds_list.getColumn(e.row, "BOARD_CODE");
        //
        // 	var boardIdx2 = this.ds_list.getColumn(this.ds_list.rowposition, "BOARD_CODE");
        //
        // 	popup = new nexacro.ChildFrame;
        //
        // 	if(boardIdx != null && boardIdx != '' && boardIdx != undefined){
        //
        // 		var surl = "board::Form_BoardDetail.xfdl";
        //
        // 		var param = {
        // 			boardIdx : boardIdx2
        // 		};
        // 	} else {
        // 		var surl = "board::Form_newBoard.xfdl";
        // 		var param = {};
        // 	}
        //
        // 	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        // 	popup.set_dragmovetype("all");
        // 	popup.set_showtitlebar("상세보기");
        // 	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        // };

        //행추가
        this.Button01_onclick = function(obj,e)
        {
        	this.ds_list.addRow();
        };

        //행삭제
        this.Button01_00_onclick = function(obj,e)
        {
        	var row = this.Grid00.getSelectedRows()

        // 	this.ds_list.addColumn("ROW_TYPE", String());
        // 	this.ds_list.setColumn(row, "ROW_TYPE", "D");
        	this.ds_list.deleteRow(row);
        };

        //저장
        this.Button02_onclick = function(obj, e)
        {
        		var strSvcID = "saveBoard";		//트랜잭션 아이디
        		var strURL = "svc::saveBoard.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_list=ds_list:U"; //:U가 상태가 변화된 행만 서버에 데이터 전송
        		var strOutDatasets = ""; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Board_onload,this);
            this.addEventHandler("onsetfocus",this.Form_Board_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Form_Board_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
