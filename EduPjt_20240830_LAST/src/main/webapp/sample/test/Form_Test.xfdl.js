(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Test");
            this.set_titletext("New Form");
            this.set_font("bold 18px/normal \"Gulim\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","74","231","1132","369",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1019","128","187","82",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("transaction");
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
        this.registerScript("Form_Test.xfdl", function() {
        // Transaction
        // 데이터 저장소에 저장된 데이터를 가져오거나 갱신하는 메서드로 Dataset에 데이터를 담아 서비스를 호출하고,
        // 완료 시 콜백 함수를 수행한다.

        // Transaction 메서드는 주로 Form 오브젝트의 메서드를 사용한다.
        // 하지만 Appvariables와 연계해 사용해야 할 때에는 Application 오브젝트의 메서드를 사용한다.
        // -----------------------------------------------------------------------------------------------
        // 1. 트랜잭션 메서드 구현하기
        // 1-1) 화면 데이터 값을 확인하기 위한 Grid, Dataset 컴포넌트를 배치하고 바인딩한다.
        // 1-2) 버튼을 추가하여 onclick 이벤트에 Transaction 메서드가 작성된 함수를 호출한다.
        this.Button00_onclick = function(obj,e)
        {
        	this.callMethod();
        };

        // 1-3) Transaction 메서드와 실행 후 결과 값을 받는 callback 함수를 작성한다.
        this.callMethod = function(){
        	var sld = "baseld";
        	var sUrl = "http://localhost:8080/base.jsp";
        	var slnDs = "inDataset=Dataset00";
        	var sOutDs = "Dataset00=outDataset";
        	var sArg = "";
        	var sfunc = "fn_callback";

        	this.transaction(sld, sUrl, slnDs, sOutDs, sArg, sfunc);
        }

        this.fn_callback = function(sld, nErrorCode, sErrorMSG){
        	if(nErrorCode == 0){
        		//완료 확인
        		trace(sld);
        	}
        }

        // 2. 서비스 페이지 작성하기 (서버)
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
