import fetchApi from '../utils/fetch';

const useLogin = (id, pw) => {

  const login = async () => {
    console.log(id, pw);
    /*
    const res = await fetchApi.post('/api/v1/login', { id, pw });
    if (res.status === 200) {
      // 로그인 성공 시
      // 로그인 성공 메시지
      // 사용자 정보 상태에 저장
      // 메인 페이지로 redirect
      const data = await res.json();
      console.log('로그인 성공');
    }
    */
  }

  return () => {
    login();
  };
};

export default useLogin;