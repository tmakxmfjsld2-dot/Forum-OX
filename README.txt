2026 Semiconductor Forum O/X v4 STABLE TEST

핵심 변경
1. 모바일에서 O/X 선택 성공 즉시 투표 버튼 화면이 실시간 결과 화면으로 전환됩니다.
2. 결과 화면은 Firebase votes를 실시간 구독해 다른 참여자의 표도 즉시 반영합니다.
3. LED도 문항 변경 시 이전 Firebase listener를 해제하고 현재 문항만 구독합니다.
4. 관리자 문항은 '저장'과 '적용'을 분리했습니다.
   - 새 문항 저장
   - 목록에서 문항 선택
   - 이 문항 적용
   - START
5. 문항 최대 5개.
6. Firebase serverTimeOffset을 사용해 참가자/관리자/LED 타이머 기준을 맞췄습니다.
7. 시간이 끝나면 관리자 화면이 status를 closed로 정리합니다.
8. firebase-rules-v4.json을 Firebase Realtime Database Rules에 적용해야 합니다.

테스트 순서
A. Rules v4 Publish
B. GitHub 파일 교체
C. 관리자 로그인
D. 새 문항 저장 → 목록 표시 확인
E. 문항 선택 → '이 문항 적용'
F. 참가자/LED에서 동일 문항 확인
G. START
H. 모바일 O/X 선택 → 즉시 실시간 결과 화면 확인
I. 다른 브라우저/기기 투표 → 모바일/LED/관리자 숫자가 동시에 변하는지 확인
