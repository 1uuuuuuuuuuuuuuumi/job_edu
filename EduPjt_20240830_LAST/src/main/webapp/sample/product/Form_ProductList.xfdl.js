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
            
            // UI Components Initialize
            obj = new Div("Div00","87","39","1109","650",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("lightgray");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_category","39","173","244","437",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_category");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리 코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_CODE\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","63","40","254","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("카테고리코드 :");
            obj.getSetter("onitemchanged").set("Div00_Static00_onitemchanged");
            obj.set_font("bold 20px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","206","50","195","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_innerdataset("ds_category");
            obj.set_datacolumn("CATE_CODE");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_product","313","173","756","437",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"174\"/><Column size=\"112\"/><Column size=\"64\"/><Column size=\"267\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리명\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"가격\"/><Cell col=\"3\" text=\"재고\"/><Cell col=\"4\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_NAME\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\"/><Cell col=\"2\" text=\"bind:PRODUCT_PRICE\"/><Cell col=\"3\" text=\"bind:PRODUCT_STOCK\"/><Cell col=\"4\" text=\"bind:PRODUCT_CONTENT\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","800","122","79","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_font("bold 17px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","988","122","79","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_borderRadius("5px");
            obj.set_font("bold 17px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","894","122","79","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_borderRadius("5px");
            obj.set_font("bold 17px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","207","132","35","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("+");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","247","132","35","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.grid_category","autofittype","gds_userInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.grid_category","binddataset","ds_category","");
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
        		var strOutDatasets = "ds_category=ds_category";
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync);
        }

        this.fn_callBack = function(svcId, errCD, errMSG){
        	if(svcId === "categoryList"){

        	}
        	else if(svcId === "productList"){

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




        this.Div00_Combo00_onitemchanged = function(obj,e)
        {
        	this.Div00.form.Combo00.set_value("- 전체 -");
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

        		var surl = "product::Form_ProductPop.xfdl";

        		var param = {
        			productIdx : productIdx2
        		};
        	} else {
        		var surl = "product::Form_ProductPop.xfdl";
        		var param = {};
        	}

        	popup.init("productPop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_showtitlebar("상세보기");
        	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductList_onload,this);
            this.Div00.form.grid_category.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Div00.form.grid_product.addEventHandler("oncelldblclick",this.Div00_grid_product_oncelldblclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button00_00_00_00.addEventHandler("onclick",this.Div00_Button00_00_00_00_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button02_onclick,this);
        };
        this.loadIncludeScript("Form_ProductList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
