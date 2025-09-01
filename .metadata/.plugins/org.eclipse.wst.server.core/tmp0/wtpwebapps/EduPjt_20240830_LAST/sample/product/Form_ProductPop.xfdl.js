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

            
            // UI Components Initialize
            obj = new Div("Div00","348","30","585","660",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","78","72","150","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","118","155","150","60",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Static("Static03","136","313","150","76",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설명");
            obj.set_font("bold 20px 맑은 고딕");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","195","78","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","195","160","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","195","242","317","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","195","324","317","186",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","105","564","125","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","342","564","125","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_font("bold 17px 맑은 고딕");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductPop.xfdl", function() {

        this.Form_ProductPop_onload = function(obj,e)
        {
        		var strSvcID = "selectUser";		//트랜잭션 아이디
        		var strURL = "svc::selectUser.do";	//url controller에서 받을 주소
        		var strInDatasets = "ds_user=ds_user"; //내가 던질 데이터셋
        		var strOutDatasets = "ds_login=ds_login"; //내가 받을 데이터셋
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
            this.Div00.form.Edit00.addEventHandler("onchanged",this.Div00_Edit00_onchanged,this);
        };
        this.loadIncludeScript("Form_ProductPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
