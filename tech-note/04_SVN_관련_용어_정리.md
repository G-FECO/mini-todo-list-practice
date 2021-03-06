# SVN 관련 용어 정리(10/30)

<br>

> 회사에서 근무하면서 `SVN`, `리비전`, `trunk` 라는 용어가 자주 등장해서 어떤 개념인지 궁금해서 찾아보고 정리한 글이다.

- `SVN`이란 SubVersion의 줄임말로 형상관리/소스 관리 툴이다. 여러 명이서 작업하는 프로젝트의 경우 버전 관리나 각자 만든 소스를 통합해야 하므로 이를 하나의 저장소로 관리하는 소프트웨어이다.
- `리비전(Revision)`은 소스 파일 등을 commit할 때 일정한 규칙에 의해 숫자가 증가하는데 이 때 저장소(repository)에 저장된 각각의 파일 버전을 리비전이라고 한다. SVN의 경우 파일별로 리비전이 매겨지 않고 한번 commit 한 것으로 전체 리비전이 매겨진다. 즉, 이 리비전을 보고 프로젝트의 현재 진행 상황을 파악할 수 있다.
- `trunk`는 본체 부분, 나무줄기라는 사전적인 정의를 가지고 있으며 프로젝트에서 가장 중심이 되는 디렉토리(루트)이다. 모든 프로그램 개발 작업은 `trunk` 디렉토리에서 이루어진다.

<br>

---

:page_facing_up: <b>Reference</b>

- https://na27.tistory.com/211

- https://hellowoori.tistory.com/57
- https://hellowoori.tistory.com/57
