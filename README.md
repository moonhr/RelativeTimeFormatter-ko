# RelativeTimeFormatter-ko

**RelativeTimeFormatterKo**는 한국어로 상대적인 시간을 간단하게 포맷팅할 수 있는 경량 라이브러리입니다.  
예: `방금 전`, `5분 전`, `2시간 전`, `3일 전` 등

---

## 📦 설치

```bash
npm install relative-time-formatter-ko
```

🚀 사용 방법

```javascript
// 라이브러리 가져오기
const { RelativeTimeFormatterKo } = require('relative-time-formatter-ko');

// 포매터 인스턴스 생성
const formatter = new RelativeTimeFormatterKo();

// 상대시간 포맷팅
console.log(formatter.format(new Date(Date.now() - 1000))); // "방금 전"
console.log(formatter.format(new Date(Date.now() - 60000))); // "1분 전"
console.log(formatter.format(new Date(Date.now() - 3600000))); // "1시간 전"
console.log(formatter.format(new Date(Date.now() - 86400000))); // "1일 전"
```

📌 특징
• 간단한 클래스 기반 설계
• 한국어로 상대 시간을 포맷팅
• 타임스탬프, Date 객체, ISO 문자열 모두 지원
• 추가적인 의존성 없음 (Zero Dependencies)

🌟 설치 요건
• Node.js 12 이상
