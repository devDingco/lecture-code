// 만약 영어로 만들면? 대문자로 시작해야함 => 소문자로 만들면 진짜HTML input, div 등 겹침
const 영희의인풋 = (훈이의props) => {

    console.log(훈이의props.나는누구게)
    console.log(훈이의props)
    console.log(훈이의props.철수가방)
    console.log(훈이의props.영희가방)

    const 나만의초기메시지 = "비밀번호를 입력하세요"

    // 어차피 바벨이 변수까지 다 합쳐서 진짜HTML로 바꿔줌
    return (
        <input type="text" placeholder={나만의초기메시지} />
    )
}