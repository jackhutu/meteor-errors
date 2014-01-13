/**
 * Created by Administrator on 14-1-13.
 */
Meteor.errors = new Meteor.Collection(null);
Meteor.Errors = {
  throw: function(message) {
    Meteor.errors.insert({message: message, seen: false})
  },
  clear: function() {
    Meteor.errors.remove({seen: true});
  }
}