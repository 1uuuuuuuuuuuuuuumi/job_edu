(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductCode");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10","20",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #CDCDCD");
            obj.set_background("#F6F6F6");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","117","16","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","33","39","95","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("•대분류");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1102","36","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_font("bold 14pt \"굴림\"");
            obj.set_borderRadius("5px");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1190","36","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_borderRadius("5px");
            obj.set_background("white");
            obj.set_font("bold 14pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","180","335",null,null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","144","95","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("대분류");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","125","144","171","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ㅇㅇㅇㅇ");
            obj.set_font("bold 15pt \"돋움\"");
            obj.set_color("#7ec0e3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","388","180",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","1170","123","45","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("+");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_font("bold 20pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1225","123","45","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("-");
            obj.set_font("bold 20pt \"돋움\"");
            obj.set_textAlign("center");
            obj.set_background("white");
            obj.set_border("1px solid black");
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
        this.loadIncludeScript("Form_ProductCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
