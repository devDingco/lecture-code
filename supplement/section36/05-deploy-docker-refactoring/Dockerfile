# 1. 운영체제 및 프로그램 설치
FROM node:18

# 2. 패키지 변경되지 않으면, 캐시 유지하기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 3. 여기는 항상 최신화하기
COPY . /myfolder/
RUN yarn build
CMD yarn start