(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MainDept");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_nm\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sub_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_sub__cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_sub_nm\" type=\"STRING\" size=\"256\"/><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_users", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_nm\" type=\"STRING\" size=\"256\"/><Column id=\"dept_sub_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_sub_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","125","176","310","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("dept_cd");
            obj.set_datacolumn("dept_nm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1017","178","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_font("11pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","125","225","1027","433",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_users");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/><Column size=\"111\"/><Column size=\"141\"/><Column size=\"164\"/><Column size=\"137\"/><Column size=\"141\"/><Column size=\"137\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"이메일\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"부서코드\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"하위부서코드\"/><Cell col=\"7\" text=\"하위부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:MAIL\"/><Cell col=\"3\" text=\"bind:ADDRESS\"/><Cell col=\"4\" text=\"bind:dept_cd\"/><Cell col=\"5\" text=\"bind:dept_nm\"/><Cell col=\"6\" text=\"bind:dept_sub_cd\"/><Cell col=\"7\" text=\"bind:dept_sub_nm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","129","85","433","66",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ദ്ദി(｡•̀ ᗜ<) 부서");
            obj.set_font("bold 25pt/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1092","178","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_font("11pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_sub_dept","457","176","295","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_sub_dept");
            obj.set_codecolumn("dept_sub__cd");
            obj.set_datacolumn("dept_sub_nm");
            obj.set_borderRadius("5px");
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
        this.registerScript("Form_MainDept.xfdl", function() {

        this.Form_MainDept_onload = function(obj,e)
        {
        	this.fn_getDept();
        };

        this.fn_getDept = function(){
        		var strSvcID = "getDept";		//트랜잭션 아이디
        		var strURL = "svc::getDept.do";	//url controller에서 받을 주소
        		var strInDatasets = ""; //내가 던질 데이터셋
        		var strOutDatasets = "ds_dept=ds_dept ds_sub_dept=ds_sub_dept ds_users=ds_users"; //각각 담은게 각각 들어감
        		var strArg = "";					//매개변수로 뭐가 들어가는지
        		var callBack = "fn_callBack";		//콜백기능으로 뭘할건지(콜백:내가 이 함수를 실행했을때 되돌아와서 실행할 함수)
        		var inAsync = true;					//동기 비동기 설정하는거 (Async:비동기 /sync:비동기)

        		this.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArg,callBack,inAsync); //this.transaction() -> 함수 / 위의내용들을 전부 담기
        }

        this.fn_callBack = function(svcId, errCd, errMsg){
        	switch(svcId) {
        	case "getDept" :
        		if (errCd != -1){
        			//행추가
        			this.ds_dept.insertRow(0);
        			this.ds_sub_dept.insertRow(0);

        			//ds_dept에서 컬럼을 셋팅 (get 2개, set 3개)
        			this.ds_dept.setColumn(0, "dept_cd", "-전체-");
        			this.ds_dept.setColumn(0, "dept_nm", "-전체-");

        			this.ds_sub_dept.setColumn(0, "dept_sub_cd", "-전체-");
        			this.ds_sub_dept.setColumn(0, "dept_sub_nm", "-전체-");

        			//가지고있는 컬럼의 데이터중에서 값이랑 일치하는거 가져오기
        			this.Combo00.set_value("-전체-");
        			this.cb_sub_dept.set_value("-전체-");

        			//콤보 잠그기
        			this.cb_sub_dept.set_readonly(true);
        		}
        		break;
        	default:
        		break;
        	}
        }
        this.Combo00_onitemchanged = function(obj,e)
        {
        	var targetCode = e.postvalue;

        	trace("타겟 : " + targetCode);

        	if(targetCode != "-전체-"){
        		this.ds_sub_dept.filter("dept_cd == '" + targetCode + "'");
        		this.cb_sub_dept.set_readonly(false);

        		this.ds_sub_dept.insertRow(0);
        		this.ds_sub_dept.setColumn(0, "dept_sub_cd", "-전체-");
        		this.ds_sub_dept.setColumn(0, "dept_sub_nm", "-전체-");

        		this.cb_sub_dept.set_index(0);

        	} else {
        		this.ds_sub_dept.filter("");
        		this.cb_sub_dept.set_readonly(true);
        		this.cb_sub_dept.set_value("-전체-");
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	var dept = this.Combo00.value;
        	var sub_dept = this.cb_sub_dept.value;

        	trace(dept);
        	trace(sub_dept);

        	//전체조회
        	if(dept === "-전체-"){
        		this.ds_users.filter(""); //필터된걸 초기화시킴
        	}
        	//대분류만 선택
        	else if (sub_dept === "-전체-"){
        		this.ds_users.filter("dept_cd == '" + dept + "'");
        	}
        	//대+소분류 모두 선택
        	else {
        		this.ds_users.filter("dept_cd == '" + dept + "' && dept_sub_cd == '" + sub_dept + "'" );
        	}
        };

        //초기화
        this.Button01_onclick = function(obj,e)
        {
        	this.Combo00.set_value("-전체-");
        	this.cb_sub_dept.set_value("-전체-");
        	this.cb_sub_dept.set_readonly(true);
        	this.ds_users.filter("");
        };

        this.cb_sub_dept_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MainDept_onload,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.cb_sub_dept.addEventHandler("onitemchanged",this.cb_sub_dept_onitemchanged,this);
        };
        this.loadIncludeScript("Form_MainDept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
