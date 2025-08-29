package sample.web;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.ProductService;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@RequestMapping("/categoryList.do")
	public NexacroResult categoryList() {
		
		NexacroResult result = new NexacroResult();
		
		List<HashMap<String, Object>> resultData = productService.categoryList();
		
		if(resultData != null) {
			result.addDataSet("ds_category", resultData);
		}
		
		return result;
	}
	
	@RequestMapping("/productList.do")
	public NexacroResult productList(@RequestParam(name="CATE_CODE", required=false) String cateCode) {
		
		NexacroResult result = new NexacroResult();
		
		List<HashMap<String, Object>> resultData = productService.productList(cateCode);
		
		if(resultData != null) {
			result.addDataSet("ds_product", resultData);
		}
		
		return result;
	}
	
}
