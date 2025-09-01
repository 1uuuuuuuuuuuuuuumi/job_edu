package sample.mapper;

import java.util.HashMap;
import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("DeptMapper")
public interface DeptMapper {
	List<HashMap<String, Object>> getDept();

	List<HashMap<String, Object>> getSubDept();

	List<HashMap<String, Object>> getUsers();
}
