# 1. 운영체제 및 프로그램 설치
FROM node:18

# 2. git 클론해서 소스코드 가짜컴퓨터 안에서 다운로드 받기
# RUN mkdir myfolder
# COPY . /myfolder/
# RUN cd ./myfolder/   =>   WORKDIR로 대신하기
COPY . /myfolder/
WORKDIR /myfolder/

# 3. 최종 실행하기
RUN yarn install
RUN yarn build
CMD yarn start