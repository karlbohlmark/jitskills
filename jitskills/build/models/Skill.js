(function() {
  var Skill;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Skill = (function() {
    __extends(Skill, Batman.Model);
    function Skill() {
      Skill.__super__.constructor.apply(this, arguments);
    }
    Skill.persist(Batman.LocalStorage);
    Skill.global(true);
    Skill.encode('name', 'likes');
    Skill.encode('created_at', 'updated_at', {
      encode: function(time) {
        return time.toISOString();
      },
      decode: function(timeString) {
        return Date.parse(timeString);
      }
    });
    return Skill;
  })();
  /*
      @encode 'tags',
        encode: (tagSet) -> tagSet.toArray().join(', ')
        decode: (tagString) -> new Batman.Set(tagString.split(', ')
  */
}).call(this);
