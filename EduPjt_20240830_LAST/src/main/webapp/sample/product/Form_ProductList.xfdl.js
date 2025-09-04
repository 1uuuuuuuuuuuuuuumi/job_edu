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
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_SALE_RATE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_STOCK\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_product","10","180",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"174\"/><Column size=\"112\"/><Column size=\"64\"/><Column size=\"267\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리명\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"가격\"/><Cell col=\"3\" text=\"재고\"/><Cell col=\"4\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_NAME\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\"/><Cell col=\"2\" text=\"bind:PRODUCT_PRICE\"/><Cell col=\"3\" text=\"bind:PRODUCT_STOCK\"/><Cell col=\"4\" text=\"bind:PRODUCT_CONTENT\"/></Band></Format></Formats>");
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
        		break;
        	case "categoryList" :

        		case "categoryList" :
            trace("Before addRow: " + this.ds_combo.rowcount);

            var addRow = this.ds_combo.insertRow(0);
            this.ds_combo.setColumn(addRow, "CATE_NAME", "- 전체 -");
            this.ds_combo.setColumn(addRow, "CATE_CODE", "- 전체 -");

            this.Div00.form.Combo00.set_value("- 전체 -");
            break;


        		break;
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
        }
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




        this.Div00_Button00_00_00_00_onclick = function(obj,e)
        {
        	var row = this.ds_product.rowposition;
        	if(row > -1){
        		this.ds_product.deleteRow(row);
        	}
        };

        //상품리스트 더블클릭
        this.Div00_grid_product_oncelldblclick = function(obj,e)
        {
        	var productIdx = this.ds_product.getColumn(e.row, "PRODUCT_CODE");

        	var productIdx2 = this.ds_product.getColumn(this.ds_product.rowposition, "PRODUCT_CODE");

        	popup = new nexacro.ChildFrame;

        	if(productIdx != null && productIdx != '' && productIdx != undefined){

        		var surl = "product::Form_UpdateProduct.xfdl";

        		var param = {
        			productIdx : productIdx2
        		};
        	} else {
        		var surl = "product::Form_ProductPop.xfdl";
        		var param = {};
        	}

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
        this.Div00_Combo00_onitemchanged = function(obj,e)
        {

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
            this.st_total.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Form_ProductList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
