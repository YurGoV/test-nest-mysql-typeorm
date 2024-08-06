# MySQL - TypeORM practice

This is an application for MySQL training

## create a record:
curl -X POST http://localhost:4123/test -H "Content-Type: application/json" -d '{"record": "record content"}'

## create migration (don`t work with pnpm):
npm run typeorm:create-migration --name=PublicItems

## run migration to create initial record:
pnpm tun typeorm:run-migrations

## revert migration
pnpm tun typeorm:revert-migrations
