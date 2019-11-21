
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/local',
	db_schemas: [
        {file:'./user_schema', collection:'users6', schemaName:'UserSchema', modelName:'UserModel'}
        ,{file:'./post_schema', collection:'post', schemaName:'PostSchema', modelName:'PostModel'}
        ,{file:'./post_schema', collection:'post2', schemaName:'PostSchema2', modelName:'PostModel2'}
        ,{file:'./post_schema', collection:'post3', schemaName:'PostSchema3', modelName:'PostModel3'}
        ,{file:'./post_schema', collection:'post4', schemaName:'PostSchema4', modelName:'PostModel4'}
	],
	route_info: [
         {file:'./post', path:'/process/addpost', method:'addpost', type:'post'}
        ,{file:'./post', path:'/process/showpost/:id', method:'showpost', type:'get'}
        ,{file:'./post', path:'/process/listpost', method:'listpost', type:'post'}
        ,{file:'./post', path:'/process/listpost', method:'listpost', type:'get'}
        
        ,{file:'./post2', path:'/process/addpost2', method:'addpost2', type:'post'}
        ,{file:'./post2', path:'/process/showpost2/:id', method:'showpost2', type:'get'}
        ,{file:'./post2', path:'/process/listpost2', method:'listpost2', type:'post'}
        ,{file:'./post2', path:'/process/listpost2', method:'listpost2', type:'get'}
        
        ,{file:'./post3', path:'/process/addpost3', method:'addpost3', type:'post'}
        ,{file:'./post3', path:'/process/showpost3/:id', method:'showpost3', type:'get'}
        ,{file:'./post3', path:'/process/listpost3', method:'listpost3', type:'post'}
        ,{file:'./post3', path:'/process/listpost3', method:'listpost3', type:'get'}
        
        ,{file:'./post4', path:'/process/addpost4', method:'addpost4', type:'post'}
        ,{file:'./post4', path:'/process/showpost4/:id', method:'showpost4', type:'get'}
        ,{file:'./post4', path:'/process/listpost4', method:'listpost4', type:'post'}
        ,{file:'./post4', path:'/process/listpost4', method:'listpost4', type:'get'}
	],
	facebook: {		// passport facebook
		clientID: '1442860336022433',
		clientSecret: '13a40d84eb35f9f071b8f09de10ee734',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {		// passport twitter
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/twitter/callback'
	},
	google: {		// passport google
		clientID: 'id',
		clientSecret: 'secret',
		callbackURL: '/auth/google/callback'
	}
}