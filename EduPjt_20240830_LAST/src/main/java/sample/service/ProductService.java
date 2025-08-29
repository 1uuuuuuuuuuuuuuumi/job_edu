package sample.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface ProductService {
	List<HashMap<String, Object>> categoryList();

	List<HashMap<String, Object>> productList(String cateCode);

	HashMap<String, Object> getProduct(Map<String, Object> param);

	int saveProduct(Map<String, Object> param);
	
	
}
