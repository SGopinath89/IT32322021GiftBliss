package vau.fas.dps.it.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vau.fas.dps.it.model.AuthenticationToken;
import vau.fas.dps.it.model.User;
import vau.fas.dps.it.Repo.TokanRepository;

@Service
public class AuthenticationService {

	@Autowired
	TokanRepository tokenRepository;
		
	public void saveConfirmationToken(AuthenticationToken authenticationToken) {
		tokenRepository.save(authenticationToken);
	}

	public AuthenticationToken getToken(User user) {
		return tokenRepository.findByUser(user);
	}

}
