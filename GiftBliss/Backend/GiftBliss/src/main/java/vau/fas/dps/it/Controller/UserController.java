package vau.fas.dps.it.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vau.fas.dps.it.Services.UserService;
import vau.fas.dps.it.dto.ResponseDto;
import vau.fas.dps.it.dto.user.SignInDto;
import vau.fas.dps.it.dto.user.SigninResponseDto;
import vau.fas.dps.it.dto.user.SignupDto;

@RequestMapping("user")
@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	
	//signup
	@PostMapping("/signup")
	public ResponseDto signup(@RequestBody SignupDto signupDto) {
		return userService.signUp(signupDto);
	}
	
	//signin
	@PostMapping("signin")
	public SigninResponseDto signIn(@RequestBody SignInDto signInDto){
		return userService.signIn(signInDto);
	}
}
