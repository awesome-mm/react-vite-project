export const USER_HEADER_ROUTES = [
  {
    title: "사업소개",
    href: "/about/u300",
    children: [],
  },
  {
    title: "경진대회",
    href: "/contest/",
    children: [
      {
        title: "공고",
        href: "/contest/announcements",
      },
      {
        title: "신청",
        href: "/contest/apply",
      },
      {
        title: "일정",
        href: "/contest/schedule",
      },
    ],
  },
  {
    title: "창업지원",
    href: "/support/",
    children: [
      {
        title: "온라인 전시관",
        href: "/support/exhibition",
      },
      {
        title: "프로그램(밋업, IR, 후속 등)",
        href: "/support/programs",
      },
      {
        title: "콘텐츠(백서, 연구자료 등)",
        href: "/support/resources",
      },
    ],
  },
  {
    title: "툴킷",
    href: "/prod/",
    children: [
      {
        title: "BMC",
        href: "/board/bmc",
      },
      {
        title: "사업계획서 작성",
        href: "/board/business-plan",
      },
      {
        title: "로컬실록지리지",
        href: "/board/localheroes",
      },
    ],
  },
  {
    title: "공지사항",
    href: "/board/notice",
    children: [
      {
        title: "공지사항",
        href: "/board/notice",
      },
      {
        title: "FAQ",
        href: "/board/faq",
      },
    ],
  },
];
