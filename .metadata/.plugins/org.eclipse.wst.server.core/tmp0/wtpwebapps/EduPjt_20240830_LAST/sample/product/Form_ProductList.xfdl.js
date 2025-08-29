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
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_SALE_RATE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_STOCK\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","87","39","1109","650",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("lightgray");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","39","173","280","437",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_category");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"230\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리 코드\"/><Cell col=\"1\" text=\"카테고리명\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_CODE\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:CATE_NAME\" edittype=\"normal\"/></Band></Format></Formats>");
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
            obj.set_text("-전체-");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","357","173","712","437",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"174\"/><Column size=\"144\"/><Column size=\"105\"/><Column size=\"246\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리명\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"가격\"/><Cell col=\"3\" text=\"재고\"/><Cell col=\"4\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_CODE\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\"/><Cell col=\"2\" text=\"bind:PRODUCT_PRICE\"/><Cell col=\"3\" text=\"bind:PRODUCT_STOCK\"/><Cell col=\"4\" text=\"bind:PRODUCT_CONTENT\"/></Band></Format></Formats>");
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

            obj = new Button("Button00_00","283","132","35","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("-");
            obj.set_borderRadius("5px");
            obj.set_font("bold 17px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","243","132","35","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("+");
            obj.set_borderRadius("5px");
            obj.set_font("bold 17px 맑은 고딕");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Grid00","autofittype","gds_userInfo","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo00","text","ds_category","CATE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Combo00","value","ds_category","CATE_CODE");
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
        	this.fn_CategoryList();
        };

        this.fn_CategoryList = function(){
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
        	if(svcId === categoryList){

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductList_onload,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button00_00_00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };
        this.loadIncludeScript("Form_ProductList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
