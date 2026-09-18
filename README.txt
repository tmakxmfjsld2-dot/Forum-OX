2026 Semiconductor Forum O/X Live Poll - v1

[파일]
index.html   참가자 화면
admin.html   관리자 화면
display.html LED 화면
app.js       Firebase 연결
style.css    디자인

[GitHub]
ZIP을 풀고 5개 파일을 GitHub 저장소 루트에 업로드하세요.
README.txt도 함께 올려도 됩니다.

[테스트 순서]
1. GitHub Pages 배포
2. /admin.html 접속 → Firebase 관리자 이메일/비밀번호 로그인
3. 문항 추가
4. 30초 + 실시간 공개 → START
5. 다른 휴대폰에서 기본 URL(index.html) 접속 → O/X 선택
6. /display.html에서 숫자/그래프 변화 확인

[주의]
관리자 비밀번호는 파일에 들어 있지 않습니다.
한 익명 UID는 한 문항에 한 번만 투표하도록 설계했습니다.
이 파일은 1차 기능 테스트용이며, 행사 전 다중기기 테스트와 UI 최종 보완을 진행해야 합니다.

[v2]
- Firebase 저장 성공 후에만 문항 입력창을 비웁니다.
- 저장 실패 시 입력 내용을 그대로 유지하고 오류 메시지를 표시합니다.
- 등록 문항 개수를 표시합니다.
- 등록 문항을 클릭하면 수정 입력창에 내용을 불러옵니다.

[v3 핵심 수정]
- 관리자 인증 완료 후 Firebase 문항/event 리스너를 시작하도록 수정했습니다.
- 문항 추가 버튼 자체가 '저장' 역할을 합니다.
- Firebase 저장 성공 후에만 입력창을 비웁니다.
- 저장 실패 시 입력 내용과 실제 오류를 화면에 유지합니다.
- 문항은 최대 5개까지만 추가할 수 있습니다.
- 등록 문항 표시를 '현재 개수 / 5'로 변경했습니다.
- firebase-rules-v3.json을 함께 포함했습니다. Firebase Realtime Database Rules에도 동일 규칙 적용을 권장합니다.
