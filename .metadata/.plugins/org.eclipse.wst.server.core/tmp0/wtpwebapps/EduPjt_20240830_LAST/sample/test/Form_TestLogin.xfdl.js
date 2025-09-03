(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_TestLogin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("static_login","223","250","142","53",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","200","327","189","87",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("패스워드");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_login","405","247","375","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_password","410","336","373","54",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("button_login","370","495","146","68",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            this.addChild(obj.name, obj);

            obj = new Button("button_join","577","493","143","72",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원가입");
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
        this.loadIncludeScript("Form_TestLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
