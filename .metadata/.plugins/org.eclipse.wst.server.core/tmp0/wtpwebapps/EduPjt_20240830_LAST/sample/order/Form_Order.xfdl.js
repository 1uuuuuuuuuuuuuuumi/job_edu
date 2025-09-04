(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Order");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SHIP_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REFUND_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REFUND_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orderStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STATUS_CODE\">Y</Col><Col id=\"ORDER_STATUS\">Y</Col></Row><Row><Col id=\"STATUS_CODE\">N</Col><Col id=\"ORDER_STATUS\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","20",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #CDCDCD");
            obj.set_background("#F6F6F6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","91","19","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","389","18","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","704","18","200","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","7","37","107","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("•회원ID");
            obj.set_font("bold 13pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","310","38","107","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("•상품명");
            obj.set_font("bold 13pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","616","37","107","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("•주문상태");
            obj.set_font("bold 13pt \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","1014","40","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1102","40","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","1190","40","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_borderRadius("5px");
            obj.set_font("bold 13pt \"굴림\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","180",null,null,"10","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_search");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"126\"/><Column size=\"234\"/><Column size=\"129\"/><Column size=\"111\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"등급\"/><Cell col=\"6\" text=\"포인트\"/><Cell col=\"7\" text=\"휴면유무\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:NAME\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BIRTH_DAY\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ADDRESS\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:LEVEL\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:POINT\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:IS_USE\" edittype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","142","95","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주문목록");
            obj.set_textAlign("center");
            obj.set_font("bold 15pt \"돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_total","125","143","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj = new BindItem("item0","Grid00","binddataset","ds_users","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit00","value","ds_search","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit01","value","ds_search","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Combo00","value","ds_search","ORDER_STATUS");
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
        this.loadIncludeScript("Form_Order.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
