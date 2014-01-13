/**
 * Created by hutu on 14-1-12.
 */
Meteor.publish('posts',function(){
    return Posts.find();
});