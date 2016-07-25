import reqwest from "reqwest"

const apiUrl = "https://cnodejs.org/api/v1/"

export default{
	topic: {
		getTopicList: function(opts, callback){
			reqwest({
				url: apiUrl + "topics",
				method: "get",
				data: {
					page: opts.page,
					tab: opts.tab,
					limit: opts.limit,
					mdrender: opts.mdrender
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		},
		getTopic: function(opts, callback){
			reqwest({
				url: apiUrl + "topic/" + opts._id,
				method: "get",
				data:{
					mdrender: opts.mdrender,
					accesstoken: opts.accesstoken
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		},
		newTopic: function(opts, callback){
			reqwest({
				url: apiUrl + "post",
				method: "get",
				data: {
					accesstoken: opts.accesstoken,
					title: opts.title,
					tab: opts.tab, // only ask\share\job
					content: opts.content
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		}
	},
	collect: {
		topicCollect: function(opts, callback){
			reqwest({
				url: apiUrl + "topic_collect/collect",
				method: "get",
				data: {
					accesstoken: opts.accesstoken,
					topic_id: opts.topic_id
				},
				callback: function(data){
					callback(opts)
				},
				error: function(err){
					console.log(err)
				}
			})
		},
		topicDeCollect: function(opts, callback){
			reqwest({
				url: apiUrl + "topic_collect/de_collect",
				method: "post",
				data:{
					accesstoken: opts.accesstoken,
					topic_id: opts.topic_id
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		},
		getUserCollect: function(opts, callback){
			reqwest({
				url: apiUrl + "topic_collect/" + opts.loginname,
				method: "get",
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		}
	},
	reply: {
		newReply: function(opts, callback){
			reqwest({
				url: apiUrl + "topic/" + opts.topic_id + "/replies",
				method: "post",
				data: {
					accesstoken: opts.accesstoken,
					content: opts.content,
					reply_id: opts.reply_id
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		},
		ups: function(opts, callback){
			reqwest({
				url: apiUrl + "reply/" + opts.reply_id + "/ups",
				method: "post",
				data:{
					accesstoken: opts.accesstoken
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		}
	},
	user: {
		getUserInfo: function(opts, callback){
			reqwest({
				url: apiUrl + "/user/" + opts.loginname,
				method: "get",
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		},
		validateAccessToken: function(opts, callback){
			reqwest({
				url: apiUrl + "/accesstoken",
				method: "post",
				data:{
					accesstoken: opts.accesstoken
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}

			})
		}
	},
	message: {
		getMessage: function(opts, callback){
			reqwest({
				url: apiUrl + "/messages",
				method: "get",
				data: {
					accesstoken: opts.accesstoken,
					mdrender: opts.mdrender
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					 console.log(err)
				}
			})
		},
		mark_all: function(opts, callback){
			reqwest({
				url: apiUrl + "/message/" + opts.mark_all,
				method: "post",
				data: {
					accesstoken: opts.accesstoken
				},
				success: function(data){
					callback(data)
				},
				error: function(err){
					console.log(err)
				}
			})
		}
	}
}