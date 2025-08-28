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

            
            // UI Components Initialize
            obj = new Div("Div00","45","130","1190","71",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#74BF04");
            obj.set_text("");
            obj.set_border("2px solid #0A4DA6");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","20","142","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("상품이름");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","45","229","1190","431",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","47","50","265","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("★ 상품 게시판 ★");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_ProductList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
