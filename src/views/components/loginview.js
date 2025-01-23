export const Login = () => {
  return `<div class="login-container" id="login-container">
          <div class="login-left">
              <div class="login-logo">
                  <div class="login-logo-icon">
                      <img class="login-logo-icon-image" src="assets/icons/logo-icon/output-onlinepngtools1.svg" alt="logo">
                  </div>
                  <span class="login-logo-text">Quản lý chấm công</span>
              </div>
          </div>
          <div class="login-right">
              <div class="login-form" id="login-form">
              <div class="login-form__header">
                  <h2>Login Form</h2>
                  <p class="login-form__header-text">Login with your details</p>
              </div>
                  <form class="login-form__body" action="">
                  <div class="login-form__body__user">    
                      <input id="login-username" class="login-form__body__user-input login-form__body____user-text" type="text" placeholder="User name or Email" autocomplete="username" required>
                      <input id="login-password" class= "login-form__body__user-input login-form__body____user-password" type="password" placeholder="Password" autocomplete="current-password" required>
                      <img class="login-form__body-icon" src="assets/icons/logo-icon/Hide.svg" alt="Hide">
                  </div>
                      <div class="login-options">
                          <label class="login-options-remember">
                              <input class="login-remember-input" type="checkbox"> Remember me
                          </label>
                          <a href="#" class="login-forgot-password">Forgot Password</a>
                      </div>
                      <button id="login-button" class="login-button" type="submit">Login</button>
                      <p class="login-form__body-text">Don't have an account?
                          <a id="login-signup" class="login-signup"> Signup</a>
                      </p>
                  </form>
              </div>
               <div class=" login-form login-form-register" id="login-form-register">
              <div class="login-form__header">
                  <h2>Register Form</h2>
                  <p class="login-form__header-text">Register personal information</p>
              </div>
                  <form class="login-form__body register-form__body" action="#" method="POST">
                 <div class = "register-form__body__user">
                      <input class="register-form__body__user-input-header" type="text" placeholder="User name" required>
                      <input class="register-form__body__user-input-header " type="text" placeholder="User name" required>
                 </div>
                      <input class="register-form__body__user-input register-form__body____user-text" type="text" placeholder="User name" required>
                      <input class="register-form__body__user-input register-form__body____user-text" type="text" placeholder="User name" required>
                      <input class="register-form__body__user-input register-form__body____user-text" type="text" placeholder="User name" required>
                      <button class="register-button" type="submit">Register</button>
                      <div class="register-line">
                          <div class="line"></div>
                              <div class="text">or</div>
                          <div class="line"></div>
                      </div>
                      <div class="register-continue">
                          <button class="register-button-continue" type="submit">
                              <img class="register-button-continue-icon" src="assets/icons/fb-ic.svg">
                              <p class="register-button-continue-text">Continue with facebook </p>
                          </button>
                          <button class="register-button-continue" type="submit">
                              <img class="register-button-continue-icon" src="assets/icons/google-ic.svg">
                              <p class="register-button-continue-text">Continue with google </p></button>
                      </div>
                  </form> 
              </div>
              <div class="red-logo">
                  <div class="circle">
                  </div>
              </div>
          </div>
      </div>`;
};
