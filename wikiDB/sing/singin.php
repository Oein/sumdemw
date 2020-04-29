<!DOCTYPE html5>
<html>
    <head>

    </head>
    <body>
        <script src="https://www.google.com/recaptcha/api.js?render=6LcJwe8UAAAAAJQZZ-k9urTYF6FKQV3jegqH4RCK"></script>

        <form>
          <div>이름 : <input type="text" name="name"></div>
          <div>비밀번호 : <input type="password" name="password"></div>
          <div>제목 : <input type="subject" name="subject"></div>
          <div><input type="submit" value="등록"></div>
          <input type="hidden" id="g-recaptcha" name="g-recaptcha">
        </form>

        <script type="text/javascript">
        grecaptcha.ready(function() {
          grecaptcha.execute('6LcJwe8UAAAAAJQZZ-k9urTYF6FKQV3jegqH4RCK', {action: 'homepage'}).then(function(token) {
            // 토큰을 받아다가 g-recaptcha 에다가 값을 넣어줍니다.
            document.getElementById('g-recaptcha').value = token;
          });
        });
        </script>
    </body>
</html>