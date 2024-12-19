export const networks = [
  {
    id: 1,
    question: "다음 중 네트워크 통신망이 아닌 것은?",
    choices: [
      { text: "YLAN", isAnswer: true },
      { text: "SAN", isAnswer: false },
      { text: "WLAN", isAnswer: false },
      { text: "MAN", isAnswer: false },
    ],
  },
  {
    id: 2,
    question: "HTTP는 무엇에 대한 약자인가?",
    choices: [
      { text: "Hypertext Transfer Protocol", isAnswer: true },
      { text: "Hypertext Transmission Protocol", isAnswer: false },
      { text: "Hypertext Traversal Protocol", isAnswer: false },
      { text: "Hypertext Transport Protocol", isAnswer: false },
    ],
  },
  {
    id: 3,
    question: "HTTP 프로토콜의 특징이 아닌 것은?",
    choices: [
      { text: "클라이언트 식별자, MIME 타입 등의 정보를 메세지 본문에 넣어 전달한다.", isAnswer: true },
      { text: "상태를 유지하지 않는다.", isAnswer: false },
      { text: "클라이언트ㅡ서버 간에 요청과 응답 형태로 통신이 이루어진다.", isAnswer: false },
      { text: "POST, PUT 등의 메서드로 서버의 데이터를 변경할 수 있다.", isAnswer: false },
    ],
  },
  {
    id: 4,
    question: "다음 중 멱등성을 가지지 않는 HTTP 메서드는?",
    choices: [
      { text: "POST", isAnswer: true },
      { text: "PUT", isAnswer: false },
      { text: "HEAD", isAnswer: false },
      { text: "DELETE", isAnswer: false },
    ],
  },
  {
    id: 5,
    question:
      "클라이언트가 이전 요청에 대한 서버 응답을 기다리지 않고 한꺼번에 요청을 보내는 것을 ______(이)라고 한다.",
    choices: [
      { text: "파이프라이닝", isAnswer: true },
      { text: "듀플렉스", isAnswer: false },
      { text: "QUIC 프로토콜", isAnswer: false },
      { text: "지속 연결", isAnswer: false },
    ],
  },
  {
    id: 6,
    question: "",
    choices: [
      { text: "", isAnswer: true },
      { text: "", isAnswer: false },
      { text: "", isAnswer: false },
      { text: "", isAnswer: false },
    ],
  },
];
