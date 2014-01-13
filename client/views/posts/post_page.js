/**
 * Created by hutu on 14-1-12.
 */
Template.postPage.helpers({
    currentPost: function() {
        return Posts.findOne(Session.get('currentPostId'));
    }
});