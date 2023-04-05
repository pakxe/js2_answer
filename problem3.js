<!--3번 문제. -->

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>로그인 구현하기</title>
    <script>
      const failMessage = '취소되었습니다.';
      const welcomeMessage = '환영합니다!';
      const invalidMessage = '인증에 실패하였습니다.';
      const invalidUserMessage = '인증되지 않은 사용자입니다.';

      const getNameMessage = '사용자 이름을 입력해주세요.';
      const getPasswordMessage = '비밀번호:';
       
      const validName = 'LikeLion';
      const valudPassword = 'KingJs';

      let userName = prompt(getNameMessage, '');

      if (userName === validName) {
        let pass = prompt(getPasswordMessage, '');

        if (pass === valudPassword) alert(welcomeMessage);
        else if (pass === null || pass === '') alert(failMessage);
        else alert(invalidMessage);
      } 
      else if (userName === '' || userName === null) alert(failMessage);
      else alert(invalidUserMessage);
    </script>
  </head>
  <body></body>
</html>
