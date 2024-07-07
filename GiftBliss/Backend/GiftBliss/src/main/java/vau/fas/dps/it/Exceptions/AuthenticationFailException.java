package vau.fas.dps.it.Exceptions;

public class AuthenticationFailException extends IllegalArgumentException{
	public AuthenticationFailException(String msg) {
		super(msg);
	}
}
