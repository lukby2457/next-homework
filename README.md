# 프로젝트 이름

- LoL_Information

## 배포 주소
<>

## 개발 기간 ⏲️

- 2024.09.27(금) ~ 2024.10.7(월)

## 주요 기능 💜

- Riot API를 활용
  - 전체 챔피언 목록 페이지
  - 챔피언 정보를 제공하는 상세 페이지
  - 인게임 아이템 정보를 제공하는 아이템 페이지
  - 이번주 챔피언 로테이션 정보를 제공하는 로테이션 페이지

## 프로젝트 구조

```
next-homework/
│
├── src/
|   ├── app/
│   │   ├── api/
|   |   |   └── rotation/
|   |   |       └── route.ts
│   │   ├── champions/
|   |   |   ├── [id]
|   |   |   |   └── page.tsx
|   |   |   └── page.tsx
│   │   ├── items/
|   |   |   └── page.tsx
│   │   ├── rotation/
|   |   |   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
|   |
│   ├── components/
│   │   ├── detail/
|   |   |   ├── DetailBarGraph.tsx
|   |   |   ├── DetailSpellContainer.tsx
|   |   |   └── DetailText.tsx
│   │   ├── header/
|   |   |   └── Navigation.tsx
│   │   ├── item/
|   |   |   └── ItemCard.tsx
│   │   ├── main/
|   |   |   └── MainNavigation.tsx
│   │   └── ChampionCard.tsx
│   │
│   ├── public/
│   │   ├── images/
│   │   └── static.ts
│   │
│   ├── types/
│   │   ├── Champion.ts
│   │   ├── ChampionRotation.ts
│   │   └── Items.ts
│   │
│   └── utils/
│       ├── riotApi.ts
│       └── serverApi.ts
│
├── next.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 트러블 슈팅
<https://velog.io/@lukby2457/102-%EA%B0%9C%EB%B0%9C-%EC%A0%95%EB%A6%AC>