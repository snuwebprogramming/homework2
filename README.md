# homework2


## 채팅 클라이언트 구현

주어진 채팅 서버( https://snu-web-random-chat.herokuapp.com/ )를 이용하여, 채팅 클라이언트를 구현한다.
서버 endpoint는 다음과 같다.

:POST /login { name }

-> { key, name, createdAt }

:GET /chats { createdAtFrom, createdAtTo, order }

-> [
  { user, message, createdAt, },
  { user, message, createdAt, },
  { user, message, createdAt, },
  ...
]

maximum 100 messages are loaded. You must use createdFrom, createdTo, order=(asc,desc) to load more messages.

for example, 
```
{"_id":"5ddfae935f3e3500043a8da8","message":"","createdAt":1574940307945,"userName":"hihihihiihi"}
```
when last message is like that, you can load more messages by sending

https://snu-web-random-chat.herokuapp.com/chats?createdAtFrom=1574940307945


:POST /chats  (auth_required)

-> { meesage, created }


* auth_required 의 경우, /login 시 얻은 key를 http request header에 첨부하면 된다. 
```
Authorization: Key sdfsdlfkje23rdsfsi9fergi
```

## 스펙

### 라이브러리
- react 사용
- react functional component 사용
- fetch 사용
- dayjs 사용해도되나, 사용하지 않아도 무방.
- ui framework 1개 이상 사용.(material design, bootstrap...)
~~- eslint 사용. airbnb | google (npx eslint --init) # 되도록 하는 걸 추천드리지만 늦게 추가된 부분이라 점수에는 반영하지 않겠습니다.

### 기능
- 가벼운 카카오 오픈채팅방이라고 보면 됨
- 로그인 안 한 상태에서 페이지 접근 시 채팅 데이터를 보여줌(오름차순). 채팅은 불가능.
- 로그인 버튼을 누르면, name을 입력할 수 있고 입력하면. 로그인 완료.
- 로그인 완료 시 채팅 입력 가능.
- 3초에 한 번씩 서버 채팅 목록을 가져와, 새로운것이 있으면 업데이트 해줌.
- 메시지 입력 완료 시, 서버에서 바로 채팅 목록 가져와서 refresh.
- 로그인 이력이 있을 시, 자동으로 로그인 시도.

### 추가스펙
- 로그아웃 기능
- 최초 접근 시 채팅이 100개 이상 쌓였을 경우, 위로 스크롤 할 시에 대화 추가 로드.
- 오프라인 모드에서 적절한 에러 핸들링


### 일정
- 12월 8일 23:59:59 까지 etl을 통해 제출
- 1일 늦을시 마다 10%씩 감점.

