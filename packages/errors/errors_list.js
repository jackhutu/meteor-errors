/**
 * Created by Administrator on 14-1-13.
 */
Template.meteorErrors.helpers({
  errors: function() {
    return Meteor.errors.find();
  }
});
Template.meteorError.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Meteor.errors.update(error._id, {$set: {seen: true}});
  });
};