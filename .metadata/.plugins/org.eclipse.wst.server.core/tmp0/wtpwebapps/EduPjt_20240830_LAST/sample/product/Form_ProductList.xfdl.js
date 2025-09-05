(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","20",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #CDCDCD");
            obj.set_background("#F6F6F6");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","472","16","200","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("CATE_NAME");
            obj.set_codecolumn("CATE_CODE");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","757","18","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","159","37","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_innerdataset("ds_combo");
            obj.set_datacolumn("CATE_CODE");
            obj.set_codecolumn("CATE_CODE");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_product","10","180",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"149\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"138\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" textAlign=\"center\"/><Cell col=\"1\" text=\"카테고리코드\" textAlign=\"center\"/><Cell col=\"2\" text=\"하위카테코드\" textAlign=\"center\"/><Cell col=\"3\" text=\"분류\" textAlign=\"center\"/><Cell col=\"4\" text=\"재고\" textAlign=\"center\"/><Cell col=\"5\" text=\"상품명\" textAlign=\"center\"/><Cell col=\"6\" text=\"금액\" textAlign=\"center\"/><Cell col=\"7\" text=\"할인여부\" textAlign=\"center\"/><Cell col=\"8\" text=\"할인금액\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CATE_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SUB_CATE_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SUB_CATE_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:STOCK\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PROD_NAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRICE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:DISCOUNT_YN\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:DISCOUNT_PRICE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1102","40","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","1015","38","79","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","1190","40","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","6","38","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("•카테고리코드");
            obj.set_textAlign("center");
            obj.set_font("bold 13pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","340","38","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("•카테고리명");
            obj.set_textAlign("center");
            obj.set_font("bold 13pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","646","38","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("•상품명");
            obj.set_textAlign("center");
            obj.set_font("bold 13pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","142","95","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("상품목록");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_total","125","143","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("| ");
            obj.set_font("bold 15pt \"돋움\"");
            obj.set_color("#7ec0e3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Combo00","index","ds_combo","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductList.xfdl", function() {

        this.Form_ProductList_onload = function(obj,e)
        {

        	this.fn_categoryList();
        	this.fn_productList();

        };

        this.fn_categoryList = function(){
        		var strSvcID = "categoryList";
        		var strURL = "svc::categoryList.do";
        		var strInDatasets = "";
        		var strOutDatasets = "ds_category=ds_category ds_combo=ds_category";
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        this.fn_callBack = function(svcId, errCD, errMSG){

        	switch(svcId) {
        	case "productList":
        		this.calculateTotalCount();
        		break;
        	case "categoryList" :
        		trace("Before addRow: " + this.ds_combo.rowcount);

        		var addRow = this.ds_combo.insertRow(0);
        		this.ds_combo.setColumn(addRow, "CATE_NAME", "-전체-");
        		this.ds_combo.setColumn(addRow, "CATE_CODE", "-전체-");

        		this.Div00.form.Combo00.set_value("-전체-");

        		var newRow = this.ds_category.insertRow(0);
        		this.ds_category.setColumn(newRow, "CATE_CODE", "-전체-");
        		this.ds_category.setColumn(newRow, "CATE_NAME", "-전체-");

        		this.Combo00.set_value("-전체-");

        		break;
        	case "searchProductList" :

        	default:
        	}

        };

        this.fn_productList = function(cate_code){
        		var strSvcID = "productList";
        		var strURL = "svc::productList.do";
        		var strInDatasets = "";
        		var strOutDatasets = "ds_product=ds_product";
        		var strArg = "CATE_CODE=" + cate_code; //파라미터 추가
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        };

        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	var row = this.Div00.form.grid_category.currentrow;
        	var targetCode = this.ds_category.getColumn(row, "CATE_CODE");
        	this.ds_product.filter("CATE_CODE == '" + targetCode + "'");
        };




        this.Div00_Button01_onclick = function(obj,e)
        {
        	this.ds_category.addRow();
        };

        this.Div00_Button02_onclick = function(obj,e)
        {
        	var row = this.ds_category.rowposition;
        	if(row > -1){
        		this.ds_category.deleteRow(row);
        	}
        };



        // 행삭제
        // this.Div00_Button00_00_00_00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var row = this.ds_product.rowposition;
        // 	if(row > -1){
        // 		this.ds_product.deleteRow(row);
        // 	}
        // };

        //등록버튼
        this.Button00_00_01_onclick = function(obj,e)
        {
        	var cate = this.ds_category;

        	popup = new nexacro.ChildFrame;

        		var surl = "product::Form_ProductPop.xfdl";
        		var param = {
        			cate : cate
        		};

        	//첫번째줄의 "productPop"는 네번째줄의"fn_popCallback"에 던져지는 svcID
        	popup.init("productPop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_showtitlebar("상세보기");
        	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        };

        //부모로 데이터
        this.fn_popCallback = function(svcID, strVal){
        	switch(svcID) {
        		case "productPop":
        			//넥사크로에서 지원하는 String함수
        			//indexOf() : 소괄호안의 문자열에 해당하는 값을 찾아주는 함수
        			if(String(strVal).indexOf("ok:::") > -1){
        				var rtnArr = String(strVal).replace("ok:::", "").split(",");

        				trace(rtnArr[0]);

        			}
        		break;
        	default:
        	}
        }

        //조회버튼(검색)
        this.Div00_Button00_onclick = function(obj,e)
        {
        	var strSvcID = "searchProductList";
        	var strURL = "svc::searchProductList.do";
        	var strInDatasets = "ds_search=ds_search"; //내가 던질 데이터셋
        	var strOutDatasets = "ds_product=ds_product"; //내가 받을 데이터셋
        	var strArg = "";					//매개변수로 뭐가 들어가는지
        	var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        	var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);

        };

        this.calculateTotalCount = function() {
            var rowCount = this.ds_product.getRowCount();
            if(this.st_total) {
                this.st_total.set_text(" | 총 " + rowCount + "건");
            } else {
                trace("sta_total는 undefined ~");
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductList_onload,this);
            this.addEventHandler("onsetfocus",this.Form_ProductList_onload,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.grid_product.addEventHandler("oncelldblclick",this.Div00_grid_product_oncelldblclick,this);
            this.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Button00_00_00_00.addEventHandler("onclick",this.Div00_Button00_00_00_00_onclick,this);
            this.Button00_00_01.addEventHandler("onclick",this.Button00_00_01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.st_total.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Form_ProductList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
