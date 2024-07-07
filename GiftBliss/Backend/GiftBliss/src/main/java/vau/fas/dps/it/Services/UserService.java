package vau.fas.dps.it.Services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import vau.fas.dps.it.Exceptions.AuthenticationFailException;
import vau.fas.dps.it.Exceptions.CustomException;
import vau.fas.dps.it.model.AuthenticationToken;
import vau.fas.dps.it.model.User;
import vau.fas.dps.it.Repo.UserRepository;
import vau.fas.dps.it.dto.ResponseDto;
import vau.fas.dps.it.dto.user.SignInDto;
import vau.fas.dps.it.dto.user.SigninResponseDto;
import vau.fas.dps.it.dto.user.SignupDto;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AuthenticationService authenticationService;
	
	@Transactional
	public ResponseDto signUp(SignupDto signupDto) {
		//check if user is already present
		if(Objects.nonNull(userRepository.findByEmail(signupDto.getEmail()))) {
			//we have an user
			throw new CustomException("user already present");
		}
		
		//hash the password
		String encryptedpassword= signupDto.getPassword();
		try {
			encryptedpassword=hashPassword(signupDto.getPassword());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		
		User user=new User(signupDto.getFullname(),
				signupDto.getEmail(), encryptedpassword);
		userRepository.save(user);
		
		//create the token
		final AuthenticationToken authenticationToken = new AuthenticationToken(user);
		authenticationService.saveConfirmationToken(authenticationToken);
		
		ResponseDto responseDto = new ResponseDto("success","user created successfully");
		return responseDto;
	}

	 private String hashPassword(String password) throws NoSuchAlgorithmException {
	        MessageDigest md = MessageDigest.getInstance("MD5");
	        md.update(password.getBytes());
	        byte[] digest = md.digest();
	        return bytesToHex(digest); // Using the custom method instead of DatatypeConverter
	    }

	    private String bytesToHex(byte[] bytes) {
	        StringBuilder sb = new StringBuilder();
	        for (byte b : bytes) {
	            sb.append(String.format("%02x", b));
	        }
	        return sb.toString().toUpperCase();
	    }

		public SigninResponseDto signIn(SignInDto signInDto) {
			//find user by email
			User user=userRepository.findByEmail(signInDto.getEmail());
			if(Objects.isNull(user)) {
				throw new AuthenticationFailException("user is not valid");
			}
				
			//hash the password
			try {
				if(!user.getPassword().equals(hashPassword(signInDto.getPassword()))){
					throw new AuthenticationFailException("wrong password");
				}				
			}catch(NoSuchAlgorithmException e) {
				e.printStackTrace();
			}
			
			//compare the password in DB
			
			//if password match
			AuthenticationToken token=authenticationService.getToken(user);
			
			//retrieve the token
			if(Objects.isNull(token)) {
				throw new CustomException("token is not present");
			}
			return new SigninResponseDto("success",token.getToken());
		}
}
