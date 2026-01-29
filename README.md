# Diversition Exam [Product API]

## Api Collection with Bruno

ข้อดี

1. git based collection - สามารถแก้ไข version ได้ด้วย git ปกติ
2. developer friendly - เก็บเป็นไฟล์ .bru ซึ่งแค่เปิดด้วย text editor ก็สามารถแก้ไขได้ง่าย อ่านทำควายเข้าใจได้ง่าย
3. features - ส่วนใหญ่เขียน test script ได้เหมือน postman

ข้อเสีย

1. มีบาง feature ที่ยังสู้ postman ไม่ได้เช่น ai, mock server

คลิกที่นี่เพื่อเปิดด้วย bruno
[<img src="https://fetch.usebruno.com/button.svg" alt="Fetch in Bruno" style="width: 130px; height: 30px;" width="128" height="32">](https://fetch.usebruno.com?url=https%3A%2F%2Fgithub.com%2Fgnomerock%2Fdiversition-api.git "target=_blank rel=noopener noreferrer")

## Getting start

1. install bun
2. run `bun dev` to start server
3. open `http://localhost:3000/swagger` to see api docs

## Data Schema with Prisma

model's schemas are located in `prisma/prisma/models`.

steps to prepare database and implementation

1. change directory to `cd prisma`.
2. run `bun install` to install dependencies.
3. run `cp .env.example .env` and then edit database connection string.
4. run `bun run migrate [message]` to migrate database.
5. run `bun run generate` to generate prisma client.
6. (optional) run `bun run studio` to see database relation visualization.
7. developer can generated client to query the data with type safe!

### next steps

1. I will implement with elysiajs because prisma friendly, typesafe, and self documents.
