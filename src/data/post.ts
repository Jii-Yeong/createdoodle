import { PostList } from "src/models/post";

export const postList: PostList[] = [
  {
    title: '자주쓰는 vue3 <script setup> 기본 문법 정리',
    description: 'vue3 <script setup>에서 자주 사용하는 기본 문법을 정리합니다.',
    thumbnail: '3',
    route: 3,
  },
  {
    title: 'vercel + nuxt3 전역 환경변수 설정하기',
    description: 'vercel과 nuxt3에서 전역 환경변수를 설정합니다.',
    thumbnail: '2',
    route: 2,
  },
  {
    title: 'Nuxt3에서 마크다운 파일을 읽어 페이지에 띄우기',
    description: 'fs 모듈을 이용하여 Nuxt3 페이지에 마크다운을 나타냅니다.',
    thumbnail: '1',
    route: 1,
  },
]