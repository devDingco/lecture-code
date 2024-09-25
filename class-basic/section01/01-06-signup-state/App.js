const App = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    // const [emailError, setEmailError] = React.useState("아직은 에러 없음")
    const [emailError, setEmailError] = React.useState("")

    // 이벤트핸들러 함수 => handleChangeEmail 형태로 만드는 회사도 많음
    const onChangeEmail = (event) => {
        console.log(event.target) // 작동된 태그
        console.log(event.target.value) // 작동된 태그에 입력된 값
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickSignup = (event) => {
        console.log(email) // 진짜 포장이 잘 됐는지 확인해보기
        console.log(password) // 진짜 포장이 잘 됐는지 확인해보기

        if(email.includes("@") === false){
            // alert("이메일이 올바르지 않습니다!! @가 없음!!")
            // document.getElementById("이메일에러표시하는곳").innerText = "이메일이 올바르지 않습니다!! @가 없음!!"

            // state로 에러 보여주기
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
        } else {
            alert("회원가입을 축하합니다!!!")
        }
    }

    return (
        <div className="철수의App">
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            {/* <div id="이메일에러표시하는곳"></div> */}
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}