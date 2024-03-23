### Customize configuration# DevFlix 개발 포트폴리오

##프로젝트 이름 : DevFlix

![DevFlix Logo](http://devflix.store/img/logo.ad0f82fe.png)

DevFlix는 포트폴리오 힌눈에 정리한 사이트로 컨셉은 넷플릭스 스타일의 웹 사이트입니다. 이 사이트는 방문자에게 개발자의 프로젝트, 기술, 경력 등을 매력적이고 인터랙티브한 방식으로 제공합니다.

## 프로젝트 설명

DevFlix는 다음과 같은 목적을 가지고 있습니다:

- **프로젝트 소개**: 다양한 개발 프로젝트를 시각적으로 보여주어 사용자의 관심을 끕니다.
- **기술 스택 시각화**: 개발자의 기술 스택을 차트 및 기타 시각적 요소를 통해 직관적으로 표시합니다.
- **경력 및 교육 이력**: 탭 형태의 인터페이스를 통해 개발자의 경력과 교육 이력을 쉽게 탐색할 수 있게 합니다.

## 사이트 구조

웹사이트는 다음과 같은 주요 섹션으로 구성됩니다:

1. **홈 (`MainPage.vue`)**: 로고, 메뉴, 포트폴리오 링크 등 주요 정보를 제공합니다. 또한 개발자의 포트폴리오를 보여주는 슬라이드 쇼가 포함되어 있습니다.
2. **포트폴리오 (`PortfolioPage.vue`)**: 다양한 프로젝트들을 보여주는 섹션이 포함되어 있습니다. 각 프로젝트에 대한 설명, 사용된 기술, 이미지 등이 슬라이드 형태로 표시됩니다.
3. **경력 (`careerPage.vue`)**: 개발자의 경력을 탭 형태로 나누어 보여줍니다. 경력과 교육과정이 각각 탭으로 구분되어 있으며, 관련 정보를 제공합니다.
4. **기술 스킬 (`skill.vue`)**: 개발자의 기술 숙련도를 시각적으로 보여주는 차트가 포함되어 있습니다. 각 기술에 대한 숙련도가 백분율로 표시되며, 숙련도에 따른 설명이 제공됩니다.
5. **소개 (`About.vue`)**: 개발자의 소개, 연락처 정보, 주소, 소셜 미디어 링크 등을 포함하고 있습니다. 또한, 개발자의 개인적인 세부 정보와 포트포리오에 대한 설명이 포함되어 있습니다.
6. **헤더 (`HeaderComponent.vue`)**: 사이트의 네비게이션을 제공하는 헤더가 포함되어 있습니다.
7. **푸터 (`FooterComponent.vue`)**: 추가 정보를 제공하는 푸터가 포함되어 있습니다.
8. **라우팅 (`router/index.js`)**: Vue Router를 사용하여 SPA(Single Page Application) 내에서의 라우팅을 관리합니다.
9. **메인 설정 파일 (`main.js`)**: Vue 인스턴스를 생성하고, 필요한 라이브러리들을 설정합니다.

## 기술 스택

이 포트폴리오 사이트는 다음과 같은 기술로 구축되었습니다:

- **Frontend**: Vue.js, Swiper, GSAP, ApexCharts
- **Styling**: CSS, SCSS
- **Icons**: FontAwesome
- **Animation**: GSAP, AOS
- **State Management**: Vue Router
- **Package Management**: npm

## 설치 및 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run serve

# 프로덕션 빌드
npm run build

# 코드 Linting
npm run lint
```

## 사이트 링크

[DevFlix](http://devflix.store/)
