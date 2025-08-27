package sample.service.impl;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sample.mapper.MainMapper;
import sample.service.MainService;
import sample.util.ShaUtil;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainMapper mainMapper;
	
	@Override
	public Map<String, Object> selectUser(Map<String, Object> dsUser){
		
		String inputId = (String) dsUser.get("user_id");
		String inputPw = (String) dsUser.get("user_pw");
		
		Map<String, Object> user = mainMapper.selectUserForLogin(dsUser);
		
		if(user == null) {
			return null;
		}

		
		String dbPw = (String) user.get("PASS");
		String salt = (String) user.get("SALT");
		
		try {
			String encryptedInputPw = ShaUtil.sha256Encode(inputPw, salt);
			
			if(dbPw != null && dbPw.equals(encryptedInputPw)) {
				System.out.println("로그인 성공");
				return user;
			} else {
				System.out.println("로그인 실패");
				return new HashMap<>();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public HashMap<String, Object> idChk(Map<String, Object> param) {
	
		return mainMapper.idChk(param);
	}

	@Override
	public int joinUser(Map<String, Object> param) throws NoSuchAlgorithmException {
		
		String inputPw = (String) param.get("user_pw");
		String salt = ShaUtil.getSalt();
		
		String user_pw = ShaUtil.sha256Encode(inputPw, salt);
		
		param.put("salt", salt);
		param.replace("user_pw", user_pw);
		
		System.out.println("튜닝된 PARAM : " + param);
		
		
		return mainMapper.joinUser(param);
	}
}
