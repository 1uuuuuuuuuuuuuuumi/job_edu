(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cate", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_discount_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"DISCOUNT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DISCOUNT_YN\">Y</Col></Row><Row><Col id=\"DISCOUNT_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","335","30","611","660",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("white");
            obj.set_border("3px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","78","95","150","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("• 카테고리코드");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","78","155","150","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("• 카테고리명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","78","215","150","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("• 상품명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","78","276","150","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("• 금액");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","240","538","110","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_font("bold 18px \"굴림\"");
            obj.set_borderRadius("5px");
            obj.set_color("navy");
            obj.set_border("1px solid black");
            obj.set_background("white");
            obj.set_cursor("pointer");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","78","337","155","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("• 할인여부");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","78","401","120","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("• 할인금액");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_color("black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","246","284","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","246","344","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_discount_yn");
            obj.set_codecolumn("DISCOUNT_YN");
            obj.set_datacolumn("DISCOUNT_YN");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo02","246","101","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cate");
            obj.set_codecolumn("CATE_CODE");
            obj.set_datacolumn("CATE_CODE");
            obj.set_text("Combo02");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo03","246","162","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cate");
            obj.set_codecolumn("SUB_CATE_CODE");
            obj.set_datacolumn("CATE_NAME");
            obj.set_text("Combo03");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","246","223","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","246","407","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_product","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit03","value","ds_product","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Combo02","value","ds_product","CATE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Combo03","value","ds_cate","CATE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Edit01","value","ds_product","DISCOUNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Combo00","value","ds_product","DISCOUNT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductPop.xfdl", function() {

        this.Form_ProductPop_onload = function(obj,e)
        {
        	//this.Div00.form.Combo03.set_readonly(true);

        	var cate = this.parent.cate;

        	this.ds_cate.copyData(cate);
        	this.ds_cate.deleteRow(0);
        };


        this.Div00_Button00_onclick = function(obj,e)
        {
        	var strSvcID = "saveProduct";		//트랜잭션 아이디
        	var strURL = "svc::saveProduct.do";	//url controller에서 받을 주소
        	var strInDatasets = "ds_product=ds_product"; //내가 던질 데이터셋
        	var strOutDatasets = "ds_product=ds_product"; //내가 받을 데이터셋
        	var strArg = "";					//매개변수로 뭐가 들어가는지
        	var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        	var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        	this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductPop_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Combo02.addEventHandler("onitemchanged",this.Div00_Combo02_onitemchanged,this);
        };
        this.loadIncludeScript("Form_ProductPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
