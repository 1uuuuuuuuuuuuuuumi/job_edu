(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductStatistics");
            this.set_titletext("New Form");
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

            obj = new Button("Button00_00_00_00","1102","38","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1190","38","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","180",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_search");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"126\"/><Column size=\"234\"/><Column size=\"129\"/><Column size=\"111\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"등급\"/><Cell col=\"6\" text=\"포인트\"/><Cell col=\"7\" text=\"휴면유무\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BIRTH_DAY\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ADDRESS\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:LEVEL\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:POINT\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:IS_USE\" edittype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","140","150","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상품별통계");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_total","136","142","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("| ");
            obj.set_font("bold 15pt \"돋움\"");
            obj.set_color("#7ec0e3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Grid00","binddataset","ds_users","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00_00_00_00.addEventHandler("onclick",this.Div00_Button00_00_00_00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_00_01_onclick,this);
            this.st_total.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Form_ProductStatistics.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
