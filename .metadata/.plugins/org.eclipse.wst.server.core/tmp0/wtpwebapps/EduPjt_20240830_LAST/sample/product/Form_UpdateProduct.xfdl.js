(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_UpdateProduct");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_SALE_RATE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_STOCK\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_response", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","348","30","585","660",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","78","52","150","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","118","115","150","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","134","230","150","72",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("재고");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","136","293","150","76",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","195","58","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","195","120","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","195","242","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","195","304","317","186",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","105","564","96","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","263","564","96","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","421","564","96","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","195","180","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","134","175","150","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("가격");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_product","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","ds_product","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit01_00","value","ds_product","PRODUCT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit02","value","ds_product","PRODUCT_STOCK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.TextArea00","value","ds_product","PRODUCT_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_UpdateProduct.xfdl", function() {

        this.Form_UpdateProduct_onload = function(obj,e)
        {
        	var productCode = this.parent.productIdx;

        	trace(productCode);

        	this.ds_search.setColumn(0, "PRODUCT_CODE", productCode);

        	this.fn_search();
        };

        this.fn_search = function(){
        		var strSvcID = "getProduct";		//트랜잭션 아이디
        		var strURL = "svc::getProduct.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_search=ds_search"; //내가 던질 데이터셋
        		var strOutDatasets = "ds_product=ds_product"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        }
        this.Div00_Button00_01_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fn_save = function(){
        		var strSvcID = "saveProduct";		//트랜잭션 아이디
        		var strURL = "svc::saveProduct.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_product=ds_product"; //내가 던질 데이터셋
        		var strOutDatasets = "ds_response=ds_response"; //내가 받을 데이터셋
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        }

        this.Div00_Button00_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        this.fn_callBack = function(svcId, errCd, errMsg){

        	switch(svcId) {
        	case "saveProduct":

        		var message = this.ds_response.getColumn(0, "message");
        		var result_value = this.ds_response.getColumn(0, "result_value");

        		if(result_value === 1){
        			this.alert(message);
        			this.close();
        		} else {
        			this.alert(message);
        		}

        		break;

        	default:

        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_UpdateProduct_onload,this);
            this.Div00.form.Edit00.addEventHandler("onchanged",this.Div00_Edit00_onchanged,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button00_01.addEventHandler("onclick",this.Div00_Button00_01_onclick,this);
        };
        this.loadIncludeScript("Form_UpdateProduct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
