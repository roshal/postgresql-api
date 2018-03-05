import providers__postgresql from '../providers/postgresql'
//
const create = (name, number) => {
	return providers__postgresql.query({
		text: 'insert into "table" (name, number) values ($1, $2)',
		values: [
			name,
			number,
		],
	})
}
const getall = () => {
	return providers__postgresql.query({
		text: 'select * from "table"',
	})
}
const getone = (id) => {
	return providers__postgresql.query({
		text: 'select * from "table" where id = $1',
		values: [
			id,
		],
	})
}
const remove = (id) => {
	return providers__postgresql.query({
		text: 'delete from "table" where id = $1',
		values: [
			id,
		],
	})
}
const update = (id, name, number) => {
	return providers__postgresql.query({
		text: 'update "table" set name = $2, number = $3 where id = $1',
		values: [
			id,
			name,
			number,
		],
	})
}
//
export {
	create,
	getall,
	getone,
	remove,
	update,
}
