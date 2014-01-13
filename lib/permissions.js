/**
 * Created by Administrator on 14-1-13.
 */
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}