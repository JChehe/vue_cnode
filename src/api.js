import reqwest from "reqwest"

const apiUrl = "https://cnodejs.org/api/v1/"

export default {
    topic: {
        getTopicList(opts, callback) {
            reqwest({
                url: apiUrl + "topics",
                method: "get",
                data: {
                    page: opts.page,
                    tab: opts.tab,
                    limit: opts.limit,
                    mdrender: opts.mdrender
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        getTopic(opts, callback) {
            reqwest({
                url: apiUrl + "topic/" + opts._id,
                method: "get",
                data: {
                    mdrender: opts.mdrender,
                    accesstoken: opts.accesstoken
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        newTopic(opts, callback) {
            reqwest({
                url: apiUrl + "topics",
                method: "post",
                data: {
                    accesstoken: opts.accesstoken,
                    title: opts.title,
                    tab: opts.tab, // only ask\share\job
                    content: opts.content
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    },
    collect: {
        topicCollect(opts, callback) {
            reqwest({
                url: apiUrl + "topic_collect/collect",
                method: "get",
                data: {
                    accesstoken: opts.accesstoken,
                    topic_id: opts.topic_id
                },
                callback(data) {
                    callback(opts)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        topicDeCollect(opts, callback) {
            reqwest({
                url: apiUrl + "topic_collect/de_collect",
                method: "post",
                data: {
                    accesstoken: opts.accesstoken,
                    topic_id: opts.topic_id
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        getUserCollect(opts, callback) {
            reqwest({
                url: apiUrl + "topic_collect/" + opts.loginname,
                method: "get",
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    },
    reply: {
        newReply(opts, callback) {
            reqwest({
                url: apiUrl + "topic/" + opts.topic_id + "/replies",
                method: "post",
                data: {
                    accesstoken: opts.accesstoken,
                    content: opts.content,
                    reply_id: opts.reply_id // 回复别人的评论
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        ups(opts, callback) {
            reqwest({
                url: apiUrl + "reply/" + opts.reply_id + "/ups",
                method: "post",
                data: {
                    accesstoken: opts.accesstoken
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    },
    user: {
        getUserInfo(opts, callback) {
            reqwest({
                url: apiUrl + "/user/" + opts.loginname,
                method: "get",
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        validateAccessToken(opts, callback) {
            reqwest({
                url: apiUrl + "/accesstoken",
                method: "post",
                data: {
                    accesstoken: opts.accesstoken
                },
                success(data) {
                    callback(data);

                    // 返回格式
                    /*avatar_url: "https://avatars.githubusercontent.com/u/8402442?v=3&s=120"
                    id: "5608e997272b724e5efefd08"
                    loginname: "JChehe"
                    success: true*/
                },
                error(err) {
                    console.log(err)
                }

            })
        }
    },
    message: {
        getMessage(opts, callback) {
            reqwest({
                url: apiUrl + "/messages",
                method: "get",
                data: {
                    accesstoken: opts.accesstoken,
                    mdrender: opts.mdrender
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        },
        mark_all(opts, callback) {
            reqwest({
                url: apiUrl + "/message/" + opts.mark_all,
                method: "post",
                data: {
                    accesstoken: opts.accesstoken
                },
                success(data) {
                    callback(data)
                },
                error(err) {
                    console.log(err)
                }
            })
        }
    }
}
